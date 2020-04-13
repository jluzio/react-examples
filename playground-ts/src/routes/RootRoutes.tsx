import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ContentView from 'views/ContentView'

const Bootstrap = React.lazy(() => import('views/Bootstrap'))
const AntDesignLayout = React.lazy(() => import('views/AntDesignLayout'))

const RootRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/page/bootstrap" component={Bootstrap} />
      <Route path="/page/ant-design-layout" component={AntDesignLayout} />
      <Route path="/" component={ContentView} />
    </Switch>
  )
}

export default RootRoutes
