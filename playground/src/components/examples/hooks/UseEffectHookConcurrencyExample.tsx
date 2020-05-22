/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import log from 'utils/log-test'
import { Button, Form, List } from 'antd'
import _ from 'lodash'

const logCtx = (message: string, ...optionalParams: any[]) =>
  log.log(`UseEffectHookExample :: ${message}`, ...optionalParams)

type ActionType = string
type ActionValue = string | number | number[]
type ActionId = string

const actionLimit = 100

const UseEffectHookConcurrencyExample: React.FC = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [actions, setActions] = useState<Map<ActionId, string>>(new Map())

  const actionMessage = (type: ActionType, value: ActionValue) =>
    `[${type}] Count :: value: ${
      Array.isArray(value) ? value.join(' ; ') : value
    }`

  const getActionId = (type: ActionType, value: ActionValue) =>
    `${type}:${value}`

  const registerAction = (type: ActionType, value: ActionValue) => {
    const actionId: ActionId = getActionId(type, value)
    if (actions.size > actionLimit) {
      throw new Error('Stopping after exceeding max action items')
    }
    if (!actions.has(actionId)) {
      const map = new Map(actions)
      map.set(actionId, actionMessage(type, value))
      setActions(map)
    }
  }

  const getActionList = () =>
    _.reverse(
      Array.from(actions.entries()).map(
        ([actionId, message]) => `${actionId} :: ${message}`
      )
    )

  useEffect(() => {
    registerAction('1', count)
  }, [count, actions])
  useEffect(() => {
    registerAction('2', count2)
  }, [count2, actions])

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
      <Form.Item label="Action Log">
        <List
          dataSource={getActionList()}
          renderItem={action => <List.Item>{action}</List.Item>}
          pagination={{ pageSize: 10 }}
        />
      </Form.Item>
    </Form>
  )
}

export default UseEffectHookConcurrencyExample
