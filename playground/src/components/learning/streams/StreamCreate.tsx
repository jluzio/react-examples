import React from 'react'
import { Formik, FormikHelpers, ErrorMessage } from 'formik'
import { Form, Input, Button } from 'antd'
import { notifyFormValues } from 'components/debug/debug-notifications'
import { connect, ConnectedProps } from 'react-redux'
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom'
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
  onCreateStream: actions.createStream,
  onResetStreamStatus: actions.resetStreamStatus
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & RouteComponentProps
type State = {
  submitting: boolean
  redirect: boolean
}

class StreamCreate extends React.Component<Props, State> {
  state: State = {
    submitting: false,
    redirect: false
  }

  // eslint-disable-next-line consistent-return
  static getDerivedStateFromProps(props: Props, state: State): State | null {
    const { streamStatus } = props
    const { submitting } = state
    if (submitting && !streamStatus.pending) {
      return {
        submitting: false,
        redirect: streamStatus.errors.length === 0
      }
    }
    return null
  }

  // eslint-disable-next-line react/sort-comp
  handleSubmit = (
    values: StreamCreateData,
    { setSubmitting }: FormikHelpers<StreamCreateData>
  ) => {
    notifyFormValues(values)

    // TODO: watch streamStatus.pending, when done check errors and redirect if needed
    const { onCreateStream, onResetStreamStatus } = this.props
    onResetStreamStatus({ rootOnly: true })
    onCreateStream(values)
    this.setState({ submitting: true })
  }

  componentDidUpdate() {
    // const { submitting } = this.state
    // const { streamStatus, history } = this.props
    // if (submitting && !streamStatus.pending) {
    //   // eslint-disable-next-line react/no-did-update-set-state
    //   this.setState({ submitting: false })
    //   if (!streamStatus.errors.length) {
    //     history.push(locations.list())
    //   }
    // }
    const { redirect } = this.state
    const { history } = this.props
    if (redirect) {
      history.push(locations.list())
    }
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
