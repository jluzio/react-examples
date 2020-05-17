import { VisibilityFilters } from '../../models'
import { setVisibilityFilter, FilterActionReturnType } from './actions'

export type FilterState = VisibilityFilters

const initialState: FilterState = VisibilityFilters.SHOW_ALL

export function filterReducer(
  state: FilterState = initialState,
  action: FilterActionReturnType
): FilterState {
  if (setVisibilityFilter.match(action)) {
    return action.payload.filter
  }
  return state
}
