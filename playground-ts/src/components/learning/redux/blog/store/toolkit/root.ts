import { ThunkAction, Action } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import _ from 'lodash'
import { postReducer, postActions } from './post'
import { userReducer, userActions } from './user'

export const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const fetchPostsAndUsers = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  await dispatch(postActions.fetchPosts())
  _.chain(getState().posts)
    .map(p => p.userId)
    .uniq()
    .forEach(id => dispatch(userActions.fetchUser(id)))
    .value()
}

export { postActions, userActions }
export const rootActions = {
  fetchPostsAndUsers
}
export const actions = {
  ...userActions,
  ...postActions,
  ...rootActions
}
