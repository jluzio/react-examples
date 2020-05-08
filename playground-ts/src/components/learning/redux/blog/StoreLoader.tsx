/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Button } from 'antd'
import postService from 'services/placeholder/post-service'
import userService from 'services/placeholder/user-service'
import { RootState, postActions, userActions } from './store'

const mapStateToProps = (state: RootState) => ({
  posts: state.posts,
  users: state.users
})
const mapDispatchToProps = {
  onSetPosts: postActions.setPosts,
  onSetUsers: userActions.setUsers
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps
class StoreLoader extends React.Component<Props> {
  private postService = postService

  private userService = userService

  handleLoadPosts = () => {
    const { onSetPosts } = this.props
    this.postService.getPosts().then(response => {
      onSetPosts(response.data)
    })
  }

  handleLoadUsers = () => {
    const { onSetUsers } = this.props
    this.userService.getUsers().then(response => {
      onSetUsers(response.data)
    })
  }

  render() {
    return (
      <div>
        <Button type="ghost" danger onClick={this.handleLoadPosts}>
          Load Posts
        </Button>
        <Button type="ghost" danger onClick={this.handleLoadUsers}>
          Load Users
        </Button>
      </div>
    )
  }
}

export default connector(StoreLoader)
