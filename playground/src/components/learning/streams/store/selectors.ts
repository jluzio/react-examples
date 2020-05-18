import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './index'

export const getStreams = (state: RootState) => state.streams
export const getAuth = (state: RootState) => state.auth

export const getStreamsList = createSelector([getStreams], streams =>
  Object.values(streams)
)

export const getUserProfile = createSelector(
  [getAuth],
  auth => auth.userProfile
)

export const getUserId = createSelector([getAuth], auth => auth.userProfile?.id)

export default {
  getStreams,
  getAuth,
  getStreamsList,
  getUserId
}
