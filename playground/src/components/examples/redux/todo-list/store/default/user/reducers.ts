import { User } from 'services/placeholder/models'
import { UserActionType, UserActions } from './actions'

export type UserState = User[]

const initialState: UserState = []

export function userReducer(
  state: UserState = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionType.FETCH_USERS_FULFILLED:
      return action.payload
    default:
      return state
  }
}
