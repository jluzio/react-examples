import React, { useState } from 'react'
import { Card, Button } from 'antd'
import PortalCard from './PortalCard'

const PortalDefaultExample: React.FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Card
      actions={[
        <Button key="show" onClick={() => setVisible(true)}>
          Show
        </Button>,
        <Button key="hide" onClick={() => setVisible(false)}>
          Hide
        </Button>
      ]}
    >
      <p>Demo of a Portal outside of standard div#root</p>
      <PortalCard visible={visible} onVisibleChange={setVisible} />
    </Card>
  )
}

export default PortalDefaultExample
