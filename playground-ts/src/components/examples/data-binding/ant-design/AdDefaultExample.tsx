import React from 'react'
import { Form, Button, notification, Input, InputNumber } from 'antd'
import { Store } from 'antd/lib/form/interface'
import { ValidateErrorEntity } from 'rc-field-form/lib/interface'
import { SignupFormValues } from '../models'

type Values = SignupFormValues

const AdBasicExample: React.FC = () => {
  const handleFinish = (valuesAsStore: Store) => {
    const values = valuesAsStore as Values
    notification.open({
      message: 'Form submit',
      description: JSON.stringify(values, null, 2)
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
  return (
    <Form
      onFinish={handleFinish}
      onFinishFailed={err => handleFinishFailed(err)}
      initialValues={
        {
          email: 'e',
          name: 'n'
        } as Partial<Values>
      }
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
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

      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AdBasicExample
