import jsonPlaceholderApi from 'api/json-placeholder-api'
import { Post } from './models'

class PostService {
  private api = jsonPlaceholderApi

  async getPosts() {
    return this.api.get<Post[]>('/posts')
  }
}

export default new PostService()
