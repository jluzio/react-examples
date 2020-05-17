import React from 'react'
import { Provider } from 'react-redux'
import SignupForm from './SignupForm'
import store from './store'

const RfDefaultExample: React.FC = () => (
  <Provider store={store}>
    <SignupForm />
  </Provider>
)

export default RfDefaultExample
