/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { List } from 'antd'
import log from 'utils/Log'
import { connect, ConnectedProps } from 'react-redux'
import { Todo, VisibilityFilters } from './store/models'
import TodoListItem from './TodoListItem'
import { RootState, todoActions } from './store'

const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
})
const loggingMapState = (state: RootState) => {
  log.info('mapState')
  return mapStateToProps(state)
}
const mapDispatchToProps = { onToggleTodo: todoActions.toggleTodo }
const connector = connect(loggingMapState, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps

class TodoList extends Component<Props> {
  handleTodoClick = (todo: Todo) => {
    const { onToggleTodo, todos } = this.props
    const index = todos.indexOf(todo)
    log.info('handleTodoClick', {
      todo,
      index
    })
    onToggleTodo({ index })
  }

  getVisibleTodos = (todos: Todo[], filter: VisibilityFilters) => {
    console.log('getVisibleTodos')
    let completedFilter: boolean[]
    switch (filter) {
      case VisibilityFilters.SHOW_ACTIVE:
        completedFilter = [false]
        break
      case VisibilityFilters.SHOW_COMPLETED:
        completedFilter = [true]
        break
      default:
        completedFilter = [true, false]
    }
    return todos.filter(t => completedFilter.includes(t.completed))
  }

  render() {
    const { todos, visibilityFilter } = this.props
    const visibleTodos = this.getVisibleTodos(todos, visibilityFilter)
    return (
      <List
        dataSource={visibleTodos}
        renderItem={item => (
          <TodoListItem todo={item} onClick={this.handleTodoClick} />
        )}
      />
    )
  }
}

export default connector(TodoList)
