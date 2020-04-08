import React, { PropsWithChildren } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Button } from 'antd'
import { RootState, setVisibilityFilter } from './store'
import { VisibilityFilters } from './store/models'

const mapState = (state: RootState) => ({
  currentFilter: state.visibilityFilter
})

const mapDispatch = {
  onSetVisibilityFilter: (filter: VisibilityFilters) =>
    setVisibilityFilter({ filter })
}

const connector = connect(mapState, mapDispatch)

type OwnProps = {
  filter: VisibilityFilters
}
type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps & PropsWithChildren<OwnProps>

const FilterLink: React.FC<Props> = (props: Props) => {
  const { children, filter, currentFilter, onSetVisibilityFilter } = props
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
