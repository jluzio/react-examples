import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Space } from 'antd'
import { store } from './store'
import TodoListContainer from './CloudTodoListContainer'
import TodoEditContainer from './CloudTodoEditContainer'
import { routes } from './routes'

const CloudExample: React.FC = () => {
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

export default CloudExample
