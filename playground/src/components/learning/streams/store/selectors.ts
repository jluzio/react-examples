import { createSelector } from '@reduxjs/toolkit'
import { RouteComponentProps } from 'react-router-dom'
import _ from 'lodash'
import { RootState } from './index'
import { RouteIdParams } from '../routes'

const parseNumber = (value: string | undefined | null) =>
  value != null ? _.parseInt(value) : value

const getStreamIdMatchParams = (
  state: RootState,
  props: RouteComponentProps<RouteIdParams>
) => parseNumber(props.match.params.id)

export const getStreams = (state: RootState) => state.streams.values
export const getStreamsList = createSelector([getStreams], streams =>
  Object.values(streams)
)
export const getStreamByMatchProps = createSelector(
  [getStreams, getStreamIdMatchParams],
  (streams, id) => (id != null ? streams[id] : null)
)
export const getStreamStatus = (state: RootState) => state.streams.status
export const getStreamStatusErrors = (state: RootState) =>
  state.streams.status?.errors

export const getAuth = (state: RootState) => state.auth
export const getUserProfile = createSelector(
  [getAuth],
  auth => auth.userProfile
)

export const getUserId = createSelector([getAuth], auth => auth.userProfile?.id)

export default {
  getStreams,
  getStreamsList,
  getStreamByMatchProps,
  getStreamStatus,
  getStreamStatusErrors,
  getAuth,
  getUserId
}
