/* eslint-disable import/prefer-default-export */
import React from 'react'
import { UserProfile } from 'models/core'

export const UserContext = React.createContext<UserProfile | null>(null)
UserContext.displayName = 'UserContext'
