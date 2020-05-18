import { AuthState } from 'store/auth'
import { StreamState } from './stream'

export type RootState = {
  auth: AuthState
  streams: StreamState
}
