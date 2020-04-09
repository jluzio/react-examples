import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VisibilityFilters } from '../models'

export type FilterState = VisibilityFilters

const initialState: FilterState = VisibilityFilters.SHOW_ALL

export const visibilityFilterSlice = createSlice({
  name: 'filter',
  initialState: initialState as FilterState,
  reducers: {
    setVisibilityFilter: (
      state,
      action: PayloadAction<{ filter: VisibilityFilters }>
    ) => action.payload.filter
  }
})
