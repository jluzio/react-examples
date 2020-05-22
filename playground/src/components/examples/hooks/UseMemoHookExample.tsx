import React, { useMemo, useState } from 'react'
import { Button, Form } from 'antd'
import log from 'utils/log-test'
import _ from 'lodash'

const expensiveItemsCalc = (items: number[]) => {
  const result = _.sum(items)
  log.log('expensiveItemsCalc', { result, items })
  return result
}

const UseMemoHookExample: React.FC = () => {
  const [items, setItems] = useState<number[]>([])
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const setCountAndAddItem = (value: number) => {
    setCount(value)
    setItems([...items, value])
  }

  const memoizedResult = useMemo(() => expensiveItemsCalc(items), [items])

  return (
    <Form>
      <Form.Item label="Count">{count}</Form.Item>
      <Form.Item label="Count2">{count2}</Form.Item>
      <Form.Item label="Actions">
        <Button type="primary" onClick={() => setCountAndAddItem(count + 1)}>
          Increment Count
        </Button>
        <Button onClick={() => setCount2(count2 + 1)}>Increment Count2</Button>
      </Form.Item>
      <Form.Item label="Result">{memoizedResult}</Form.Item>
    </Form>
  )
}

export default UseMemoHookExample
