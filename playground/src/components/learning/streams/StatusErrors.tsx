import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Button, Result } from 'antd'
import { ErrorLike } from 'store/models'
import { RootState } from './store'
import selectors from './store/selectors'

type OwnProps = {
  errorsSelector: (state: RootState) => ErrorLike[]
  onRetry?: () => void
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
  streamStatusErrors: selectors.getStreamStatusErrors(state)
})
const mapDispatchToProps = {}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & OwnProps

class StatusErrors extends React.Component<Props> {
  render() {
    const { streamStatusErrors, onRetry } = this.props
    if (!streamStatusErrors.length) {
      return null
    }
    let actions = null
    if (onRetry) {
      actions = [
        <Button type="primary" key="tryAgain" onClick={() => onRetry()}>
          Try again
        </Button>
      ]
    }
    return (
      <Result
        status="error"
        title="Api Failed"
        subTitle={streamStatusErrors.map(e => e.message).join(', ')}
        extra={actions}
      />
    )
  }
}

export default connector(StatusErrors)
