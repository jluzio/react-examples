import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Card } from 'antd'
import { Provider } from 'react-redux'
import { routes, ROOT_RESOURCE_PATH } from './routes/routes'
import UserList from './UserList'
import UserDetailsById from './UserDetailsById'
import RouterHeader from './RouterHeader'
import store, { userActions } from './store'
import PrivateRoute from './PrivateRoute'
import PrivatePage from './PrivatePage'
import RouterHome from './RouterHome'

const RouterExample: React.FC = () => {
  if (!Object.keys(store.getState().users).length) {
    store.dispatch(userActions.fetchAllUsers())
  }

  return (
    <Provider store={store}>
      <Card title="Router">
        <RouterHeader />
        <Switch>
          <Route path={routes.private} component={PrivatePage} />
          <PrivateRoute path={routes.details}>
            <UserDetailsById />
          </PrivateRoute>
          <PrivateRoute path={routes.list}>
            <UserList />
          </PrivateRoute>
          <Route path={routes.home} component={RouterHome} />
        </Switch>
      </Card>
    </Provider>
  )
}

export default RouterExample
