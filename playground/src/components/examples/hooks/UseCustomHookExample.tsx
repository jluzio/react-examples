import React, { useState, useDebugValue } from 'react'
import { Button, Form } from 'antd'

function useCount() {
  const [count, setCount] = useState(0)
  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(`value: ${count}`)
  return {
    count,
    setCount
  }
}

const UseCustomHookExample: React.FC = () => {
  const { count, setCount } = useCount()
  return (
    <Form>
      <Form.Item label="Count">{count}</Form.Item>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </Form>
  )
}

export default UseCustomHookExample
