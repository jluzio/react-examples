import React from 'react'
import { Formik, FormikHelpers, ErrorMessage } from 'formik'
import { Form, Input, Button } from 'antd'
import { notifyFormValues } from 'components/debug/debug-notifications'
import { connect, ConnectedProps } from 'react-redux'
import { StreamCreateData } from './data/models'
import { streamCreateValidationSchema } from './data/validations'
import { defaultFormLayout } from './data/constants'
import { RootState, actions } from './store'

const initialValues: StreamCreateData = {
  title: '',
  description: ''
}

const mapStateToProps = (state: RootState) => ({})
const mapDispatchToProps = {
  onCreateStream: actions.createStream
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps
class StreamCreate extends React.Component<Props> {
  handleSubmit = (
    values: StreamCreateData,
    { setSubmitting }: FormikHelpers<StreamCreateData>
  ) => {
    notifyFormValues(values)
    setSubmitting(false)
    const { onCreateStream } = this.props
    console.log(onCreateStream)
    onCreateStream(values)
  }

  render() {
    return (
      <Formik<StreamCreateData>
        initialValues={{ ...initialValues }}
        onSubmit={this.handleSubmit}
        validationSchema={streamCreateValidationSchema}
      >
        {({
          submitForm,
          handleChange,
          handleBlur,
          errors,
          dirty,
          touched,
          values
        }) => (
          <Form
            onSubmitCapture={submitForm}
            labelCol={defaultFormLayout.form?.labelCol}
            wrapperCol={defaultFormLayout.form?.wrapperCol}
          >
            <Form.Item
              label="Title"
              help={<ErrorMessage name="title" />}
              validateStatus={
                touched.description && errors.title ? 'error' : undefined
              }
            >
              <Input
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item
              label="Description"
              help={<ErrorMessage name="description" />}
              validateStatus={
                touched.description && errors.description ? 'error' : undefined
              }
            >
              <Input
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
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

export default connector(StreamCreate)
