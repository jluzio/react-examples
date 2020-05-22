import React, { useRef } from 'react'
import { Button } from 'antd'
import moment from 'moment'

const UseRefHookExample: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  const onChangeDivText = () => {
    ref.current!.innerText = moment().toISOString()
  }

  return (
    <div>
      <div ref={ref} />
      <Button onClick={onChangeDivText}>Update</Button>
    </div>
  )
}

export default UseRefHookExample
