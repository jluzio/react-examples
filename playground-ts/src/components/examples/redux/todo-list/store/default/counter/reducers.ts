import { createReducer } from '@reduxjs/toolkit'
import { incrementCounter, decrementCounter } from './actions'

export type CounterState = number

const initialState: CounterState = 0

export const counterReducer = createReducer(initialState as CounterState, {
  [incrementCounter.type]: state => state + 1,
  [decrementCounter.type]: state => state - 1
})
