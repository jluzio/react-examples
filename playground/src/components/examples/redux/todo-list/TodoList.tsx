import React from 'react'
import { List } from 'antd'
import { connect, ConnectedProps } from 'react-redux'
import { Todo } from './store/models'
import TodoListItem from './TodoListItem'
import { RootState, todoActions, selectors } from './store'

const mapStateToProps = (state: RootState) => ({
  todos: selectors.selectVisibleTodos(state)
})
const loggingMapState = (state: RootState) => {
  return mapStateToProps(state)
}
const mapDispatchToProps = { onToggleTodo: todoActions.toggleTodo }
const connector = connect(loggingMapState, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps

const TodoList: React.FC<Props> = ({ onToggleTodo, todos }: Props) => {
  const handleTodoClick = (todo: Todo) => {
    onToggleTodo({ id: todo.id })
  }

  return (
    <List
      dataSource={todos}
      renderItem={item => (
        <TodoListItem todo={item} onClick={handleTodoClick} />
      )}
    />
  )
}

export default connector(TodoList)
