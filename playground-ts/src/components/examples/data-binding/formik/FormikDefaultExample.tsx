import React from 'react'
import { Formik } from 'formik'
import { Input, Button, Form } from 'antd'
import validators from 'services/validation/validators'
import { notifyFormValues } from 'components/debug/debug-notifications'
import { LoginFormValues } from '../models'
import { defaultFormLayout } from '../constants'

type Values = LoginFormValues

export default class FormikDefaultExample extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
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
          notifyFormValues(values)
          setTimeout(() => {
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <Form
            onSubmitCapture={handleSubmit}
            labelCol={defaultFormLayout.form?.labelCol}
            wrapperCol={defaultFormLayout.form?.wrapperCol}
          >
            <Form.Item label="Email">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
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
