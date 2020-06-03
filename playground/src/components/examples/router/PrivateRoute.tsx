/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithChildren } from 'react'
import { Redirect, RouteProps, Route, useLocation } from 'react-router-dom'
import { locations } from './routes'
import useAuth from './auth/useAuth'

type Props = PropsWithChildren<RouteProps>

const PrivateRoute: React.FC<Props> = ({ children, ...routeProps }: Props) => {
  const authenticated = useAuth()
  const location = useLocation()

  const renderRedirect = () => (
    <Redirect
      to={{
        ...locations.private(),
        state: { from: location }
      }}
    />
  )

  const renderChildren = () => {
    return authenticated ? children : renderRedirect()
  }

  return <Route {...routeProps} render={renderChildren} />
}

export default PrivateRoute
