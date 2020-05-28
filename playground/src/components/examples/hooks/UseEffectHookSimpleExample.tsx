/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import log from 'utils/log'
import { Button, Form, List } from 'antd'
import _ from 'lodash'

const logCtx = (message: string, ...optionalParams: any[]) =>
  log.log(`UseEffectHookSimpleExample :: ${message}`, ...optionalParams)

type Props = {
  handleConcurrency?: boolean
}
const defaultProps: Props = {
  handleConcurrency: false
}

type ActionType = string
type ActionValue = string | number | number[]

const UseEffectHookSimpleExample: React.FC<Props> = (props: Props) => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [actions, setActions] = useState<string[]>([])
  const currentActions = [...actions]

  const { handleConcurrency } = { ...defaultProps, ...props }

  const actionMessage = (type: ActionType, value: ActionValue) =>
    `[${type}] Count :: value: ${
      Array.isArray(value) ? value.join(' ; ') : value
    }`

  const defaultRegisterAction = (type: ActionType, value: ActionValue) => {
    setActions([...actions, actionMessage(type, value)])
  }

  const concurrentRegisterAction = (type: ActionType, value: ActionValue) => {
    currentActions.push(actionMessage(type, value))
    setActions([...currentActions])
  }
  const registerAction = handleConcurrency
    ? concurrentRegisterAction
    : defaultRegisterAction

  const getActionList = () => _.reverse([...actions])

  useEffect(() => {
    registerAction('1', count)
  }, [count])
  useEffect(() => {
    registerAction('2', count2)
  }, [count2])
  // added an effect for both changes
  useEffect(() => {
    // only handling first update
    if (count === 0 && count2 === 0) {
      registerAction('1 or 2', [count, count2])
    }
  }, [count, count2])

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
      <Form.Item label="NOTE">
        First action log for Count is lost due to concurrent access to actions
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

export default UseEffectHookSimpleExample
