// @flow
export type Todo = {
  text: string,
  completed: boolean,
}

export type VisibilityFilters = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'
