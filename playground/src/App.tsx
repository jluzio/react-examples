import React, { Suspense } from 'react'
import AppRouter from './router/AppRouter'
import Routes from './routes/RootRoutes'
// import 'services/i18n/i18n-basic'
import 'services/i18n/i18n'
import 'services/validation/yup-config'

const App: React.FC = () => {
  return (
    <AppRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </AppRouter>
  )
}

export default App
