import { createAction } from '@reduxjs/toolkit'
import { VisibilityFilters } from '../../models'

const actionType = (type: string) => `filter/${type}`

/*
 * action creators
 */
export const setVisibilityFilter = createAction<{ filter: VisibilityFilters }>(
  actionType('setVisibilityFilter')
)

/** TODO: check if it's useful or not */
export type FilterActions = ReturnType<typeof setVisibilityFilter>
