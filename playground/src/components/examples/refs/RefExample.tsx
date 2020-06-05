import React from 'react'
import log from 'utils/log'
import { logProps } from '../hoc/LogProps'

const RefExample: React.FC = () => {
  const buttonRef: React.RefObject<HTMLButtonElement> = React.createRef<
    HTMLButtonElement
  >()

  const onClick = () => {
    log.log(`Button: ${buttonRef.current?.id}`)
  }

  return (
    <button id="button-ref-id" type="button" ref={buttonRef} onClick={onClick}>
      ref button
    </button>
  )
}

export default logProps(RefExample)
