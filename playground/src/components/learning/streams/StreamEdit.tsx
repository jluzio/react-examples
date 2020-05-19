import React from 'react'
import { Formik, FormikHelpers, ErrorMessage } from 'formik'
import { Form, Input, Button } from 'antd'
import { notifyFormValues } from 'components/debug/debug-notifications'
import { connect, ConnectedProps } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import _ from 'lodash'
import { Stream } from './data/models'
import { streamCreateValidationSchema } from './data/validations'
import { defaultFormLayout } from './data/constants'
import { RootState, actions } from './store'
import { getStreamByMatchProps } from './store/selectors'
import { RouteIdParams } from './routes'

type RouteProps = RouteComponentProps<RouteIdParams>

const emptyStream: Stream = {
  description: '',
  id: 0,
  title: '',
  userId: ''
}
const mapStateToProps = (state: RootState, props: RouteProps) => ({
  stream: getStreamByMatchProps(state, props)
})
const mapDispatchToProps = {
  onGetStream: actions.getStream,
  onUpdateStream: actions.updateStream
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & RouteProps
class StreamEdit extends React.Component<Props> {
  componentDidMount() {
    const { stream, onGetStream, match } = this.props
    if (!stream) {
      onGetStream(_.parseInt(match.params.id))
    }
  }

  handleSubmit = (values: Stream, { setSubmitting }: FormikHelpers<Stream>) => {
    notifyFormValues(values)
    setSubmitting(false)
    const { onUpdateStream } = this.props
    onUpdateStream(values)
  }

  render() {
    const { history, stream } = this.props
    return (
      <Formik<Stream>
        initialValues={stream ?? emptyStream}
        enableReinitialize
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
                Save
              </Button>
              <Button htmlType="submit" onClick={() => history.goBack()}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    )
  }
}

export default connector(withRouter(StreamEdit))
