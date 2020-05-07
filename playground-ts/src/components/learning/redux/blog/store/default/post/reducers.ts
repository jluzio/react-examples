/* eslint-disable import/prefer-default-export */
import { Post } from '../../../models'
import { PostActions } from './actions'

export type PostState = Post[]
const initialState: PostState = []

export function postReducer(
  state: PostState = initialState,
  action: PostActions
): PostState {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload
    case 'SET_POSTS':
      return action.payload
    default:
      return state
  }
}
