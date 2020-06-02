import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Space } from 'antd'
import { store } from './store'
import TodoListContainer from './LocalTodoListContainer'
import TodoEditContainer from './LocalTodoEditContainer'
import { getRoutes } from './routes'

const routes = getRoutes()

const LocalExample: React.FC = () => {
  return (
    <Provider store={store}>
      <Space size="large" direction="vertical" style={{ width: '100%' }}>
        <Switch>
          <Route path={routes.create} component={TodoEditContainer} />
          <Route path={routes.edit} component={TodoEditContainer} />
        </Switch>
        <TodoListContainer />
      </Space>
    </Provider>
  )
}

export default LocalExample
