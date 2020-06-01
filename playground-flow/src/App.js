import React, { Suspense } from 'react'
import { Button } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import logo from './logo.svg'
import RootRoutes from './routes/RootRoutes'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <RootRoutes />
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
