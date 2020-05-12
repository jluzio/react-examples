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
import StreamCreate from './StreamCreate'
import StreamDelete from './StreamDelete'
import StreamEdit from './StreamEdit'
import StreamHeader from './StreamHeader'
import StreamList from './StreamList'
import StreamShow from './StreamShow'
import store from './store'

const StreamExample: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { match } = props
  const rootComponent = match.url
  const path = (contextPath: string) => `${rootComponent}${contextPath}`
  const cardActions = [
    <Link to={path('/streams')}>List</Link>,
    <Link to={path('/streams/create')}>Create</Link>,
    <Link to={path('/streams/delete')}>Delete</Link>,
    <Link to={path('/streams/edit')}>Edit</Link>,
    <Link to={path('/streams/show')}>Show</Link>
  ]
  return (
    <Card title="Streamy" className="learning" actions={cardActions}>
      <Provider store={store}>
        <StreamHeader />
        <Switch>
          <Route path={path('/streams/create')} component={StreamCreate} />
          <Route path={path('/streams/delete')} component={StreamDelete} />
          <Route path={path('/streams/edit')} component={StreamEdit} />
          <Route path={path('/streams/show')} component={StreamShow} />
          <Route path={path('/streams')} component={StreamList} />
        </Switch>
      </Provider>
    </Card>
  )
}

export default withRouter(StreamExample)
