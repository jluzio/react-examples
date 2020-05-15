import React from 'react'
import { Form, Button } from 'antd'
import { useForm, ErrorMessage } from 'react-hook-form'
import { notifyFormValues } from 'components/debug/debug-notifications'
import { SignupFormValues } from '../models'
import { defaultFormLayout } from '../constants'

type Values = SignupFormValues

const RhfBasicExample: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Values>({
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
        <input
          name="email"
          type="email"
          ref={register({
            required: 'required',
            minLength: { value: 8, message: 'minLength' },
            pattern: { value: /.+@.+/, message: 'pattern' }
          })}
          className="ant-input"
          placeholder="email"
        />
        <ErrorMessage errors={errors} name="email" />
      </Form.Item>
      <Form.Item label="Name">
        <input
          name="name"
          type="text"
          ref={register({
            minLength: { value: 4, message: 'minLength' }
          })}
          className="ant-input"
          placeholder="name"
        />
        <ErrorMessage errors={errors} name="name" />
      </Form.Item>
      <Form.Item label="Age">
        <input
          name="age"
          type="number"
          ref={register({
            min: { value: 16, message: 'min' }
          })}
          className="ant-input"
          placeholder="age"
        />
        <ErrorMessage errors={errors} name="age" />
      </Form.Item>
      <Form.Item label="Password">
        <input
          name="password"
          type="password"
          ref={register({
            required: 'required',
            minLength: { value: 4, message: 'minLength' }
          })}
          className="ant-input"
          placeholder="password"
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

export default RhfBasicExample
