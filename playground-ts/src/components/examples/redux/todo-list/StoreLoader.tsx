import React, { PropsWithChildren } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Button, Card } from 'antd'
import { RootState, userActions, todoActions } from './store'

const mapStateToProps = (state: RootState) => ({
  users: state.users
})
const mapDispatchToProps = {
  onFetchUsers: userActions.fetchUsers,
  onAddTodo: todoActions.addTodo
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type OwnProps = {}
type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps & PropsWithChildren<OwnProps>

const StoreLoader: React.FC<Props> = (props: Props) => {
  const { onFetchUsers, users, onAddTodo } = props
  const onTodosForUsers = () => {
    users.forEach(user => {
      onAddTodo({
        todo: {
          text: `Todo for ${user.name}`,
          completed: false
        }
      })
    })
  }
  return (
    <Card title="Store Loader">
      <Button onClick={onFetchUsers}>Fetch Users</Button>
      <Button onClick={onTodosForUsers}>Create Todos for Users</Button>
    </Card>
  )
}

export default connector(StoreLoader)
