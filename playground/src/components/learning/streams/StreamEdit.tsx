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
import {
  getStreamByMatchProps,
  getStreamStatus,
  getStreamStatusErrors
} from './store/selectors'
import { RouteIdParams, locations } from './routes'
import StatusErrors from './StatusErrors'

type RouteProps = RouteComponentProps<RouteIdParams>

const emptyStream: Stream = {
  description: '',
  id: 0,
  title: '',
  userId: ''
}
const mapStateToProps = (state: RootState, props: RouteProps) => ({
  stream: getStreamByMatchProps(state, props),
  streamStatus: getStreamStatus(state)
})
const mapDispatchToProps = {
  getStream: actions.getStream,
  updateStream: actions.updateStream,
  resetStreamRootStatus: actions.resetStreamRootStatus
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & RouteProps
type State = {
  onActionComplete?: () => void
  actionSuccessful: boolean
}

class StreamEdit extends React.Component<Props, State> {
  state: State = {
    actionSuccessful: false
  }

  static getDerivedStateFromProps(
    props: Props,
    state: State
  ): Partial<State> | null {
    const { streamStatus } = props
    const { onActionComplete } = state
    if (onActionComplete != null && !streamStatus.pending) {
      onActionComplete()
      return {
        onActionComplete: undefined,
        actionSuccessful: streamStatus.errors.length === 0
      }
    }
    return null
  }

  componentDidMount() {
    const { stream, getStream, match } = this.props
    if (!stream) {
      getStream(_.parseInt(match.params.id))
    }
  }

  componentDidUpdate() {
    const { history } = this.props
    const { actionSuccessful } = this.state
    if (actionSuccessful) {
      history.push(locations.list())
    }
  }

  handleSubmit = (values: Stream, { setSubmitting }: FormikHelpers<Stream>) => {
    notifyFormValues(values)

    const { updateStream, resetStreamRootStatus } = this.props
    resetStreamRootStatus()
    updateStream(values)
    this.setState({ onActionComplete: () => setSubmitting(false) })
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
            <StatusErrors errorsSelector={getStreamStatusErrors} />
          </Form>
        )}
      </Formik>
    )
  }
}

export default connector(withRouter(StreamEdit))
