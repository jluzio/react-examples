import React, { Suspense } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import Routes from './routes/RootRoutes'
// import 'services/i18n/i18n-basic'
import 'services/i18n/i18n'
import 'services/validation/yup-config'

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </Router>
  )
}

export default App
