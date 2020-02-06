import React from 'react'
import { Formik } from 'formik'
import { Input, Button, Form, Card, notification } from 'antd'
import validators from './validators'

const { Item } = Form

export default class FormikBasic extends React.Component {
  render() {
    return (
      <Card title="Basic">
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
            setTimeout(() => {
              notification.open({
                message: 'Form submit',
                description: JSON.stringify(values, null, 2)
              })
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
            <Form onSubmit={handleSubmit} layout="inline">
              <Item>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </Item>
              <Item>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
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
