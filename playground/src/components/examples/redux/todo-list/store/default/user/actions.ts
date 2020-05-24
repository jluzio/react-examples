import { PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { User } from 'services/placeholder/models'
import userService from 'services/placeholder/user-service'

/*
 * action creators
 */

export enum UserActionType {
  FETCH_USERS = 'users/fetch',
  FETCH_USERS_FULFILLED = 'users/fetch/fulfilled'
}

const fetchUsersFullfiled = (posts: User[]) =>
  ({
    type: UserActionType.FETCH_USERS_FULFILLED,
    payload: posts
  } as PayloadAction<User[], UserActionType.FETCH_USERS_FULFILLED>)

const fetchUsers = () => async (dispatch: Dispatch) => {
  const response = await userService.list()
  dispatch(fetchUsersFullfiled(response.data))
}

export type UserActions = ReturnType<typeof fetchUsersFullfiled>

export const userActions = {
  fetchUsers,
  fetchUsersFullfiled
}
