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

const syncFetchUsers = (users: User[]) =>
  ({
    type: 'FETCH_USERS',
    payload: users
  } as PayloadAction<User[], 'FETCH_USERS'>)

const fetchUsers = () => async (dispatch: Dispatch) => {
  const response = await userService.getUsers()
  dispatch(syncFetchUsers(response.data))
}

export const userActions = {
  setUsers,
  fetchUsers,
  syncFetchUsers
}

export type UserActions =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof syncFetchUsers>
