/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux'
import { PayloadAction } from '@reduxjs/toolkit'
import { User } from 'services/placeholder/models'
import userService from 'services/placeholder/user-service'

const setUsers = (users: User[]) =>
  ({
    type: 'SET_USERS',
    payload: users
  } as PayloadAction<User[], 'SET_USERS'>)

const fetchUserFulfilled = (user: User) =>
  ({
    type: 'FETCH_USER',
    payload: user
  } as PayloadAction<User, 'FETCH_USER'>)

const fetchUser = (id: number) => async (dispatch: Dispatch) => {
  const response = await userService.get(id)
  dispatch(fetchUserFulfilled(response.data))
}

export const userActions = {
  setUsers,
  fetchUser,
  fetchUserFulfilled
}

export type UserActions =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof fetchUserFulfilled>
