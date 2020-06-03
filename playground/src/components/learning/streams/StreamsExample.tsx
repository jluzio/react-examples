import React from 'react'
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter
} from 'react-router-dom'
import { Card } from 'antd'
import { Provider } from 'react-redux'
import history from 'router/history'
import StreamCreate from './StreamCreate'
import StreamDelete from './StreamDelete'
import StreamEdit from './StreamEdit'
import StreamHeader from './StreamHeader'
import StreamList from './StreamList'
import StreamDetails from './StreamDetails'
import store, { actions } from './store'
import { routes } from './routes'

class StreamExample extends React.Component<RouteComponentProps> {
  unregisterHistoryListener!: Function

  componentDidMount() {
    this.unregisterHistoryListener = history.listen(() =>
      store.dispatch(actions.resetStreamStatus({ rootOnly: true }))
    )
  }

  componentWillUnmount() {
    this.unregisterHistoryListener()
  }

  render() {
    return (
      <Card title="Streamy" className="learning">
        <Provider store={store}>
          <StreamHeader />
          <Switch>
            <Route path={routes.create} component={StreamCreate} />
            <Route path={routes.delete} component={StreamDelete} />
            <Route path={routes.edit} component={StreamEdit} />
            <Route path={routes.details} component={StreamDetails} />
            <Route path={routes.list} component={StreamList} />
            <Route path="/" component={StreamList} />
          </Switch>
        </Provider>
      </Card>
    )
  }
}

export default withRouter(StreamExample)
