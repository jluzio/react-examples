// @flow
import React from 'react'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import { Provider } from 'react-redux'
import { store } from './store'
import TodoList from './TodoList'
import VisibilityFilterList from './VisibilityFilterList'
import AddTodo from './AddTodo'
import ClickCounter from './ClickCounter'

const TodoListExample = () => {
  return (
    <Provider store={store}>
      <Card variant="outlined">
        <CardHeader title="Todos" />
        <CardContent>
          <AddTodo />
          <TodoList />
          <VisibilityFilterList />
          <ClickCounter />
        </CardContent>
      </Card>
    </Provider>
  )
}

export default TodoListExample
