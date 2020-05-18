import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

type RouteParams = { id?: string }

type Props = RouteComponentProps<RouteParams>
class StreamEdit extends React.Component<Props> {
  render() {
    const { match } = this.props
    const { params } = match

    return <div>StreamEdit: {params.id}</div>
  }
}

export default withRouter(StreamEdit)
