/* eslint-disable class-methods-use-this */
import React from 'react'
import postService from 'services/placeholder/post-service'
import todoService from 'services/placeholder/todo-service'
import { ResourceId, Post, Todo } from 'services/placeholder/models'
import { List, Descriptions } from 'antd'

type Props = {
  type?: ResourceId
}
type State = {
  values: Post[] | Todo[]
}

class ResourceList extends React.Component<Props, State> {
  state: State = {
    values: []
  }

  async componentDidMount() {
    const { type } = this.props
    this.getData(type)
  }

  async componentDidUpdate(prevProps: Props, prevState: State) {
    const { type } = this.props
    if (type !== prevProps.type) {
      this.getData(type)
    }
  }

  getData = async (type?: ResourceId) => {
    let values: Todo[] | Post[]
    switch (type) {
      case 'todos':
        values = await todoService.list().then(response => response.data)
        break
      case 'posts':
        values = await postService.list().then(response => response.data)
        break
      default:
        values = []
    }
    this.setState({ values })
  }

  renderTodo(todo: Todo) {
    return (
      <List.Item key={todo.id}>
        <Descriptions title={todo.title}>
          <Descriptions.Item label="Completed">
            {todo.completed}
          </Descriptions.Item>
          <Descriptions.Item label="Id">{todo.id}</Descriptions.Item>
          <Descriptions.Item label="User Id">{todo.userId}</Descriptions.Item>
        </Descriptions>
      </List.Item>
    )
  }

  renderPost(post: Post) {
    return (
      <List.Item key={post.id}>
        <Descriptions title={post.title}>
          <Descriptions.Item label="Body">{post.body}</Descriptions.Item>
          <Descriptions.Item label="Id">{post.id}</Descriptions.Item>
          <Descriptions.Item label="User Id">{post.userId}</Descriptions.Item>
        </Descriptions>
      </List.Item>
    )
  }

  render() {
    const { type } = this.props
    const { values } = this.state
    switch (type) {
      case 'posts':
        return (
          <List dataSource={values as Post[]} renderItem={this.renderPost} />
        )
      case 'todos':
        return (
          <List dataSource={values as Todo[]} renderItem={this.renderTodo} />
        )
      default:
        return null
    }
  }
}

export default ResourceList
