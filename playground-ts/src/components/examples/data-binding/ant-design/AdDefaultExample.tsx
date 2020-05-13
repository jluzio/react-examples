import React from 'react'
import { Form, Button, notification, Input, InputNumber } from 'antd'
import { Store } from 'antd/lib/form/interface'
import { ValidateErrorEntity } from 'rc-field-form/lib/interface'
import { SignupFormValues } from '../models'
import { defaultFormLayout } from '../constants'
import { notifyFormValues } from '../debug'

type Values = SignupFormValues

const AdBasicExample: React.FC = () => {
  const handleFinish = (valuesAsStore: Store) => {
    const values = valuesAsStore as Values
    notifyFormValues(values)
  }
  const handleFinishFailed = (error: ValidateErrorEntity) => {
    notification.open({
      message: 'Error',
      description: `Error in fields: ${error.errorFields
        .map(e => e.name)
        .join(', ')}`
    })
  }
  return (
    <Form
      onFinish={handleFinish}
      onFinishFailed={err => handleFinishFailed(err)}
      initialValues={
        {
          email: '',
          name: ''
        } as Partial<Values>
      }
      labelCol={defaultFormLayout.form?.labelCol}
      wrapperCol={defaultFormLayout.form?.wrapperCol}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ type: 'email', required: true, min: 8 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        rules={[
          { required: true, message: 'required' },
          { type: 'string', message: 'type' },
          { min: 3, message: 'min' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[{ required: true, type: 'number', min: 16 }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, type: 'string', min: 3 }]}
      >
        <Input.Password />
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

export default AdBasicExample
