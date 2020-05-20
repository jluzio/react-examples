import React from 'react'
import { Formik, FormikHelpers, ErrorMessage } from 'formik'
import { Form, Input, Button } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import _ from 'lodash'
import { Stream } from './data/models'
import { streamEditValidationSchema } from './data/validations'
import { defaultFormLayout } from './data/constants'
import { getStreamStatusErrors } from './store/selectors'
import { RouteIdParams } from './routes'
import StatusErrors from './StatusErrors'

type OwnProps = {
  initialValues?: OptNull<Stream>
  onSubmit: (stream: Stream, onSubmitComplete: () => void) => void
}
type RouteProps = RouteComponentProps<RouteIdParams>

const emptyValues: Stream = {
  description: '',
  id: 0,
  title: '',
  userId: ''
}

type Props = OwnProps & RouteComponentProps
type State = {}

class StreamForm extends React.Component<Props, State> {
  state: State = {}

  handleSubmit = (values: Stream, { setSubmitting }: FormikHelpers<Stream>) => {
    const { onSubmit } = this.props
    onSubmit(values, () => setSubmitting(false))
  }

  render() {
    const { history, initialValues } = this.props
    return (
      <Formik<Stream>
        initialValues={initialValues ?? emptyValues}
        enableReinitialize
        onSubmit={this.handleSubmit}
        validationSchema={streamEditValidationSchema}
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
                Save
              </Button>
              <Button htmlType="submit" onClick={() => history.goBack()}>
                Cancel
              </Button>
            </Form.Item>
            <StatusErrors errorsSelector={getStreamStatusErrors} />
          </Form>
        )}
      </Formik>
    )
  }
}

export default withRouter(StreamForm)
