import React, { PropsWithChildren } from 'react'
import { Button, Card } from 'antd'

type Props = PropsWithChildren<{}>

const ApprovalCard: React.FC<Props> = (props: Props) => {
  const { children } = props
  return (
    <Card>
      {children}
      <div>
        <Button type="primary">Approve</Button>
        <Button type="primary" danger>
          Reject
        </Button>
      </div>
    </Card>
  )
}

export default ApprovalCard
