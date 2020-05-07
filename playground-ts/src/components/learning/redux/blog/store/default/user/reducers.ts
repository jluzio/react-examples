/* eslint-disable import/prefer-default-export */
import { User } from '../../../models'
import { UserActions } from './actions'

export type UserState = User[]
const initialState: UserState = []

export function userReducer(
  state: UserState = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case 'FETCH_USERS':
      return action.payload
    case 'SET_USERS':
      return action.payload
    default:
      return state
  }
}
