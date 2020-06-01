// @flow
/* eslint-disable react/prop-types */
import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Button } from '@material-ui/core'
import { filterActions } from './store'
import type { RootState } from './store'
import type { VisibilityFilters } from './store/models'

const mapStateToProps = (state: RootState) => ({
  currentFilter: state.visibilityFilter,
})
const mapDispatchToProps = {
  onSetVisibilityFilter: (filter: VisibilityFilters) =>
    filterActions.setVisibilityFilter({ filter }),
}
const connector = connect(mapStateToProps, mapDispatchToProps)

type OwnProps = {
  filter: VisibilityFilters,
  children: React.Node,
}
type ReduxProps = ConnectedProps<typeof connector>
type Props = OwnProps & ReduxProps

const FilterLink = ({
  children,
  currentFilter,
  filter,
  onSetVisibilityFilter,
}: Props) => {
  const isCurrentFilter = filter === currentFilter
  const handleVisibilityFilter = () => {
    if (!isCurrentFilter) {
      onSetVisibilityFilter(filter)
    }
  }
  return (
    <Button
      color={isCurrentFilter ? 'primary' : 'default'}
      onClick={handleVisibilityFilter}
    >
      {children}
    </Button>
  )
}

export default connector(FilterLink)
