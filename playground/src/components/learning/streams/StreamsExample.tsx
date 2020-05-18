import React from 'react'
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter
} from 'react-router-dom'
import { Card } from 'antd'
import { Provider } from 'react-redux'
import StreamCreate from './StreamCreate'
import StreamDelete from './StreamDelete'
import StreamEdit from './StreamEdit'
import StreamHeader from './StreamHeader'
import StreamList from './StreamList'
import StreamShow from './StreamShow'
import store from './store'
import { getRoutes } from './utils/routes'

class StreamExample extends React.Component<RouteComponentProps> {
  render() {
    const routes = getRoutes()
    return (
      <Card title="Streamy" className="learning">
        <Provider store={store}>
          <StreamHeader />
          <Switch>
            <Route path={routes.create} component={StreamCreate} />
            <Route path={routes.delete} component={StreamDelete} />
            <Route path={routes.edit} component={StreamEdit} />
            <Route path={routes.show} component={StreamShow} />
            <Route path={routes.list} component={StreamList} />
            <Route path="/" component={StreamList} />
          </Switch>
        </Provider>
      </Card>
    )
  }
}

export default withRouter(StreamExample)
