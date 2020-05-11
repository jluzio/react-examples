import React, { PropsWithChildren } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Button, Card, Layout } from 'antd'
import { RootState, userActions, todoActions } from './store'
import UserTag from './UserTag'

const mapStateToProps = (state: RootState) => ({
  users: state.users
})
const mapDispatchToProps = {
  // thunk async actions can clash with SyntheticEvent reuse, so using () => action
  onFetchUsers: () => userActions.fetchUsers(),
  onAddTodo: todoActions.addTodo
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type OwnProps = {}
type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps & PropsWithChildren<OwnProps>

const UserList: React.FC<Props> = (props: Props) => {
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

  // using UserTag with id
  return (
    <Layout.Content>
      <Card
        title="Users"
        actions={[
          <Button onClick={onFetchUsers}>Fetch Users</Button>,
          <Button onClick={onTodosForUsers}>User Todos</Button>
        ]}
      >
        {users.map(user => (
          <UserTag id={user.id} key={user.id} />
        ))}
      </Card>
    </Layout.Content>
  )
}

export default connector(UserList)
