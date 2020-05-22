import React, { useCallback, useState } from 'react'
import { Button, Form } from 'antd'
import log from 'utils/log-test'

const UseCallbackHookExample: React.FC = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const messageCallback = useCallback(() => {
    log.log('callback called')
    return `updated count: ${count}`
  }, [count])

  return (
    <Form>
      <Form.Item label="Count">{count}</Form.Item>
      <Form.Item label="Count2">{count2}</Form.Item>
      <Form.Item label="Actions">
        <Button type="primary" onClick={() => setCount(count + 1)}>
          Increment Count
        </Button>
        <Button onClick={() => setCount2(count2 + 1)}>Increment Count2</Button>
      </Form.Item>
      <Form.Item label="Result">{messageCallback()}</Form.Item>
    </Form>
  )
}

export default UseCallbackHookExample
