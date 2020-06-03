/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Card, Button, Form, Radio } from 'antd'
import './switch-transition.css'

type SwitchMode = 'out-in' | 'in-out'
const modes: SwitchMode[] = ['out-in', 'in-out']

const SwitchTransitionExample: React.FC = () => {
  const [mode, setMode] = useState<SwitchMode>('out-in')
  const [state, setState] = useState<boolean>(false)

  return (
    <Card
      actions={[
        <Button onClick={() => setState(!state)}>
          Toggle State ({`${state} | ${mode}`})
        </Button>
      ]}
    >
      <Form>
        <Form.Item>
          <Radio.Group onChange={e => setMode(e.target.value)} value={mode}>
            {modes.map(v => (
              <Radio key={v} value={v}>
                {v}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
      </Form>
      <div className="main">
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={`${state}`}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false)
            }}
            classNames="fade"
          >
            <div className="button-container">
              <p>{state ? 'Goodbye, world!' : 'Hello, world!'}</p>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </Card>
  )
}

export default SwitchTransitionExample
