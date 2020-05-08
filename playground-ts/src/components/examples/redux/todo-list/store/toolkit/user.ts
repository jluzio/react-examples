import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import userService from 'services/placeholder/user-service'
import { User } from 'services/placeholder/models'

export type UserState = User[]

const initialState: UserState = []

// async actions
const fetchUsers = createAsyncThunk('todos/fetch', async thunkAPI => {
  const response = await userService.getUsers()
  return response.data
})

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled.type]: (
      state,
      action: ReturnType<typeof fetchUsers.fulfilled>
    ) => {
      return action.payload
    }
  }
})

export const userReducer = userSlice.reducer

export const userActions = {
  ...userSlice.actions,
  fetchUsers
}
