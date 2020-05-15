import React from 'react'
import { Formik, FormikHelpers, ErrorMessage } from 'formik'
import { Form, Input, Button } from 'antd'
import { notifyFormValues } from 'components/debug/debug-notifications'
import { StreamCreateData } from './models'
import { streamCreateValidationSchema } from './validations'
import { defaultFormLayout } from './constants'

const initialValues: StreamCreateData = {
  title: '',
  description: ''
}

class StreamCreate extends React.Component {
  handleSubmit = (
    values: StreamCreateData,
    { setSubmitting }: FormikHelpers<StreamCreateData>
  ) => {
    notifyFormValues(values)
    setSubmitting(false)
  }

  render() {
    return (
      <Formik<StreamCreateData>
        initialValues={{ ...initialValues }}
        onSubmit={this.handleSubmit}
        validationSchema={streamCreateValidationSchema}
      >
        {({ submitForm }) => (
          <Form
            onSubmitCapture={submitForm}
            labelCol={defaultFormLayout.form?.labelCol}
            wrapperCol={defaultFormLayout.form?.wrapperCol}
          >
            <Form.Item label="Title">
              <Input name="title" autoComplete="off" />
              <ErrorMessage name="title" />
            </Form.Item>
            <Form.Item label="Description">
              <Input name="description" autoComplete="off" />
              <ErrorMessage name="description" />
            </Form.Item>
            <Form.Item
              wrapperCol={defaultFormLayout.formActionsItemProps?.wrapperCol}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    )
  }
}

export default StreamCreate
