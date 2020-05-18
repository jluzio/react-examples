import { HashRouter, BrowserRouter } from 'react-router-dom'
import { Router } from 'react-router'
import React, { PropsWithChildren } from 'react'
// import history2 from '@/router/history'
import history from './history'

type Props = PropsWithChildren<{}>
const AppRouter: React.FC<Props> = (props: Props) => {
  const { children } = props
  return <Router history={history}>{children}</Router>
}

export default AppRouter
