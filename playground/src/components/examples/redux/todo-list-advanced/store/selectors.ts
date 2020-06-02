/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit'
import { RouteComponentProps } from 'react-router-dom'
import { RootState } from '.'
import { RouteIdParams } from '../routes'

const selectTodos = (state: RootState) => state.todos

const getTodoIdMatchParams = (
  state: RootState,
  props: RouteComponentProps<RouteIdParams>
) => props.match.params.id

const selectTodoByTodoId = createSelector(
  [selectTodos, getTodoIdMatchParams],
  (todos, id) => todos.find(t => t.id === id)
)

export const selectors = {
  selectTodos,
  selectTodoByTodoId
}
