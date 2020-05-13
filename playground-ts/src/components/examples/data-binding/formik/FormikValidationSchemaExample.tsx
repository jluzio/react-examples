import React from 'react'
import { Formik, ErrorMessage } from 'formik'
import { Button, Form, Input, InputNumber } from 'antd'
import { validationSchemas } from '../validators'
import { SignupFormValues } from '../models'
import { defaultFormLayout } from '../constants'
import { notifyFormValues } from '../debug'

type Values = SignupFormValues

const validationSchema = validationSchemas.signup

export default class FormikValidationSchemaExample extends React.Component {
  handleTestFormValues = async (values: Values) => {
    notifyFormValues(values, 'Values')
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

  render() {
    return (
      <Formik<Values>
        initialValues={{
          email: '',
          name: '',
          age: undefined,
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          notifyFormValues(values)
          setTimeout(() => {
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ handleSubmit, isSubmitting, handleChange, handleBlur, values }) => (
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
              <ErrorMessage name="email" />
            </Form.Item>
            <Form.Item label="Name">
              <Input
                name="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <ErrorMessage name="name" />
            </Form.Item>
            <Form.Item label="Age">
              <InputNumber
                name="age"
                placeholder="Age"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
              />
              <ErrorMessage name="age" />
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <ErrorMessage name="password" />
            </Form.Item>
            <Form.Item
              wrapperCol={defaultFormLayout.formActionsItemProps?.wrapperCol}
            >
              <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                Submit
              </Button>
              <Button onClick={() => this.handleTestFormValues(values)}>
                Test Values
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    )
  }
}
