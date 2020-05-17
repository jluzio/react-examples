import { createSelector } from '@reduxjs/toolkit'
import { VisibilityFilters } from '../models'
import { RootState } from '..'

const selectTodos = (state: RootState) => state.todos
const selectFilter = (state: RootState) => state.visibilityFilter

export const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  }
)

export const selectors = {
  selectVisibleTodos
}
