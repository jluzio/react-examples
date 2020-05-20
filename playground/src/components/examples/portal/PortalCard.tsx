import React from 'react'
import ReactDOM from 'react-dom'
import { Card, Button } from 'antd'

type Props = {
  visible: boolean
  onVisibleChange: (visible: boolean) => void
}

const PortalCard: React.FC<Props> = (props: Props) => {
  const { visible, onVisibleChange } = props
  if (!visible) {
    return null
  }
  return ReactDOM.createPortal(
    <Card
      title="Portal"
      actions={[
        <Button key="close" onClick={() => onVisibleChange(false)}>
          Close
        </Button>
      ]}
    >
      Hello from Portal!
    </Card>,
    // <div id="portal"></div> must exist in index.html
    document.querySelector('#portal')!
  )
}

export default PortalCard
