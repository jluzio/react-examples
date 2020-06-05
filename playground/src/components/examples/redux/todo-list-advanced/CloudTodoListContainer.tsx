/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Todo } from './models'
import { RootState, cloudTodoActions, selectors } from './store'
import TodoList from './TodoList'
import { locations } from './routes'

type OwnProps = {}
const mapStateToProps = (state: RootState) => ({
  todos: selectors.selectTodoList(state)
})
const mapDispatchToProps = {
  fetchTodos: cloudTodoActions.fetchTodos,
  toggleTodo: cloudTodoActions.toggleTodo,
  deleteTodo: cloudTodoActions.deleteTodo
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & OwnProps

const TodoListContainer: React.FC<Props> = ({
  todos,
  fetchTodos,
  toggleTodo,
  deleteTodo
}: Props) => {
  const history = useHistory()

  useEffect(() => {
    fetchTodos()
  }, [])

  const handleCreate = () => history.push(locations.create())
  const handleEdit = (todo: Todo) => history.push(locations.edit(todo.id))
  const handleToggle = (todo: Todo) => toggleTodo(todo)
  const handleDelete = (todo: Todo) => deleteTodo(todo)

  return (
    <TodoList
      todos={todos}
      onCreate={handleCreate}
      onEdit={handleEdit}
      onToggle={handleToggle}
      onDelete={handleDelete}
    />
  )
}

export default connector(TodoListContainer)
