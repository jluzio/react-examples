import 'assets/css/App.scss'
import 'antd/dist/antd.css'

import { Layout } from 'antd'
import React, { Suspense } from 'react'
import { HashRouter as Router } from 'react-router-dom'

import AppHeader from './components/header/AppHeader'
import AppRoutes from './routes/AppRoutes'
// import 'services/i18n/i18n-basic'
import 'services/i18n/i18n'
import 'services/validators/yup-config'

const { Content, Header } = Layout

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading App...</div>}>
        <Layout className="full-height layout">
          <Header>
            <AppHeader />
          </Header>
          <Content className="container full-height">
            <Suspense fallback={<div>Loading...</div>}>
              <AppRoutes />
            </Suspense>
          </Content>
        </Layout>
      </Suspense>
    </Router>
  )
}

export default App
