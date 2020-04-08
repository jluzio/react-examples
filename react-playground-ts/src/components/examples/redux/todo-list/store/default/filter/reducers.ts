import { VisibilityFilters } from '../../models'
import { setVisibilityFilter, FilterActions } from './actions'

export type FilterState = VisibilityFilters

const initialState: FilterState = VisibilityFilters.SHOW_ALL

export function visibilityFilterReducer(
  state: FilterState = initialState,
  action: FilterActions
): FilterState {
  if (setVisibilityFilter.match(action)) {
    return action.payload.filter
  }
  return state
}
