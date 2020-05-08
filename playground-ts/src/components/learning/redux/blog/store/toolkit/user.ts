/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { User } from 'services/placeholder/models'
import userService from 'services/placeholder/user-service'

export type UserState = User[]

const initialState: UserState = []

const fetchUser = createAsyncThunk(
  'users/fetch',
  async (userId: number, thunkAPI) => (await userService.getUser(userId)).data
)

export const userSlice = createSlice({
  name: 'users',
  initialState: initialState as UserState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      return action.payload
    }
  },
  extraReducers: {
    [fetchUser.fulfilled.type]: (
      state,
      action: ReturnType<typeof fetchUser.fulfilled>
    ) => {
      return [...state, action.payload]
    }
  }
})

export const userReducer = userSlice.reducer

export const userActions = {
  ...userSlice.actions,
  fetchUser
}
