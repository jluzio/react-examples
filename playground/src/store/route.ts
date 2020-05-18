/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface RouteState {
  rootRoute: string
}

const initialState: RouteState = {
  rootRoute: ''
}

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    rootRoute: (state, action: PayloadAction<string>) => {
      return { ...state, rootRoute: action.payload }
    }
  }
})

export const routeReducer = routeSlice.reducer

export const routeActions = routeSlice.actions
