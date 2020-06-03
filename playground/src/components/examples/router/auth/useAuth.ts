/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react'
import { authenticationService } from './auth'

export default function useAuth(): boolean {
  const [authenticated, setAuthenticated] = useState(
    authenticationService.authentication.getValue()
  )

  useEffect(() => {
    const subscription = authenticationService.authentication.subscribe(
      auth => {
        setAuthenticated(auth)
      }
    )
    return () => subscription.unsubscribe()
  })

  return authenticated
}
