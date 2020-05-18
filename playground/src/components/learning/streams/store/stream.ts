import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import _ from 'lodash'
import history from 'router/history'
import { StreamCreateData, Stream } from '../data/models'
import streamService from '../services/stream-service'
import { AsyncThunkConfig } from './thunk-config'

export type StreamState = {
  [key: number]: Stream
}

const initialState: StreamState = []

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
  history.goBack()
  return response.data
})

const updateStream = createAsyncThunk(
  'stream/update',
  async (stream: Stream) => {
    const response = await streamService.update(stream.id, stream)
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

export const streamSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {},
  extraReducers: {
    [listStreams.fulfilled.type]: (
      state,
      action: ReturnType<typeof listStreams.fulfilled>
    ) => {
      return _.mapKeys(action.payload, 'id')
    },
    [getStream.fulfilled.type]: (
      state,
      action: ReturnType<typeof getStream.fulfilled>
    ) => {
      return { ...state, [action.payload.id]: action.payload }
    },
    [createStream.fulfilled.type]: (
      state,
      action: ReturnType<typeof createStream.fulfilled>
    ) => {
      return { ...state, [action.payload.id]: action.payload }
    },
    [updateStream.fulfilled.type]: (
      state,
      action: ReturnType<typeof updateStream.fulfilled>
    ) => {
      return { ...state, [action.payload.id]: action.payload }
    },
    [deleteStream.fulfilled.type]: (
      state,
      action: ReturnType<typeof deleteStream.fulfilled>
    ) => {
      return _.omit(state, action.payload.id)
    }
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
