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

const TodoListItem: React.FC<Props> = (props: Props) => {
  const { todo, onClick } = props
  return (
    <Item
      onClick={() => onClick(todo)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
    >
      {todo.text}
    </Item>
  )
}

export default TodoListItem
