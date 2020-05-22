import React, {
  useRef,
  useImperativeHandle,
  useState,
  useLayoutEffect
} from 'react'
import { Button, Form } from 'antd'

type FancyElementType = {
  focus: () => void
  value: string
}

const FancyInput = React.forwardRef(
  (props, ref: React.Ref<FancyElementType>) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current!.focus()
      },
      value: inputRef.current!.value
    }))

    useLayoutEffect(() => {
      console.log('DOM update')
    })

    return (
      <input
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    )
  }
)

const UseImperativeHandleHookExample: React.FC = () => {
  const ref = useRef<FancyElementType>(null)
  const [currentValue, setCurrentValue] = useState('')

  const updateCurrentValue = () => {
    const { current } = ref
    if (current) {
      setCurrentValue(current.value)
    }
  }

  const focus = () => {
    const { current } = ref
    if (current) {
      current.focus()
    }
  }

  return (
    <Form>
      <Form.Item label="Current Value">{currentValue}</Form.Item>
      <Form.Item>
        <FancyInput ref={ref} />
      </Form.Item>
      <Form.Item>
        <Button onClick={updateCurrentValue}>Update Value</Button>
        <Button onClick={focus}>Focus Input</Button>
      </Form.Item>
    </Form>
  )
}

export default UseImperativeHandleHookExample
