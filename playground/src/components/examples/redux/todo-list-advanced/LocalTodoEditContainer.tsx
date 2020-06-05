import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useHistory, RouteComponentProps } from 'react-router-dom'
import { Todo } from '../shared/todo/models'
import { todoActions, selectors, RootState } from './store'
import TodoEdit from '../shared/todo/TodoEdit'
import { locations, RouteIdParams } from './routes'

type RouteProps = RouteComponentProps<RouteIdParams>

type OwnProps = RouteProps

const mapStateToProps = (state: RootState, props: OwnProps) => ({
  todo: props.match.params.id
    ? selectors.selectTodoByTodoId(state, props)
    : undefined
})
const mapDispatchToProps = {
  createTodo: todoActions.createTodo,
  updateTodo: todoActions.updateTodo
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = OwnProps & ReduxProps

const TodoEditContainer: React.FC<Props> = ({
  todo: initialTodo,
  createTodo,
  updateTodo
}: Props) => {
  const history = useHistory()
  const newTodo: Todo = { id: '', title: '', completed: false }

  const handleSave = (todo: Todo) => {
    if (initialTodo) {
      updateTodo({ todo })
    } else {
      createTodo({ todo })
    }
    history.push(locations.list())
  }
  const handleCancel = (todo?: Todo) => {
    history.push(locations.list())
  }
  return (
    <TodoEdit
      defaultValues={initialTodo ?? newTodo}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  )
}

export default connector(TodoEditContainer)
