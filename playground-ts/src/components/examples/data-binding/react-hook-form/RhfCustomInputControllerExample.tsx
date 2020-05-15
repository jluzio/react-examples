import React from 'react'
import { Form, Button, Input, InputNumber } from 'antd'
import { useForm, ErrorMessage, Controller } from 'react-hook-form'
import { notifyFormValues } from 'components/debug/debug-notifications'
import { SignupFormValues } from '../models'
import { defaultFormLayout } from '../constants'

type Values = SignupFormValues

const RhfCustomInputControllerExample: React.FC = () => {
  const { handleSubmit, errors, control } = useForm<Values>({
    defaultValues: {
      email: '',
      name: '',
      age: undefined,
      password: ''
    }
  })
  const handleFormSubmit = handleSubmit(values => {
    notifyFormValues(values)
  })
  return (
    <Form
      onSubmitCapture={handleFormSubmit}
      labelCol={defaultFormLayout.form?.labelCol}
      wrapperCol={defaultFormLayout.form?.wrapperCol}
    >
      <Form.Item label="Email">
        <Controller
          as={<Input type="email" autoComplete="off" />}
          name="email"
          control={control}
          rules={{
            required: 'required',
            minLength: {
              value: 8,
              message: 'minLength'
            },
            pattern: {
              value: /.+@.+/,
              message: 'pattern'
            }
          }}
        />
        <ErrorMessage errors={errors} name="email" />
      </Form.Item>
      <Form.Item label="Name">
        <Controller
          as={<Input autoComplete="off" />}
          name="name"
          control={control}
          rules={{
            minLength: {
              value: 4,
              message: 'minLength'
            }
          }}
        />
        <ErrorMessage errors={errors} name="name" />
      </Form.Item>
      <Form.Item label="Age">
        <Controller
          as={<InputNumber autoComplete="off" />}
          name="age"
          control={control}
          rules={{
            min: {
              value: 16,
              message: 'min'
            }
          }}
        />
        <ErrorMessage errors={errors} name="age" />
      </Form.Item>
      <Form.Item label="Password">
        <Controller
          as={<Input.Password autoComplete="off" />}
          name="password"
          control={control}
          rules={{
            required: 'required',
            minLength: {
              value: 4,
              message: 'minLength'
            }
          }}
        />
        <ErrorMessage errors={errors} name="password" />
      </Form.Item>
      <Form.Item
        wrapperCol={defaultFormLayout.formActionsItemProps?.wrapperCol}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RhfCustomInputControllerExample
