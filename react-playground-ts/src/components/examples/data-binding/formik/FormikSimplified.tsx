import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import { Button, Form, Card, notification } from 'antd'

const { Item } = Form

export default class FormikSimplified extends React.Component {
  render() {
    return (
      <Card title="Simplified">
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors: any = {}
            if (!values.email) {
              errors.email = 'Required'
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              notification.open({
                message: 'Form submit',
                description: JSON.stringify(values, null, 2)
              })
              setSubmitting(false)
            }, 400)
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit} layout="inline">
              <Item>
                <Field
                  type="email"
                  name="email"
                  className="ant-input"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" />
              </Item>
              <Item>
                <Field
                  type="password"
                  name="password"
                  className="ant-input"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" />
              </Item>
              <Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Item>
            </Form>
          )}
        </Formik>
      </Card>
    )
  }
}
