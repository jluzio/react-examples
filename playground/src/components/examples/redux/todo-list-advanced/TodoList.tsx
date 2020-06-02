import React from 'react'
import { List, Button, Card } from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  CheckSquareOutlined,
  CheckSquareFilled,
  PlusOutlined
} from '@ant-design/icons'
import { Todo } from './models'

type Props = {
  todos: Todo[]
  onCreate: () => void
  onEdit: (todo: Todo) => void
  onToggle: (todo: Todo) => void
  onDelete: (todo: Todo) => void
}

const TodoList: React.FC<Props> = ({
  todos,
  onCreate,
  onDelete,
  onEdit,
  onToggle
}: Props) => {
  const renderActions = (todo: Todo) => {
    return [
      <Button
        icon={todo.completed ? <CheckSquareFilled /> : <CheckSquareOutlined />}
        onClick={() => onToggle(todo)}
      />,
      <Button icon={<EditOutlined />} onClick={() => onEdit(todo)} />,
      <Button danger icon={<DeleteOutlined />} onClick={() => onDelete(todo)} />
    ]
  }

  return (
    <Card
      title="TodoList"
      actions={[<Button icon={<PlusOutlined />} onClick={() => onCreate()} />]}
    >
      <List
        dataSource={todos}
        renderItem={todo => (
          <List.Item key={todo.id} actions={renderActions(todo)}>
            {todo.title}
          </List.Item>
        )}
      />
    </Card>
  )
}

export default TodoList
