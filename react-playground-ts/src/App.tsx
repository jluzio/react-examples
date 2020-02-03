import React, { Suspense } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import 'assets/css/App.scss'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import AppHeader from './components/header/AppHeader'
import AppRoutes from './routes/AppRoutes'

const { Content, Header, Footer, Sider } = Layout

const App: React.FC = () => {
  return (
    <Router>
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
    </Router>
  )
}

export default App
