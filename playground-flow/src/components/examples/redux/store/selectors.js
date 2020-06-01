// @flow
import { createSelector } from '@reduxjs/toolkit'
import type { VisibilityFilters } from './models'
import type { RootState } from '.'

const selectTodos = (state: RootState) => state.todos
const selectFilter = (state: RootState) => state.visibilityFilter

export const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter((t) => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter((t) => !t.completed)
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  }
)

export const selectors = {
  selectVisibleTodos,
}
