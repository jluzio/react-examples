import jsonPlaceholderApi from 'api/json-placeholder-api'
import { User } from '../models'

class PostService {
  private api = jsonPlaceholderApi

  async getUsers() {
    return this.api.get<User[]>('/users')
  }

  async getUser(userId: number) {
    return this.api.get<User>(`/users/${userId}`)
  }
}

export default new PostService()
