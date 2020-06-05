/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { User } from 'services/placeholder/models'
import { Descriptions } from 'antd'
import { connect, ConnectedProps } from 'react-redux'
import { RootState, userActions } from './store'
import UserDetails from './UserDetails'

type OwnProps = {
  id: number
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
  user: state.users.values[props.id],
  status: state.users.status
})
const mapDispatchToProps = {
  fetchUser: userActions.fetchUser
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = OwnProps & ReduxProps

const UserDetailsById: React.FC<Props> = ({
  id,
  user,
  fetchUser,
  status
}: Props) => {
  useEffect(() => {
    fetchUser({ id })
  }, [id])

  if (status.errorMessage) {
    return <div>Error: {status.errorMessage}</div>
  }
  if (user == null) {
    return null
  }
  return <UserDetails user={user} />
}

export default connector(UserDetailsById)
