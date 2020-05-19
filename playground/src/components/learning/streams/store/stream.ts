import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import { ActionStatus } from 'store/models'
import {
  StatusState,
  statusReducer,
  statusActions,
  ResetStatusPayload
} from 'store/status'
import { StreamCreateData, Stream } from '../data/models'
import streamService from '../services/stream-service'
import { AsyncThunkConfig } from './thunk-config'

export type StreamMap = {
  [key: number]: Stream
}
export type StreamState = {
  values: StreamMap
  status: StatusState
}

const initialState: StreamState = {
  values: {},
  status: {
    pending: false,
    errors: [],
    statusByRequestId: {}
  }
}

const listStreams = createAsyncThunk('stream/list', async () => {
  const result = await streamService.list()
  return result.data
})

const getStream = createAsyncThunk('stream/get', async (id: number) => {
  const response = await streamService.get(id)
  return response.data
})

const createStream = createAsyncThunk<
  Stream,
  StreamCreateData,
  AsyncThunkConfig
>('stream/create', async (createData, thunkApi) => {
  const state = thunkApi.getState()
  const finalCreateData: StreamCreateData = {
    ...createData,
    userId: state.auth.userProfile?.id
  }
  const response = await streamService.create(finalCreateData)
  // TODO: figure correct place for redirect (component / action creator / ?)
  return response.data
})

const updateStream = createAsyncThunk(
  'stream/update',
  async (stream: Stream) => {
    const response = await streamService.update(stream.id, stream)
    // TODO: figure correct place for redirect (component / action creator / ?)
    return response.data
  }
)

const deleteStream = createAsyncThunk(
  'stream/delete',
  async (stream: Stream) => {
    await streamService.delete(stream.id)
    return stream
  }
)

const pendingReducer = <P>(
  state: StreamState,
  action: PayloadAction<P> & ActionStatus
): StreamState => {
  return {
    ...state,
    status: statusReducer(state.status, statusActions.pending(action))
  }
}
const rejectedReducer = <P>(
  state: StreamState,
  action: PayloadAction<P> & ActionStatus
): StreamState => {
  return {
    ...state,
    status: statusReducer(state.status, statusActions.rejected(action))
  }
}
const fulfilledReducer = <P>(
  state: StreamState,
  action: PayloadAction<P> & ActionStatus
): StreamState => {
  return {
    ...state,
    status: statusReducer(state.status, statusActions.fulfilled(action))
  }
}

export const streamSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {
    resetStreamStatus: (state, action: PayloadAction<ResetStatusPayload>) => ({
      ...state,
      status: statusReducer(state.status, statusActions.reset(action.payload))
    })
  },
  extraReducers: {
    [listStreams.pending.type]: pendingReducer,
    [listStreams.rejected.type]: rejectedReducer,
    [listStreams.fulfilled.type]: (
      state,
      action: ReturnType<typeof listStreams.fulfilled>
    ) =>
      fulfilledReducer(
        {
          ...state,
          values: _.mapKeys(action.payload, 'id')
        },
        action
      ),
    [createStream.pending.type]: pendingReducer,
    [createStream.rejected.type]: rejectedReducer,
    [createStream.fulfilled.type]: (
      state,
      action: ReturnType<typeof createStream.fulfilled>
    ) =>
      fulfilledReducer(
        {
          ...state,
          values: { ...state.values, [action.payload.id]: action.payload }
        },
        action
      ),
    [updateStream.pending.type]: pendingReducer,
    [updateStream.rejected.type]: rejectedReducer,
    [updateStream.fulfilled.type]: (
      state,
      action: ReturnType<typeof updateStream.fulfilled>
    ) =>
      fulfilledReducer(
        {
          ...state,
          values: { ...state.values, [action.payload.id]: action.payload }
        },
        action
      ),
    [deleteStream.pending.type]: pendingReducer,
    [deleteStream.rejected.type]: rejectedReducer,
    [deleteStream.fulfilled.type]: (
      state,
      action: ReturnType<typeof deleteStream.fulfilled>
    ) =>
      fulfilledReducer(
        {
          ...state,
          values: _.omit(state.values, action.payload.id)
        },
        action
      )
  }
})

export const streamReducer = streamSlice.reducer

export const streamActions = {
  ...streamSlice.actions,
  listStreams,
  getStream,
  createStream,
  updateStream,
  deleteStream
}
