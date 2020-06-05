import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Todo } from './models'
import { RootState, todoActions, selectors } from './store'
import TodoList from './TodoList'
import { locations } from './routes'

type OwnProps = {}
const mapStateToProps = (state: RootState) => ({
  todos: selectors.selectTodoList(state)
})
const mapDispatchToProps = {
  toggleTodo: todoActions.toggleTodo,
  deleteTodo: todoActions.deleteTodo
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & OwnProps

const TodoListContainer: React.FC<Props> = ({
  todos,
  toggleTodo,
  deleteTodo
}: Props) => {
  const history = useHistory()

  const handleCreate = () => history.push(locations.create())
  const handleEdit = (todo: Todo) => history.push(locations.edit(todo.id))
  const handleToggle = (todo: Todo) => toggleTodo({ id: todo.id })
  const handleDelete = (todo: Todo) => deleteTodo({ id: todo.id })

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
