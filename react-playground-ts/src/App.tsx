import React from 'react'
import logo from './logo.svg'
// import 'jquery'
// import 'popper.js'
// import 'bootstrap/dist/js/bootstrap'
import './App.scss'

import ExampleList from './examples/example-list'

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
        <ExampleList />
      </div>
    </div>
  )
}

export default App
