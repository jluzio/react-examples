import React, { PropsWithChildren } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Tag } from 'antd'
import { RootState } from './store'

type OwnProps = {
  userId: number
}

const mapStateToProps = (state: RootState, ownProps?: OwnProps) => ({
  user: state.users.find(u => u.id === ownProps?.userId)
})
const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & PropsWithChildren<OwnProps>

const UserDetails: React.FC<Props> = (props: Props) => {
  const { user } = props
  return (user && <Tag>{user.name}</Tag>) ?? null
}

export default connector(UserDetails)
