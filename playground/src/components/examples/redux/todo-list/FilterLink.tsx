import React, { PropsWithChildren } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Button } from 'antd'
import { RootState, filterActions } from './store'
import { VisibilityFilters } from './store/models'

const mapStateToProps = (state: RootState) => ({
  currentFilter: state.visibilityFilter
})
const mapDispatchToProps = {
  onSetVisibilityFilter: (filter: VisibilityFilters) =>
    filterActions.setVisibilityFilter({ filter })
}
const connector = connect(mapStateToProps, mapDispatchToProps)

type OwnProps = {
  filter: VisibilityFilters
}
type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps & PropsWithChildren<OwnProps>

const FilterLink: React.FC<Props> = ({
  currentFilter,
  filter,
  onSetVisibilityFilter,
  children
}: Props) => {
  const isCurrentFilter = filter === currentFilter
  const handleVisibilityFilter = () => {
    if (!isCurrentFilter) {
      onSetVisibilityFilter(filter)
    }
  }
  return (
    <Button
      type={isCurrentFilter ? 'primary' : 'default'}
      onClick={handleVisibilityFilter}
    >
      {children}
    </Button>
  )
}

export default connector(FilterLink)
