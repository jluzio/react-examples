import React, { useCallback, useState } from 'react'
import { Button, Form, notification } from 'antd'
import log from 'utils/log'

const functionsCreated = new Set()

class CallbackFactory {
  create = (count: number) => {
    // log.log('creating function')
    return () => {
      notification.open({
        message: `updated count: ${count}`,
        duration: 1
      })
    }
  }
}
const factory = new CallbackFactory()

const UseCallbackHookExample: React.FC = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const memoCallback1 = useCallback(factory.create(count), [count])
  const memoCallback1NoDep = useCallback(factory.create(count), [])
  const callback1NoDep = factory.create(count)

  functionsCreated.add(memoCallback1)
  functionsCreated.add(memoCallback1NoDep)
  functionsCreated.add(callback1NoDep)

  return (
    <Form>
      <Form.Item label="Count">{count}</Form.Item>
      <Form.Item label="Count2">{count2}</Form.Item>
      <Form.Item label="Actions">
        <Button onClick={() => setCount(count + 1)}>Increment Count</Button>
        <Button onClick={() => setCount2(count2 + 1)}>Increment Count2</Button>
      </Form.Item>
      <Form.Item label="Functions">{functionsCreated.size}</Form.Item>
      <Form.Item label="Actions">
        <Button onClick={() => memoCallback1()}>memoCallback1</Button>
        <Button onClick={() => memoCallback1NoDep()}>memoCallback1NoDep</Button>
        <Button onClick={() => callback1NoDep()}>callback1NoDep</Button>
      </Form.Item>
    </Form>
  )
}

export default UseCallbackHookExample
