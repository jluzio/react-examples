import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Tag } from 'antd'
import { RootState } from './store'

type OwnProps = {
  id: number
}

// showcasing mappers with OwnProps
const mapStateToProps = (state: RootState, ownProps?: OwnProps) => ({
  user: state.users.find(user => user.id === ownProps?.id)
})
const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & OwnProps

const UserDetails: React.FC<Props> = ({ user }: Props) => {
  return (user && <Tag>{user.name}</Tag>) ?? null
}

export default connector(UserDetails)
