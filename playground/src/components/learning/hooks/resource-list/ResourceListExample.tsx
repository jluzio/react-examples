import React, { useState } from 'react'
import { ResourceId } from 'services/placeholder/models'
import { Button, Form } from 'antd'
import ResourceList from './ResourceList'
import UserList from './UserList'

const ResourceListExample: React.FC = () => {
  const [resource, setResource] = useState<ResourceId>()
  return (
    <Form>
      <Form.Item>
        <Button onClick={() => setResource('posts')}>Posts</Button>
        <Button onClick={() => setResource('todos')}>Todos</Button>
      </Form.Item>
      <Form.Item>
        <ResourceList resource={resource} pageSize={3} />
        <UserList pageSize={3} />
      </Form.Item>
    </Form>
  )
}

export default ResourceListExample
