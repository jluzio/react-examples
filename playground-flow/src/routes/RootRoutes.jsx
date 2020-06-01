import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ContentView from '../views/ContentView'

const RootRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={ContentView} />
    </Switch>
  )
}

export default RootRoutes
