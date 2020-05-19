import { createSlice, PayloadAction, AnyAction, Action } from '@reduxjs/toolkit'
import { StatusType, ErrorLike, ActionStatus } from './models'

export type StatusState = StatusType & {
  statusByRequestId: { [key: string]: StatusType }
}
export type StatusPayload = ActionStatus
export type ResetStatusPayload =
  | undefined
  | {
      rootOnly?: boolean
    }

const initialState: StatusState = {
  pending: false,
  errors: [],
  statusByRequestId: {}
}

const getStatusTypeReducer = (pending: boolean, errors?: ErrorLike[]) => (
  statusType?: StatusType
): StatusType => {
  const statusTypeErrors = statusType?.errors ?? []
  return {
    pending,
    errors: errors != null ? [...statusTypeErrors, ...errors] : statusTypeErrors
  }
}

const setStatus = (
  state: StatusState,
  statusTypeReducer: (statusType: StatusType) => StatusType,
  requestId?: string
): StatusState => {
  const rootStatus: StatusType = statusTypeReducer(state)
  let { statusByRequestId } = state
  if (requestId != null) {
    const requestIdStatus: StatusType = statusTypeReducer(
      state.statusByRequestId[requestId]
    )
    statusByRequestId = {
      ...statusByRequestId,
      [requestId]: requestIdStatus
    }
  }
  return {
    ...state,
    ...rootStatus,
    statusByRequestId
  }
}

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    pending: (state, action: PayloadAction<StatusPayload>) => {
      return setStatus(
        state,
        getStatusTypeReducer(true),
        action.payload.meta?.requestId
      )
    },
    fulfilled: (state, action: PayloadAction<StatusPayload>) => {
      return setStatus(
        state,
        getStatusTypeReducer(false),
        action.payload.meta?.requestId
      )
    },
    rejected: (state, action: PayloadAction<StatusPayload>) => {
      return setStatus(
        state,
        getStatusTypeReducer(
          false,
          action.payload.error ? [action.payload.error] : []
        ),
        action.payload.meta?.requestId
      )
    },
    reset: (state, action: PayloadAction<ResetStatusPayload>) =>
      action.payload?.rootOnly ?? false
        ? {
            ...state,
            pending: false,
            errors: []
          }
        : initialState
  }
})

export const statusReducer = statusSlice.reducer

export const statusActions = statusSlice.actions
