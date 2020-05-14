import React, { useEffect } from 'react'
import { Form, Button, Input, InputNumber } from 'antd'
import { useForm, ErrorMessage } from 'react-hook-form'
import _ from 'lodash'
import { SignupFormValues } from '../models'
import { defaultFormLayout } from '../constants'
import { notifyFormValues } from '../debug'

type Values = SignupFormValues

const RhfCustomInputEffectsExample: React.FC = () => {
  const { handleSubmit, errors, register, setValue } = useForm<Values>({
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

  const toNumber = (value: number | string | undefined): number | undefined =>
    typeof value === 'string' ? _.parseInt(value) : value

  register({})

  useEffect(() => {
    register(
      { name: 'email' },
      {
        required: 'required',
        minLength: { value: 8, message: 'minLength' },
        pattern: {
          value: /.+@.+/,
          message: 'pattern'
        }
      }
    )
    register(
      { name: 'name' },
      {
        minLength: {
          value: 4,
          message: 'minLength'
        }
      }
    )
    register(
      { name: 'age' },
      {
        min: {
          value: 16,
          message: 'min'
        }
      }
    )
    register(
      { name: 'password' },
      {
        required: 'required',
        minLength: {
          value: 4,
          message: 'minLength'
        }
      }
    )
  }, [register])

  return (
    <Form
      onSubmitCapture={handleFormSubmit}
      labelCol={defaultFormLayout.form?.labelCol}
      wrapperCol={defaultFormLayout.form?.wrapperCol}
    >
      <Form.Item label="Email">
        <Input
          type="email"
          onChange={e => setValue('email', e.target.value, true)}
        />
        <ErrorMessage errors={errors} name="email" />
      </Form.Item>
      <Form.Item label="Name">
        <Input onChange={e => setValue('name', e.target.value, true)} />
        <ErrorMessage errors={errors} name="name" />
      </Form.Item>
      <Form.Item label="Age">
        <InputNumber
          onChange={value => setValue('age', toNumber(value), true)}
        />
        <ErrorMessage errors={errors} name="age" />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password
          onChange={e => setValue('password', e.target.value, true)}
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

export default RhfCustomInputEffectsExample
