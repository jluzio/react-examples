/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { List } from 'antd'
import { Todo } from './store/models'

const { Item } = List

interface Props {
  todo: Todo
  onClick: (todo: Todo) => void
}

const TodoListItem: React.FC<Props> = ({ onClick, todo }: Props) => {
  return (
    <Item
      onClick={() => onClick(todo)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
    >
      {todo.title}
    </Item>
  )
}

export default TodoListItem
