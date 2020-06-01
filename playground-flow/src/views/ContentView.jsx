import React, { Suspense } from 'react'
import ContentRoutes from '../routes/ContentRoutes'
import logo from '../logo.svg'

const ContentView: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="content">
          <ContentRoutes />
        </div>
      </Suspense>
    </div>
  )
}

export default ContentView
