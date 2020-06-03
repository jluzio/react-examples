/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react'
import { Transition } from 'react-transition-group'
import {
  TransitionProps,
  TransitionStatus
} from 'react-transition-group/Transition'
import { Card, Button } from 'antd'

const duration = 300

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

type TransitionStyles = Partial<
  {
    [key in TransitionStatus]: React.CSSProperties
  }
>

const transitionStyles: TransitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
}

const FadeTransitionExample: React.FC = () => {
  const [inProp, setInProp] = useState<boolean>(false)

  return (
    <Card
      actions={[
        <Button onClick={() => setInProp(!inProp)}>
          Toggle In ({`${inProp}`})
        </Button>
      ]}
    >
      <Transition in={inProp} timeout={duration}>
        {status => (
          <div style={{ ...defaultStyle, ...transitionStyles[status] }}>
            Im a fade Transition!
          </div>
        )}
      </Transition>
    </Card>
  )
}

export default FadeTransitionExample
