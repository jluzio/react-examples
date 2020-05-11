import { VisibilityFilters } from '../models'
import { RootState } from '..'

export const selectVisibleTodos = (state: RootState) => {
  const { todos, visibilityFilter } = state
  switch (visibilityFilter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error(`Unknown filter: ${visibilityFilter}`)
  }
}

export const selectors = {
  selectVisibleTodos
}
