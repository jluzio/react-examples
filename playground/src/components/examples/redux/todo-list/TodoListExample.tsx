import React from 'react'
import { Card } from 'antd'
import { Provider } from 'react-redux'
import { store } from './store'
import TodoList from './TodoList'
import VisibilityFilterList from './VisibilityFilterList'
import AddTodo from './AddTodo'
import ClickCounter from './ClickCounter'
import UserList from './UserList'

const TodoListExample: React.FC = () => {
  return (
    <Card title="TodoList Store">
      <Provider store={store}>
        <Card title="Todos">
          <AddTodo />
          <TodoList />
          <VisibilityFilterList />
        </Card>
        <ClickCounter />
        <UserList />
      </Provider>
    </Card>
  )
}

export default TodoListExample
