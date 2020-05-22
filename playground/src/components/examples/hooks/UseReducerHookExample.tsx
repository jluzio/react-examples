import React, { useReducer } from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { Form, Button } from 'antd'

const countSlice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
})
const countReducer = countSlice.reducer
const countActions = countSlice.actions

const UseReducerHookExample: React.FC = () => {
  const [countState, dispatch] = useReducer(countReducer, 0)

  return (
    <Form>
      <Form.Item label="Count">{countState}</Form.Item>
      <Form.Item label="Actions">
        <Button type="primary" onClick={() => dispatch(countActions.increment)}>
          Increment
        </Button>
        <Button type="primary" onClick={() => dispatch(countActions.decrement)}>
          Decrement
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UseReducerHookExample
