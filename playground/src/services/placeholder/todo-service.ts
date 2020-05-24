import ResourceService from './resource-service'
import { Todo } from './models'

export default new ResourceService<Todo, number>('todos')
