import React, { useState } from 'react'
import { Button, Form } from 'antd'

const UseStateHookExample: React.FC = () => {
  // hook must be unconditionally called in the same order in order to React properly map them
  const [count, setCount] = useState(0)
  return (
    <Form>
      <Form.Item label="Count">{count}</Form.Item>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </Form>
  )
}

export default UseStateHookExample
