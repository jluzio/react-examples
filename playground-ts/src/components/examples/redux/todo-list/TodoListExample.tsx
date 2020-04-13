import React from 'react'
import { Card, Space } from 'antd'
import { Provider } from 'react-redux'
import { store } from './store'
import TodoList from './TodoList'
import VisibilityFilterList from './VisibilityFilterList'
import AddTodo from './AddTodo'
import ClickCounter from './ClickCounter'

const TodoListExample: React.FC = () => {
  return (
    <Card title="TodoList">
      <Provider store={store}>
        <AddTodo />
        <TodoList />
        <VisibilityFilterList />
        <Space>
          <ClickCounter />
        </Space>
      </Provider>
    </Card>
  )
}

export default TodoListExample
