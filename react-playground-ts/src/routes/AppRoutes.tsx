import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'views/Home'
import Examples from 'views/Examples'

const Bootstrap = React.lazy(() => import('views/Bootstrap'))

const AppRoutes: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/examples" exact component={Examples} />
        <Route path="/bootstrap" component={Bootstrap} />
      </Switch>
    </div>
  )
}

export default AppRoutes
