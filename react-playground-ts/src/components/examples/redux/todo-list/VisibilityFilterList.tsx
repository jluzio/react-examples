import React from 'react'
import FilterLink from './FilterLink'
import { VisibilityFilters } from './store/models'

const VisibilityFilterList: React.FC = () => (
  <div>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)

export default VisibilityFilterList
