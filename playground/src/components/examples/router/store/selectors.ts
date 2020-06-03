/* eslint-disable import/prefer-default-export */
import { RouteComponentProps } from 'react-router-dom'
import _ from 'lodash'
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './index'
import { RouteIdParams } from '../routes'

const getUsers = (state: RootState) => state.users
const getUserId = (
  state: RootState,
  props: RouteComponentProps<RouteIdParams>
) => _.parseInt(props.match.params.id)

export const userSelector = createSelector(
  [getUsers, getUserId],
  (users, userId) => users[userId]
)
