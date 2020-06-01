/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '.'

const selectTodos = (state: RootState) => state.todos

export const selectors = {
  selectTodos
}
