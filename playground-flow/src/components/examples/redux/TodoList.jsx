// @flow
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { List } from '@material-ui/core'
import { connect, ConnectedProps } from 'react-redux'
import type { Todo, VisibilityFilters } from './store/models'
import TodoListItem from './TodoListItem'
import { todoActions, selectors } from './store'
import type { RootState } from './store'

const { selectVisibleTodos } = selectors

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilters) => {
  let completedFilter: boolean[]
  switch (filter) {
    case 'SHOW_ACTIVE':
      completedFilter = [false]
      break
    case 'SHOW_COMPLETED':
      completedFilter = [true]
      break
    default:
      completedFilter = [true, false]
  }
  return todos.filter((t) => completedFilter.includes(t.completed))
}

const mapStateToProps = (state: RootState) => ({
  todos: selectVisibleTodos
    ? selectVisibleTodos(state)
    : getVisibleTodos(state.todos, state.visibilityFilter),
  visibilityFilter: state.visibilityFilter,
})
const loggingMapState = (state: RootState) => {
  return mapStateToProps(state)
}
const mapDispatchToProps = { onToggleTodo: todoActions.toggleTodo }
const connector = connect(loggingMapState, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps

const TodoList = ({ onToggleTodo, todos, visibilityFilter }: Props) => {
  const handleTodoClick = (todo: Todo) => {
    const index = todos.indexOf(todo)
    onToggleTodo({ index })
  }

  return (
    <List>
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} key={todo.text} onClick={handleTodoClick} />
      ))}
    </List>
  )
}

export default connector(TodoList)
