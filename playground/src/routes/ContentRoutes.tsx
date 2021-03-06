import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'views/Home'
import Examples from 'views/Examples'
import Learning from 'views/Learning'
import RouteNotFound from 'views/RouteNotFound'

const ContentRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/examples" component={Examples} />
      <Route path="/learning" component={Learning} />
      <Route path="/" exact component={Home} />
      <Route path="/" component={RouteNotFound} />
    </Switch>
  )
}

export default ContentRoutes
