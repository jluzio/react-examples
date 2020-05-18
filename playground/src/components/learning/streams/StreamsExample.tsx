import React from 'react'
import {
  Route,
  Switch,
  Link,
  RouteComponentProps,
  withRouter
} from 'react-router-dom'
import { Card } from 'antd'
import { Provider } from 'react-redux'
import { LocationDescriptorObject } from 'history'
import StreamCreate from './StreamCreate'
import StreamDelete from './StreamDelete'
import StreamEdit from './StreamEdit'
import StreamHeader from './StreamHeader'
import StreamList from './StreamList'
import StreamShow from './StreamShow'
import store from './store'
import * as routes from './utils/routes'

class StreamExample extends React.Component<RouteComponentProps> {
  toLocation = (toContextLocation: LocationDescriptorObject) => {
    const { location: currentLocation } = this.props
    return routes.getLocationPreservingSearch(
      toContextLocation,
      currentLocation
    )
  }

  getPath = (contextPath: string) => {
    const { location: currentLocation } = this.props
    return routes.getPath(contextPath, currentLocation)
  }

  render() {
    const cardActions = [
      <Link to={this.toLocation({ pathname: '/streams' })}>List</Link>,
      <Link to={this.toLocation({ pathname: '/streams/create' })}>Create</Link>,
      <Link to={this.toLocation({ pathname: '/streams/delete' })}>Delete</Link>,
      <Link to={this.toLocation({ pathname: '/streams/edit' })}>Edit</Link>,
      <Link to={this.toLocation({ pathname: '/streams/show' })}>Show</Link>
    ]
    return (
      <Card title="Streamy" className="learning" actions={cardActions}>
        <Provider store={store}>
          <StreamHeader />
          <Switch>
            <Route
              path={this.getPath('/streams/create')}
              component={StreamCreate}
            />
            <Route
              path={this.getPath('/streams/delete')}
              component={StreamDelete}
            />
            <Route
              path={this.getPath('/streams/edit')}
              component={StreamEdit}
            />
            <Route
              path={this.getPath('/streams/show')}
              component={StreamShow}
            />
            <Route path={this.getPath('/streams')} component={StreamList} />
          </Switch>
        </Provider>
      </Card>
    )
  }
}

export default withRouter(StreamExample)
