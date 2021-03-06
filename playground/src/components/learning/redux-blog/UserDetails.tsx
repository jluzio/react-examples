import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from './store'

const mapStateToProps = (state: RootState) => ({
  users: state.users
})
const mapDispatchToProps = {}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & {
  userId: number
}
export class UserDetails extends Component<Props> {
  render() {
    const { users, userId } = this.props
    const user = users.find(u => u.id === userId)
    return user ? <p>{user.name}</p> : <p>{userId}</p>
  }
}

export default connector(UserDetails)
