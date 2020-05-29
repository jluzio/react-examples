import React from 'react'
import { Formik, FormikHelpers, ErrorMessage } from 'formik'
import { Form, Input, Button } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { StreamEditData } from './data/models'
import { streamEditValidationSchema } from './data/validations'
import { defaultFormLayout } from './data/constants'
import { getStreamStatusErrors } from './store/selectors'
import { RouteIdParams } from './routes'
import StatusErrors from './StatusErrors'

type OwnProps = {
  initialValues?: OptNull<StreamEditData>
  onSubmit: (stream: StreamEditData, onSubmitComplete: () => void) => void
}
type RouteProps = RouteComponentProps<RouteIdParams>

const emptyValues: StreamEditData = {
  description: '',
  title: ''
}

type Props = OwnProps & RouteComponentProps
type State = {}

class StreamForm extends React.Component<Props, State> {
  state: State = {}

  handleSubmit = (
    values: StreamEditData,
    { setSubmitting }: FormikHelpers<StreamEditData>
  ) => {
    const { onSubmit } = this.props
    onSubmit(values, () => setSubmitting(false))
  }

  render() {
    const { history, initialValues } = this.props
    return (
      <Formik<StreamEditData>
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
