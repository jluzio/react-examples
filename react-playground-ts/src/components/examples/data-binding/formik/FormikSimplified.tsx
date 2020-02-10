import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import { Button, Form, Card, notification } from 'antd'
import Log from 'utils/Log'
import validators from './validators'

const { Item } = Form
interface Values {
  email?: string
  password?: string
}

const validationSchema = validators.signupSchema()

export default class FormikSimplified extends React.Component {
  render() {
    return (
      <Card title="Simplified">
        <Formik<Values>
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            Log.log('submit', {
              values,
              state: this.state
            })
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
