/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import log from 'utils/log'
import { Button, Form } from 'antd'

const logCtx = (message: string, ...optionalParams: any[]) =>
  log.log(`UseEffectHookBasicsExample :: ${message}`, ...optionalParams)

type Props = {}

const UseEffectHookBasicsExample: React.FC<Props> = (props: Props) => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  // NOTE: effects are called AFTER render

  // NOTE: if using dependency checks with effects, we must use all dependencies
  // in order to avoid stale references

  // NOTE: in the scenario of using count, count2 and actions, if we register all dependencies
  // it could lead to never ending renders (a count change results in a actions change which is also monitered)

  useEffect(() => {
    logCtx('hook (dependencyList = undefined, always called)')
  })
  useEffect(() => {
    logCtx('hook (dependencyList = [], equivalent to componentDidMount)')
  }, [])

  useEffect(() => {
    logCtx('hook (dependencyList = undefined, always called)')
    return () => logCtx('unregister hook')
  })

  useEffect(() => {
    logCtx('hook (dependencyList = [count], called on count change)')
  }, [count])

  useEffect(() => {
    logCtx('hook with unregister function')
    return () => logCtx('hook unregistered!')
  })

  logCtx('render')
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
    </Form>
  )
}

export default UseEffectHookBasicsExample
