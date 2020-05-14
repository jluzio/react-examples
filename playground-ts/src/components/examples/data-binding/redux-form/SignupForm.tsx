import React from 'react'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import { Form, Input, InputNumber, Button } from 'antd'
import { SignupFormValues } from '../models'
import { defaultFormLayout } from '../constants'

type OwnProps = {}

type Props = InjectedFormProps<SignupFormValues, OwnProps>
const SignupForm: React.FC<Props> = (props: Props) => {
  const { handleSubmit, pristine, reset, submitting } = props

  const handleTestFormValues = () => {
    console.log('testing')
  }

  return (
    <Form onSubmitCapture={handleSubmit}>
      <Form.Item name="email" label="Email">
        <Input name="email" autoComplete="off" />
      </Form.Item>
      <Form.Item name="name" label="Name">
        <Input name="name" autoComplete="off" />
      </Form.Item>
      <Form.Item name="age" label="Age">
        <InputNumber name="age" autoComplete="off" />
      </Form.Item>
      <Form.Item name="password" label="Password">
        <Input.Password name="password" />
      </Form.Item>
      <Form.Item
        wrapperCol={defaultFormLayout.formActionsItemProps?.wrapperCol}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button onClick={handleTestFormValues}>Test Values</Button>
      </Form.Item>
      <div>test data</div>
      <div>test data</div>
    </Form>
  )
}

const formDecorator = reduxForm<SignupFormValues, OwnProps>({
  form: 'examples/data-binding/signup'
})
export default formDecorator(SignupForm)
