import 'assets/css/App.scss'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import React, { Suspense } from 'react'
import AppHeader from 'components/layout/AppHeader'
import AppFooter from 'components/layout/AppFooter'
import ContentRoutes from 'routes/ContentRoutes'

const { Header, Content, Footer } = Layout

const ContentView: React.FC = () => {
  return (
    <Layout className="layout full-height">
      <Header>
        <AppHeader />
      </Header>
      <Content className="layout-content full-height">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="content">
            <ContentRoutes />
          </div>
        </Suspense>
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  )
}

export default ContentView
