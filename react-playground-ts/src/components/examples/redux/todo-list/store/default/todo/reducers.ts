import { Todo } from '../../models'
import { TodoActions, addTodo, toggleTodo } from './actions'

export type TodoState = Todo[]

const initialState: TodoState = []

export function todoReducer(
  state: TodoState = initialState,
  action: TodoActions
): TodoState {
  if (toggleTodo.match(action)) {
    return state.map((todo, index) => {
      if (index === action.payload.index) {
        return { ...todo, completed: !todo.completed } as Todo
      }
      return todo
    })
  }
  if (addTodo.match(action)) {
    return [...state, action.payload.todo]
  }
  return state
}
