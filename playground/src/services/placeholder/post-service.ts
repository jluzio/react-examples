import ResourceService from './resource-service'
import { Post } from './models'

export default new ResourceService<Post, number>('posts')
