import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import { Button, Form } from 'antd'
import Log from 'utils/log-test'
import validators from 'services/validation/validators'
import { notifyFormValues } from 'components/debug/debug-notifications'
import { LoginFormValues } from '../models'
import { defaultFormLayout } from '../constants'

type Values = LoginFormValues

export default class FormikValidationYup extends React.Component {
  render() {
    return (
      <Formik<Values>
        initialValues={{
          email: '',
          password: ''
        }}
        validate={values => {
          const errors: any = {}
          if (!validators.required(values.email)) {
            errors.email = 'Required'
          } else if (!validators.email(values.email)) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          Log.log('submit', {
            values,
            state: this.state
          })
          notifyFormValues(values)
          setTimeout(() => {
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form
            onSubmitCapture={handleSubmit}
            labelCol={defaultFormLayout.form?.labelCol}
            wrapperCol={defaultFormLayout.form?.wrapperCol}
          >
            <Form.Item label="Email">
              <Field
                type="email"
                name="email"
                className="ant-input"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" />
            </Form.Item>
            <Form.Item label="Password">
              <Field
                type="password"
                name="password"
                className="ant-input"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" />
            </Form.Item>
            <Form.Item
              wrapperCol={defaultFormLayout.formActionsItemProps?.wrapperCol}
            >
              <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    )
  }
}
