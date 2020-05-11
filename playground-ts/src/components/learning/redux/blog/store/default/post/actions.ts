/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux'
import { PayloadAction } from '@reduxjs/toolkit'
import { Post } from 'services/placeholder/models'
import postService from 'services/placeholder/post-service'

const setPosts = (posts: Post[]) =>
  ({
    type: 'SET_POSTS',
    payload: posts
  } as PayloadAction<Post[], 'SET_POSTS'>)

const fetchPostsFullfiled = (posts: Post[]) =>
  ({
    type: 'FETCH_POSTS',
    payload: posts
  } as PayloadAction<Post[], 'FETCH_POSTS'>)

const fetchPosts = () => async (dispatch: Dispatch) => {
  const response = await postService.getPosts()
  dispatch(fetchPostsFullfiled(response.data))
}

export const postActions = {
  setPosts,
  fetchPosts,
  syncFetchPosts: fetchPostsFullfiled
}

export type PostActions =
  | ReturnType<typeof setPosts>
  | ReturnType<typeof fetchPostsFullfiled>
