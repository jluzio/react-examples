import React from 'react'
import { Form, Button, notification, Input } from 'antd'
import { useForm, ErrorMessage } from 'react-hook-form'
import { SignupFormValues } from '../models'

type Values = SignupFormValues

const RhfBasicExample: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Values>({
    defaultValues: {
      name: '',
      email: '',
      age: 3,
      password: ''
    }
  })
  const handleFormSubmit = handleSubmit(values => {
    notification.open({
      message: 'Form submit',
      description: JSON.stringify(values, null, 2)
    })
  })
  return (
    <Form onSubmitCapture={handleFormSubmit}>
      <Form.Item>
        <input
          name="email"
          type="email"
          ref={register({
            minLength: { value: 8, message: 'minLength' },
            pattern: { value: /.+@.+/, message: 'pattern' },
            required: 'required'
          })}
          className="ant-input"
          placeholder="email"
        />
        <ErrorMessage errors={errors} name="email" />
      </Form.Item>
      <Form.Item>
        <input
          name="name"
          type="text"
          ref={register({
            minLength: { value: 4, message: 'minLength' },
            required: 'required'
          })}
          className="ant-input"
          placeholder="name"
        />
        <ErrorMessage errors={errors} name="name" />
      </Form.Item>
      <Form.Item>
        <label>Age</label>
        <input
          name="age"
          type="number"
          ref={register({
            min: { value: 16, message: 'min' },
            required: 'required'
          })}
          className="ant-input"
          placeholder="age"
        />
        <ErrorMessage errors={errors} name="age" />
      </Form.Item>
      <Form.Item>
        <input
          name="password"
          type="password"
          ref={register({
            minLength: { value: 8, message: 'minLength' },
            required: 'required'
          })}
          className="ant-input"
          placeholder="password"
        />
        <ErrorMessage errors={errors} name="password" />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  )
}

export default RhfBasicExample
