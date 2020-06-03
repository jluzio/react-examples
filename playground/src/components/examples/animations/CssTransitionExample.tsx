/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Card, Button } from 'antd'
import './css-transition.css'

const CssTransitionExample: React.FC = () => {
  const [inProp, setInProp] = useState<boolean>(false)

  return (
    <Card
      actions={[
        <Button onClick={() => setInProp(!inProp)}>
          Toggle In ({`${inProp}`})
        </Button>
      ]}
    >
      <CSSTransition in={inProp} timeout={2000} classNames="my-node">
        <div>Ill receive my-node-* classes</div>
      </CSSTransition>
    </Card>
  )
}

export default CssTransitionExample
