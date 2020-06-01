// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { VisibilityFilters } from './models'

export type FilterState = VisibilityFilters

const initialState: FilterState = 'SHOW_ALL'

export const filterSlice = createSlice<FilterState>({
  name: 'filter',
  initialState,
  reducers: {
    setVisibilityFilter: (
      state,
      action: PayloadAction<{ filter: VisibilityFilters }>
    ) => action.payload.filter,
  },
})

export const filterReducer = filterSlice.reducer

export const filterActions = filterSlice.actions
