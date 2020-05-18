import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

type RouteParams = { id?: string }

type Props = RouteComponentProps<RouteParams>
class StreamShow extends React.Component<Props> {
  render() {
    const { match } = this.props
    const { params } = match

    return <div>StreamShow: {params.id}</div>
  }
}

export default withRouter(StreamShow)
