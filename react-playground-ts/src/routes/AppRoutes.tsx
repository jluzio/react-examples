import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'views/Home'
import Examples from 'views/Examples'
import Learning from 'views/Learning'
import RouteNotFound from 'views/RouteNotFound'

const Bootstrap = React.lazy(() => import('views/Bootstrap'))

const AppRoutes: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/examples" component={Examples} />
        <Route path="/learning" component={Learning} />
        <Route path="/bootstrap" component={Bootstrap} />
        <Route path="/" exact component={Home} />
        <Route path="/" component={RouteNotFound} />
      </Switch>
    </div>
  )
}

export default AppRoutes
