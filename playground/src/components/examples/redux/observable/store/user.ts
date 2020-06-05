/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'services/placeholder/models'
import _ from 'lodash'

export type UserState = {
  values: Record<number, User>
  status: {
    pending: boolean
    errorMessage: string | undefined
  }
}

const initialState: UserState = {
  values: {},
  status: {
    errorMessage: undefined,
    pending: false
  }
}

// const fetchUser = createAction<{ id: number }, 'users/fetch'>('users/fetch')
// const fetchAllUsers = createAction('users/fetch_all')

const userSlice = createSlice({
  name: 'users',
  initialState: initialState as UserState,
  reducers: {
    fetchUser(state, action: PayloadAction<{ id: number }>) {
      return {
        ...state,
        status: {
          ...state.status,
          pending: true,
          errorMessage: undefined
        }
      }
    },
    fetchUserSuccessful(state, action: PayloadAction<{ user: User }>) {
      const { user } = action.payload
      const users = { ...state.values, [user.id]: user }
      return {
        ...state,
        values: users,
        status: {
          ...state.status,
          pending: false,
          errorMessage: undefined
        }
      }
    },
    fetchUserFailed(state, action: PayloadAction<{ message: string }>) {
      const { message } = action.payload
      return {
        ...state,
        status: {
          ...state.status,
          pending: false,
          errorMessage: message
        }
      }
    }
  }
})

export const userReducer = userSlice.reducer

export const userActions = {
  ...userSlice.actions
}
