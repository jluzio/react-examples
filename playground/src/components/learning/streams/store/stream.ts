import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { StreamCreateData, Stream } from '../models'
import streamService from '../services/stream-service'

type StreamState = Stream[]

const initialState: StreamState = []

const createStream = createAsyncThunk(
  'stream/create',
  async (createData: StreamCreateData) => {
    const result = await streamService.create(createData)
    const stream: Stream = { ...createData, ...result.data }
    return stream
  }
)

const listStreams = createAsyncThunk('stream/list', async () => {
  const result = await streamService.list()
  return result.data
})

export const streamSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {},
  extraReducers: {
    [createStream.fulfilled.type]: (
      state,
      action: ReturnType<typeof createStream.fulfilled>
    ) => {
      return [...state, action.payload]
    },
    [listStreams.fulfilled.type]: (
      state,
      action: ReturnType<typeof listStreams.fulfilled>
    ) => {
      return action.payload
    }
  }
})

export const streamReducer = streamSlice.reducer

export const streamActions = {
  ...streamSlice.actions,
  createStream,
  listStreams
}
