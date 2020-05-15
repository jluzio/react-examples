import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import PostList from './PostList'
import StoreLoader from './StoreLoader'

const PostsExample: React.FC = () => (
  <Provider store={store}>
    <StoreLoader />
    <PostList />
  </Provider>
)

export default PostsExample
