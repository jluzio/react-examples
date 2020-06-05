import React from 'react'
import { Form, Button, Input, Switch, notification } from 'antd'
import { useForm, Controller, ErrorMessage } from 'react-hook-form'
import { Todo } from './models'
import { validationSchemas } from './validation'

type Values = Todo

type Props = {
  defaultValues?: Values
  onSave: (todo: Values) => void
  onCancel: (todo?: Values) => void
}

const TodoEdit: React.FC<Props> = ({
  defaultValues,
  onSave,
  onCancel
}: Props) => {
  const { handleSubmit, errors, control } = useForm<Values>({
    defaultValues,
    validationSchema: validationSchemas.todo
  })

  const handleSave = (todo: Values) => {
    const finalTodo: Todo = { ...defaultValues, ...todo }
    notification.open({
      message: `Data: ${JSON.stringify(finalTodo)}`,
      duration: 2
    })
    onSave(finalTodo)
  }

  const handleCancel = () => {
    onCancel(defaultValues)
  }

  return (
    <Form onSubmitCapture={handleSubmit(handleSave)} layout="inline">
      <Form.Item label="Title">
        <Controller
          name="title"
          control={control}
          as={<Input autoComplete="off" />}
        />
        <ErrorMessage errors={errors} name="title" />
      </Form.Item>
      <Form.Item label="Completed">
        <Controller name="completed" control={control} as={<Switch />} />
        <ErrorMessage errors={errors} name="completed" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Save</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </Form.Item>
    </Form>
  )
}

export default TodoEdit
