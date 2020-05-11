/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { Card, Button, Input, Descriptions } from 'antd'
import userService from 'services/placeholder/user-service'
import _ from 'lodash'
import { User } from 'services/placeholder/models'

type Props = {}
type State = {
  userIds: number[]
  id: number | null
  user: User | null
}

export default class MemoizeExample extends Component<Props, State> {
  state: State = {
    userIds: [],
    id: null,
    user: null
  }

  componentDidMount() {
    userService.getUsers().then(users => {
      this.setState({
        userIds: users.data.map(u => u.id)
      })
    })
  }

  getUser = async (id: number) => {
    const response = await userService.getUser(id)
    return response.data
  }

  getUserMemoized = _.memoize(async (id: number) => {
    const response = await userService.getUser(id)
    return response.data
  })

  handleGetUser = async () => {
    const { id } = this.state
    const user = await this.getUser(id!)
    this.setState({
      user
    })
  }

  handleGetUserMemoized = async () => {
    const { id } = this.state
    const user = await this.getUserMemoized(id!)
    this.setState({
      user
    })
  }

  render() {
    const { userIds, user, id } = this.state
    const setId = (value: string) => this.setState({ id: _.parseInt(value) })
    return (
      <Card
        title="Memoize"
        actions={[
          <Button onClick={this.handleGetUser}>Get User</Button>,
          <Button onClick={this.handleGetUserMemoized}>Get Cache User</Button>
        ]}
      >
        <p>Ids: {userIds.join(', ')}</p>
        <Input
          placeholder="UserId..."
          value={id!}
          onChange={e => setId(e.target.value)}
        />
        {user && (
          <Descriptions title={user.name}>
            <Descriptions.Item label="Id">{user.id}</Descriptions.Item>
          </Descriptions>
        )}
      </Card>
    )
  }
}
