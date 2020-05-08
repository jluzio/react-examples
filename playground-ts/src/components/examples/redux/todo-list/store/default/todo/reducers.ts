import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../models'
import { TodoActions, todoActions, TodoActionType } from './actions'

export type TodoState = Todo[]

const initialState: TodoState = []

type AddTodoAction = PayloadAction<Parameters<typeof todoActions.addTodo>[0]>
type ToggleTodoAction = PayloadAction<
  Parameters<typeof todoActions.toggleTodo>[0]
>

type SimplePayloadType = { todo: Todo } | { index: number }

// reducer functions to be used in different reducer types
function addTodoReducer(state: TodoState, todo: Todo) {
  return [...state, todo]
}
function toggleTodoReducer(state: TodoState, index: number) {
  return state.map((todo, currentIndex) => {
    if (currentIndex === index) {
      return { ...todo, completed: !todo.completed } as Todo
    }
    return todo
  })
}

/**
 * Replicated scenario with Action.type = string (instead of constant)
 * @param state
 * @param action
 */
export function todoReducerDefaultTypeString(
  state: TodoState = initialState,
  action: PayloadAction<SimplePayloadType, string>
): TodoState {
  switch (action.type) {
    case TodoActionType.ADD: {
      const addAction = action as AddTodoAction
      return addTodoReducer(state, addAction.payload.todo)
    }
    case TodoActionType.TOGGLE: {
      const toggleAction = action as ToggleTodoAction
      return toggleTodoReducer(state, toggleAction.payload.index)
    }
    default:
      return state
  }
}

/**
 * It's removing type definitions by using any, so it won't be type checked :(
 * @param state
 * @param action
 */
export function todoReducerDefaultTypeStringPayloadAny(
  state: TodoState = initialState,
  action: PayloadAction<any, string>
): TodoState {
  switch (action.type) {
    case TodoActionType.ADD:
      return addTodoReducer(state, action.payload.todo)
    case TodoActionType.TOGGLE:
      return toggleTodoReducer(state, action.payload.index)
    default:
      return state
  }
}

/**
 * NOTE: only works if type is a constant, and not of type string
 * type 'todo/add' or enum const works, but type string with value 'todo/add' doesn't
 * @param state
 * @param action
 */
export function todoReducerDefaultSwitchConstType(
  state: TodoState = initialState,
  action: TodoActions
): TodoState {
  switch (action.type) {
    case TodoActionType.ADD:
      return addTodoReducer(state, action.payload.todo)
    case TodoActionType.TOGGLE:
      return toggleTodoReducer(state, action.payload.index)
    default:
      return state
  }
}

/**
 * NOTE: only works if type is a constant, and not of type string
 * type 'todo/add' or enum const works, but type string with value 'todo/add' doesn't
 * @param state
 * @param action
 */
export function todoReducerToolkitSwitchConstActionType(
  state: TodoState = initialState,
  action: TodoActions
): TodoState {
  switch (action.type) {
    case todoActions.addTodo.type:
      return addTodoReducer(state, action.payload.todo)
    case todoActions.toggleTodo.type:
      return toggleTodoReducer(state, action.payload.index)
    default:
      return state
  }
}

/**
 * Works on generic action of types, such as string
 * @param state
 * @param action
 */
export function todoReducerToolkitSwitchMatch(
  state: TodoState = initialState,
  action: TodoActions
): TodoState {
  if (todoActions.addTodo.match(action)) {
    return addTodoReducer(state, action.payload.todo)
  }
  if (todoActions.toggleTodo.match(action)) {
    return toggleTodoReducer(state, action.payload.index)
  }
  return state
}

/**
 * Works on generic action of types, such as string
 * Automatically does the default scenario where it doesn't match any action
 * @param state
 * @param action
 */
export const todoReducerToolkitMapType = createReducer(
  initialState as TodoState,
  {
    [todoActions.addTodo.type]: (state, action: AddTodoAction) => {
      return addTodoReducer(state, action.payload.todo)
    },
    [todoActions.toggleTodo.type]: (state, action: ToggleTodoAction) => {
      return toggleTodoReducer(state, action.payload.index)
    }
  }
)

/**
 * Works on generic action of types, such as string
 * Automatically does the default scenario where it doesn't match any action
 * @param state
 * @param action
 */
export const todoReducerToolkitBuilder = createReducer(
  initialState as TodoState,
  builder =>
    builder
      .addCase(todoActions.addTodo, (state, action) => {
        return addTodoReducer(state, action.payload.todo)
      })
      .addCase(todoActions.toggleTodo, (state, action) => {
        return toggleTodoReducer(state, action.payload.index)
      })
)

export const todoReducer = todoReducerToolkitBuilder
