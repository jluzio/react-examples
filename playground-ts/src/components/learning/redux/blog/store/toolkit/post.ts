/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import postService from 'services/placeholder/post-service'
import { Post } from 'services/placeholder/models'

export type PostState = Post[]

const initialState: PostState = []

// async actions
const fetchPosts = createAsyncThunk('posts/fetch', async thunkAPI => {
  return (await postService.getPosts()).data
})

export const postSlice = createSlice({
  name: 'posts',
  initialState: initialState as PostState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      return action.payload
    }
  },
  extraReducers: {
    [fetchPosts.fulfilled.type]: (
      state,
      action: ReturnType<typeof fetchPosts.fulfilled>
    ) => {
      return action.payload
    }
  }
})

export const postReducer = postSlice.reducer

export const postActions = {
  ...postSlice.actions,
  fetchPosts
}
