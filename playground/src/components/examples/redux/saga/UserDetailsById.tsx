/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Skeleton, Result } from 'antd'
import { RootState, userActions } from './store'
import UserDetails from '../shared/user/UserDetails'

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

  if (status.pending) {
    return <Skeleton />
  }
  if (status.errorMessage) {
    return (
      <Result
        status="error"
        title="Api Failed"
        subTitle={status.errorMessage}
      />
    )
  }
  if (user == null) {
    return null
  }
  return <UserDetails user={user} />
}

export default connector(UserDetailsById)
