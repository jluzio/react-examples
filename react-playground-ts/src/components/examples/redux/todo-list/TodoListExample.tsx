import React from 'react'
import { Card } from 'antd'
import TodoList from './TodoList'

const TodoListExample: React.FC = () => {
  return (
    <Card title="TodoList">
      <TodoList />
    </Card>
  )
}

export default TodoListExample
