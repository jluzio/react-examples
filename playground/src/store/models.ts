import { SerializedError, ThunkDispatch, AnyAction } from '@reduxjs/toolkit'

export type ErrorLike = SerializedError

export type ErrorsType = {
  errors: ErrorLike[]
}

export type StatusType = ErrorsType & {
  pending: boolean
}

export type ActionMeta<A = void> = {
  arg: A
  requestId: string
}

export type ActionStatus<A = any, E = ErrorLike> = {
  meta?: ActionMeta<A>
  error?: E
}

export type AppThunkDispatch = ThunkDispatch<{}, {}, AnyAction>
