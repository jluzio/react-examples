/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux'
import { PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../../models'
import postService from '../../../services/post-service'

const setPosts = (posts: Post[]) =>
  ({
    type: 'SET_POSTS',
    payload: posts
  } as PayloadAction<Post[], 'SET_POSTS'>)

const syncFetchPosts = (posts: Post[]) =>
  ({
    type: 'FETCH_POSTS',
    payload: posts
  } as PayloadAction<Post[], 'FETCH_POSTS'>)

const fetchPosts = () => async (dispatch: Dispatch) => {
  const response = await postService.getPosts()
  dispatch(syncFetchPosts(response.data))
}

export const postActions = {
  setPosts,
  fetchPosts,
  syncFetchPosts
}

export type PostActions =
  | ReturnType<typeof setPosts>
  | ReturnType<typeof syncFetchPosts>
