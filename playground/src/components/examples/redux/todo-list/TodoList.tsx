/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { List } from 'antd'
import { connect, ConnectedProps } from 'react-redux'
import { Todo, VisibilityFilters } from './store/models'
import TodoListItem from './TodoListItem'
import { RootState, todoActions, selectors } from './store'

const { selectVisibleTodos } = selectors

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilters) => {
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

const mapStateToProps = (state: RootState) => ({
  todos: selectVisibleTodos
    ? selectVisibleTodos(state)
    : getVisibleTodos(state.todos, state.visibilityFilter),
  visibilityFilter: state.visibilityFilter
})
const loggingMapState = (state: RootState) => {
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
    onToggleTodo({ index })
  }

  render() {
    const { todos } = this.props
    return (
      <List
        dataSource={todos}
        renderItem={item => (
          <TodoListItem todo={item} onClick={this.handleTodoClick} />
        )}
      />
    )
  }
}

export default connector(TodoList)
