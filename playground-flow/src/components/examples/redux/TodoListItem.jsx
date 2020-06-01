// @flow
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { ListItem } from '@material-ui/core'
import type { Todo } from './store/models'

type Props = {
  todo: Todo,
  onClick: (todo: Todo) => void,
}

const TodoListItem = ({ onClick, todo }: Props) => {
  return (
    <ListItem
      onClick={() => onClick(todo)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      {todo.text}
    </ListItem>
  )
}

export default TodoListItem
