import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from 'services/placeholder/user-service'
import { User } from 'services/placeholder/models'
import _ from 'lodash'

export type UserState = Record<number, User>

const fetchAllUsers = createAsyncThunk(
  'users/fetch_all',
  async thunkAPI => (await userService.list()).data
)

const fetchUser = createAsyncThunk(
  'users/fetch',
  async (userId: number, thunkAPI) => (await userService.get(userId)).data
)

const userSlice = createSlice({
  name: 'users',
  initialState: [] as UserState,
  reducers: {},
  extraReducers: {
    [fetchAllUsers.fulfilled.type]: (
      state,
      action: ReturnType<typeof fetchAllUsers.fulfilled>
    ) => _.mapKeys(action.payload, 'id'),
    [fetchUser.fulfilled.type]: (
      state,
      action: ReturnType<typeof fetchUser.fulfilled>
    ) => ({ ...state, [action.payload.id]: action.payload })
  }
})

export const userReducer = userSlice.reducer

export const userActions = {
  ...userSlice.actions,
  fetchAllUsers,
  fetchUser
}
