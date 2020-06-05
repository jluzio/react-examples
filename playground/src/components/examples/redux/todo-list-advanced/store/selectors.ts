/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit'
import { RouteComponentProps } from 'react-router-dom'
import _ from 'lodash'
import { RootState } from '.'
import { RouteIdParams } from '../routes'

const selectTodos = (state: RootState) => state.todos

const getTodoIdMatchParams = (
  state: RootState,
  props: RouteComponentProps<RouteIdParams>
) => props.match.params.id

const selectTodoByTodoId = createSelector(
  [selectTodos, getTodoIdMatchParams],
  (todos, id) => todos[id]
)

const selectTodoList = createSelector([selectTodos], todos => _.values(todos))

export const selectors = {
  selectTodos,
  selectTodoList,
  selectTodoByTodoId
}
