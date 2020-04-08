import React from 'react'
import { Card } from 'antd'
import { Provider } from 'react-redux'
import { store } from './store'
import TodoList from './TodoList'
import VisibilityFilterList from './VisibilityFilterList'
import AddTodo from './AddTodo'

const TodoListExample: React.FC = () => {
  return (
    <Card title="TodoList">
      <Provider store={store}>
        <AddTodo />
        <TodoList />
        <VisibilityFilterList />
      </Provider>
    </Card>
  )
}

export default TodoListExample
