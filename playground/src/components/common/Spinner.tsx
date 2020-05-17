import React from 'react'
import { Spin } from 'antd'

type Props = {
  message?: string
}

const Spinner: React.FC<Props> = (props: Props) => {
  const { message } = props
  return <Spin size="large" tip={message} />
}

Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner
