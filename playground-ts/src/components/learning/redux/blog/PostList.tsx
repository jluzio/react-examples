import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { List } from 'antd'
import { RootState, postActions } from './store'
import PostItem from './PostItem'

const mapStateToProps = (state: RootState) => ({
  posts: state.posts
})
const mapDispatchToProps = {
  onFetchPosts: postActions.fetchPosts
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps
class PostList extends React.Component<Props> {
  async componentDidMount() {
    const { onFetchPosts } = this.props
    onFetchPosts()
  }

  render() {
    const { posts } = this.props
    return (
      <List
        dataSource={posts}
        renderItem={post => <PostItem post={post} />}
        pagination={{
          pageSize: 5
        }}
      />
    )
  }
}

export default connector(PostList)
