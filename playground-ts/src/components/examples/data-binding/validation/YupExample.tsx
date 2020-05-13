import React, { useState } from 'react'
import { Form, Button, notification, Input, InputNumber } from 'antd'
import { Store } from 'antd/lib/form/interface'
import { ValidateErrorEntity } from 'rc-field-form/lib/interface'
import * as yup from 'yup'
import { FormInstance } from 'antd/lib/form'
import { SignupFormValues } from '../models'
import { defaultFormLayout } from '../constants'
import { notifyFormValues } from '../debug'
import { validators, transformations } from '../validators'

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
    .min(4)
    .max(50)
    .transform(transformations.emptyStringToUndefined),
  password: yup
    .string()
    .required()
    .min(8),
  age: yup.number().min(16)
})

const YupExample: React.FC = () => {
  const formRef = React.createRef<FormInstance>()
  const [validations, setValidations] = useState<
    yup.ValidationError[] | undefined
  >()

  const handleFinish = (valuesAsStore: Store) => {
    const values = valuesAsStore as Values
    notifyFormValues(values)
    validationSchema
      .validate(values, { abortEarly: false })
      .then(validatedValues => {
        notifyFormValues(validatedValues, 'ValidatedValues')
      })
      .catch((validationError: yup.ValidationError) => {
        console.log('validation error', validationError)
        setValidations([validationError])
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
      <div>TODO: name validation correctly and feedback</div>
      <Form.Item label="Email" name="email" hasFeedback>
        <Input />
      </Form.Item>
      <Form.Item label="Name" name="name" hasFeedback>
        <Input />
      </Form.Item>
      <Form.Item label="Age" name="age" hasFeedback>
        <InputNumber />
      </Form.Item>
      <Form.Item label="Password" name="password" hasFeedback>
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
