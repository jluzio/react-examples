import { createSlice } from '@reduxjs/toolkit'

export type CounterState = number

const initialState: CounterState = 0

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState as CounterState,
  reducers: {
    incrementCounter: state => state + 1,
    decrementCounter: state => state - 1
  }
})

export const counterReducer = counterSlice.reducer

export const counterActions = counterSlice.actions
