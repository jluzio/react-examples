import React from 'react'
import { Formik, FormikHelpers, ErrorMessage } from 'formik'
import { Form, Input, Button } from 'antd'
import { notifyFormValues } from 'components/debug/debug-notifications'
import { connect, ConnectedProps } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { StreamCreateData } from './data/models'
import { streamCreateValidationSchema } from './data/validations'
import { defaultFormLayout } from './data/constants'
import { RootState, actions } from './store'
import { getStreamStatusErrors, getStreamStatus } from './store/selectors'
import StatusErrors from './StatusErrors'
import { locations } from './routes'

const initialValues: StreamCreateData = {
  title: '',
  description: ''
}

const mapStateToProps = (state: RootState) => ({
  streamStatus: getStreamStatus(state)
})
const mapDispatchToProps = {
  createStream: actions.createStream,
  resetStreamRootStatus: actions.resetStreamRootStatus
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & RouteComponentProps
type State = {
  onActionComplete?: () => void
  actionSuccessful: boolean
}

class StreamCreate extends React.Component<Props, State> {
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

  componentDidUpdate() {
    const { history } = this.props
    const { actionSuccessful } = this.state
    if (actionSuccessful) {
      history.push(locations.list())
    }
  }

  handleSubmit = (
    values: StreamCreateData,
    { setSubmitting }: FormikHelpers<StreamCreateData>
  ) => {
    notifyFormValues(values)

    // TODO: watch streamStatus.pending, when done check errors and redirect if needed
    const { createStream, resetStreamRootStatus } = this.props
    resetStreamRootStatus()
    createStream(values)
    this.setState({ onActionComplete: () => setSubmitting(false) })
  }

  render() {
    const { history } = this.props
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
          values,
          isSubmitting
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

export default connector(withRouter(StreamCreate))
