/* eslint-disable class-methods-use-this */
import React from 'react'
import { ResourceId, Post, Todo } from 'services/placeholder/models'
import { List, Descriptions, Card } from 'antd'
import useResources from './useResources'

type Props = {
  resource?: ResourceId
  pageSize?: number
}

const ResourceList: React.FC<Props> = ({ resource, pageSize }: Props) => {
  const resources = useResources(resource)

  function renderTodo(todo: Todo) {
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

  function renderPost(post: Post) {
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

  function renderList() {
    switch (resource) {
      case 'posts':
        return (
          <List
            dataSource={resources as Post[]}
            renderItem={renderPost}
            pagination={{ pageSize }}
          />
        )
      case 'todos':
        return (
          <List
            dataSource={resources as Todo[]}
            renderItem={renderTodo}
            pagination={{ pageSize }}
          />
        )
      default:
        return null
    }
  }

  return <Card title="Resources">{renderList()}</Card>
}

export default ResourceList
