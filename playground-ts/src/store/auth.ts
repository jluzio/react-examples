/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createAction,
  createAsyncThunk,
  PayloadAction,
  createSlice
} from '@reduxjs/toolkit'
import { UserProfile } from 'api/oauth2/models'

export interface AuthState {
  signedIn: boolean
  userProfile?: UserProfile
}

const initialState: AuthState = {
  signedIn: false,
  userProfile: undefined
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<UserProfile>) => {
      const signInData: Partial<AuthState> = {
        signedIn: true,
        userProfile: action.payload
      }
      return { ...state, ...signInData }
    },
    signOut: state => {
      const signInData: Partial<AuthState> = {
        signedIn: false,
        userProfile: undefined
      }
      return { ...state, ...signInData }
    }
  }
})

export const authReducer = authSlice.reducer

export const authActions = authSlice.actions
