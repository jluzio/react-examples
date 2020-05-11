import { combineReducers, Dispatch } from 'redux'
import { ThunkAction, Action } from '@reduxjs/toolkit'
import _ from 'lodash'
import { postReducer, postActions } from './post'
import { userReducer, userActions } from './user'

export const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

// NOTE: typescript version without using toolkit doesn't allow
// await dispatch(postActions.fetchPosts())
export const fetchPostsAndUsersWithoutToolkit = () => async (
  dispatch: Dispatch<Action<string>>,
  getState: () => RootState
) => {
  await postActions.fetchPosts()(dispatch)
  const { posts } = getState()
  const userIds = _.uniq(posts.map(p => p.userId))
  userIds.forEach(userId => {
    userActions.fetchUser(userId)(dispatch)
  })
}

export const fetchPostsAndUsers = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  await dispatch(postActions.fetchPosts())
  const { posts } = getState()
  const userIds = _.uniq(posts.map(p => p.userId))
  userIds.forEach(userId => {
    dispatch(userActions.fetchUser(userId))
  })
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
