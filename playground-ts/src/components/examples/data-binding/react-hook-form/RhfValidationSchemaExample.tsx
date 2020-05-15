import React from 'react'
import { Form, Button, Input, InputNumber } from 'antd'
import { useForm, ErrorMessage, Controller } from 'react-hook-form'
import { notifyFormValues } from 'components/debug/debug-notifications'
import { SignupFormValues } from '../models'
import { defaultFormLayout } from '../constants'
import { validationSchemas } from '../validators'

type Values = SignupFormValues

const RhfValidationSchemaExample: React.FC = () => {
  const { handleSubmit, errors, control, getValues } = useForm<Values>({
    defaultValues: {
      email: '',
      name: '',
      age: undefined,
      password: ''
    },
    validationSchema: validationSchemas.signup
  })
  const handleFormSubmit = handleSubmit(values => {
    notifyFormValues(values)
  })
  const handleTestFormValues = async () => {
    const values = getValues()
    notifyFormValues(values, 'Peek values')
    validationSchemas.signup
      .strip(true)
      .validate(values)
      .then(validatedData => {
        notifyFormValues(validatedData, 'ValidatedData')
      })
      .catch(error => {
        notifyFormValues(error, 'Validation')
      })
  }
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
        />
        <ErrorMessage errors={errors} name="email" />
      </Form.Item>
      <Form.Item label="Name">
        <Controller
          as={<Input autoComplete="off" />}
          name="name"
          control={control}
        />
        <ErrorMessage errors={errors} name="name" />
      </Form.Item>
      <Form.Item label="Age">
        <Controller
          as={<InputNumber autoComplete="off" />}
          name="age"
          control={control}
        />
        <ErrorMessage errors={errors} name="age" />
      </Form.Item>
      <Form.Item label="Password">
        <Controller
          as={<Input.Password autoComplete="off" />}
          name="password"
          control={control}
        />
        <ErrorMessage errors={errors} name="password" />
      </Form.Item>
      <Form.Item
        wrapperCol={defaultFormLayout.formActionsItemProps?.wrapperCol}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button onClick={handleTestFormValues}>Test Values</Button>
      </Form.Item>
    </Form>
  )
}

export default RhfValidationSchemaExample
