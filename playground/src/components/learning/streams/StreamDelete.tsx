import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

type RouteParams = { id?: string }

type Props = RouteComponentProps<RouteParams>
class StreamDelete extends React.Component<Props> {
  render() {
    const { match } = this.props
    const { params } = match

    return <div>StreamDelete: {params.id}</div>
  }
}

export default withRouter(StreamDelete)
