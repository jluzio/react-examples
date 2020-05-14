import React from 'react'
import { Form, Button, notification, Input, InputNumber } from 'antd'
import { Store } from 'antd/lib/form/interface'
import { ValidateErrorEntity } from 'rc-field-form/lib/interface'
import * as yup from 'yup'
import { FormInstance } from 'antd/lib/form'
import { ValidateStatus } from 'antd/lib/form/FormItem'
import transformations from 'services/validation/transformations'
import {
  hasValidationErrors,
  getValidationMessages
} from 'services/validation/validation-errors'
import eventHandlers from 'services/validation/event-handlers'
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

type Props = {}
type State = {
  validationErrors: yup.ValidationError[] | undefined
}

class YupExample extends React.Component<Props, State> {
  formRef = React.createRef<FormInstance>()

  state: State = {
    validationErrors: undefined
  }

  handleFinish = (valuesAsStore: Store) => {
    const values = valuesAsStore as Values
    notifyFormValues(values)
    validationSchema
      .validate(values, { abortEarly: false })
      .then(validatedValues => {
        notifyFormValues(validatedValues, 'ValidatedValues')
        this.setState({
          validationErrors: []
        })
      })
      .catch((validationError: yup.ValidationError) => {
        console.log('validation error', validationError)
        this.setState({
          validationErrors: validationError.inner
        })
      })
  }

  handleFinishFailed = (error: ValidateErrorEntity) => {
    notification.open({
      message: 'Error',
      description: `Error in fields: ${error.errorFields
        .map(e => e.name)
        .join(', ')}`
    })
  }

  handleTestFormValues = async () => {
    const values = this.formRef.current?.getFieldsValue()
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

  validate() {
    const values = this.formRef.current?.getFieldsValue()
    validationSchema
      .validate(values, { abortEarly: false })
      .then(validatedValues => {
        this.setState({
          validationErrors: []
        })
      })
      .catch((validationError: yup.ValidationError) => {
        this.setState({
          validationErrors: validationError.inner
        })
      })
  }

  render() {
    const { validationErrors } = this.state
    const validationStatus = (path: string): ValidateStatus =>
      hasValidationErrors(path, validationErrors) ? 'error' : 'success'

    return (
      <Form
        onFinish={this.handleFinish}
        onFinishFailed={err => this.handleFinishFailed(err)}
        initialValues={
          {
            email: '',
            name: undefined
          } as Partial<Values>
        }
        ref={this.formRef}
        labelCol={defaultFormLayout.form?.labelCol}
        wrapperCol={defaultFormLayout.form?.wrapperCol}
      >
        <Form.Item
          label="Email"
          hasFeedback
          help={getValidationMessages('email', validationErrors)}
          validateStatus={validationStatus('email')}
        >
          <Input
            name="email"
            autoComplete="off"
            onChange={e =>
              eventHandlers.handleChangeEvent(e, validationSchema, errors =>
                this.setState({ validationErrors: errors })
              )
            }
          />
        </Form.Item>
        <Form.Item
          label="Name"
          hasFeedback
          help={getValidationMessages('name', validationErrors)}
          validateStatus={validationStatus('name')}
        >
          <Input name="name" autoComplete="off" />
        </Form.Item>
        <Form.Item
          label="Age"
          hasFeedback
          help={getValidationMessages('age', validationErrors)}
          validateStatus={validationStatus('age')}
        >
          <InputNumber name="age" autoComplete="off" />
        </Form.Item>
        <Form.Item
          label="Password"
          hasFeedback
          help={getValidationMessages('password', validationErrors)}
          validateStatus={validationStatus('password')}
        >
          <Input.Password name="password" autoComplete="off" />
        </Form.Item>
        <Form.Item
          wrapperCol={defaultFormLayout.formActionsItemProps?.wrapperCol}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button onClick={this.handleTestFormValues}>Test Values</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default YupExample
