import { createAction } from '@reduxjs/toolkit'
import { VisibilityFilters } from '../../models'

export enum FilterActionType {
  SET_VISIBILITY_FILTER = 'filter/setVisibilityFilter'
}

/*
 * action creators
 */
export const setVisibilityFilter = createAction<
  { filter: VisibilityFilters },
  FilterActionType.SET_VISIBILITY_FILTER
>(FilterActionType.SET_VISIBILITY_FILTER)

export type FilterActionReturnType = ReturnType<typeof setVisibilityFilter>

export const filterActions = {
  setVisibilityFilter
}
