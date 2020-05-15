/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import { Form, Button } from 'antd'
import { email, maxLength, required, minLength, max, min } from './validators'
import { SignupFormValues } from '../models'
import { defaultFormLayout } from '../constants'
import {
  createRenderFormItem,
  InputFieldInput,
  InputNumberFieldInput
} from './InputRenderers'
import { notifyFormValues } from '../debug'

type OwnProps = {}

// validation functions have to be outside component
const minLength3 = minLength(3)
const min16 = min(16)

const submit = (values: SignupFormValues) => {
  notifyFormValues(values)
  return Promise.resolve()
}

const renderInputFieldInput = createRenderFormItem(InputFieldInput)
const renderInputNumberFieldInput = createRenderFormItem(InputNumberFieldInput)

type Props = InjectedFormProps<SignupFormValues, OwnProps>
const SignupForm: React.FC<Props> = (props: Props) => {
  const { handleSubmit, pristine, reset, submitting } = props

  const handleTestFormValues = () => {
    console.log('testing')
  }

  return (
    <Form
      onSubmitCapture={handleSubmit(submit)}
      labelCol={defaultFormLayout.form?.labelCol}
      wrapperCol={defaultFormLayout.form?.wrapperCol}
    >
      <Field
        name="email"
        label="Email"
        type="email"
        component={renderInputFieldInput}
        validate={[required, minLength3, email]}
      />
      <Field
        name="name"
        type="text"
        label="Name"
        component={renderInputFieldInput}
        validate={[minLength3]}
      />
      <Field
        name="age"
        type="number"
        label="Age"
        component={renderInputNumberFieldInput}
        validate={[min16]}
      />
      <Field
        name="password"
        type="password"
        label="Password"
        component={renderInputFieldInput}
        validate={[required, minLength3]}
      />
      <Form.Item
        wrapperCol={defaultFormLayout.formActionsItemProps?.wrapperCol}
      >
        <Button type="primary" htmlType="submit" disabled={submitting}>
          Submit
        </Button>
        <Button onClick={handleTestFormValues}>Test Values</Button>
      </Form.Item>
    </Form>
  )
}

const formDecorator = reduxForm<SignupFormValues, OwnProps>({
  form: 'examples/data-binding/signup'
})
export default formDecorator(SignupForm)
