/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { List } from 'antd'
import { Todo } from './store/models'

interface Props {
  todo: Todo
  onClick: (todo: Todo) => void
}

const TodoListItem: React.FC<Props> = ({ onClick, todo }: Props) => {
  return (
    <List.Item
      onClick={() => onClick(todo)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
    >
      {todo.title}
    </List.Item>
  )
}

export default TodoListItem
