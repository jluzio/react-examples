import React from 'react'
import { Card } from 'antd'

const BlankExample: React.FC = () => {
  return (
    <Card title="Blank" className="example">
      <div style={{ height: '100%', width: '100%', backgroundColor: 'black' }}>
        test
      </div>
    </Card>
  )
}
export default BlankExample
