import React, { useState } from 'react'
import { Form, Button, notification, Input, InputNumber } from 'antd'
import { Store } from 'antd/lib/form/interface'
import { ValidateErrorEntity } from 'rc-field-form/lib/interface'
import * as yup from 'yup'
import { FormInstance } from 'antd/lib/form'
import { ValidateStatus } from 'antd/lib/form/FormItem'
import {
  transformations,
  getValidationMessages,
  hasValidationErrors
} from 'services/validators/validators'
import { SignupFormValues } from '../models'
import { defaultFormLayout } from '../constants'
import { notifyFormValues } from '../debug'

type Values = SignupFormValues

const validationSchema = yup.object<SignupFormValues>().shape({
  email: yup
    .string()
    .required()
    .email()
    .min(8)
    .max(50),
  name: yup
    .string()
    .transform(transformations.emptyStringToUndefined)
    .min(4)
    .max(50),
  password: yup
    .string()
    .required()
    .min(8),
  age: yup.number().min(16)
})

const YupExample: React.FC = () => {
  const formRef = React.createRef<FormInstance>()
  const [validationErrors, setValidationErrors] = useState<
    yup.ValidationError[] | undefined
  >()

  const handleFinish = (valuesAsStore: Store) => {
    const values = valuesAsStore as Values
    notifyFormValues(values)
    validationSchema
      .validate(values, { abortEarly: false })
      .then(validatedValues => {
        notifyFormValues(validatedValues, 'ValidatedValues')
        setValidationErrors([])
      })
      .catch((validationError: yup.ValidationError) => {
        console.log('validation error', validationError)
        setValidationErrors(validationError.inner)
      })
  }

  const handleFinishFailed = (error: ValidateErrorEntity) => {
    notification.open({
      message: 'Error',
      description: `Error in fields: ${error.errorFields
        .map(e => e.name)
        .join(', ')}`
    })
  }

  const handleTestFormValues = async () => {
    const values = formRef.current?.getFieldsValue()
    notifyFormValues(values, 'Values')
    validationSchema
      .validate(values, { abortEarly: false })
      .then(validatedData => {
        notifyFormValues(validatedData, 'ValidatedData')
      })
      .catch(error => {
        notifyFormValues(error, 'Validation')
      })
  }

  const validationStatus = (path: string): ValidateStatus =>
    hasValidationErrors(path, validationErrors) ? 'error' : 'success'

  return (
    <Form
      onFinish={handleFinish}
      onFinishFailed={err => handleFinishFailed(err)}
      initialValues={
        {
          email: '',
          name: undefined
        } as Partial<Values>
      }
      ref={formRef}
      labelCol={defaultFormLayout.form?.labelCol}
      wrapperCol={defaultFormLayout.form?.wrapperCol}
    >
      <Form.Item
        label="Email"
        name="email"
        hasFeedback
        help={getValidationMessages('email', validationErrors)}
        validateStatus={validationStatus('email')}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name"
        name="name"
        hasFeedback
        help={getValidationMessages('name', validationErrors)}
        validateStatus={validationStatus('name')}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        hasFeedback
        help={getValidationMessages('age', validationErrors)}
        validateStatus={validationStatus('age')}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        hasFeedback
        help={getValidationMessages('password', validationErrors)}
        validateStatus={validationStatus('password')}
      >
        <Input.Password />
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

export default YupExample
