import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { Button, Form } from 'antd'

const UseLayoutEffectHookExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (inputRef.current) {
      console.log('Update', inputRef.current.value)
    }
  })
  useLayoutEffect(() => {
    if (inputRef.current) {
      console.log('DOM Update', inputRef.current.value)
    }
  })

  return (
    <Form>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </Form>
  )
}

export default UseLayoutEffectHookExample
