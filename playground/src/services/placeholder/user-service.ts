import ResourceService from './resource-service'
import { User } from './models'

export default new ResourceService<User, number>('users')
