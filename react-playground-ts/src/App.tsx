import React, { Suspense } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import logo from 'assets/images/logo.svg'
import 'assets/css/App.scss'
import 'antd/dist/antd.css'
import AppMenu from './components/AppMenu'
import AppRoutes from './routes/AppRoutes'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <div className="app-items">
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <AppMenu />
            <AppRoutes />
          </Router>
        </Suspense>
      </div>
    </div>
  )
}

export default App
