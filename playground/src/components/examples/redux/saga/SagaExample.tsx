import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { Form, InputNumber, Button, Card, notification } from 'antd'
import _ from 'lodash'
import { useForm, Controller } from 'react-hook-form'
import { store } from './store'
import UserDetailsById from './UserDetailsById'

type FormData = {
  userId: number
}

const SagaExample: React.FC = () => {
  const { handleSubmit, control } = useForm<FormData>()
  const [userId, setUserId] = useState<number>()

  const onFormSubmit = (values: FormData) => {
    notification.open({
      message: `Loading User ${values.userId}`,
      duration: 2
    })
    setUserId(values.userId)
  }

  return (
    <Provider store={store}>
      <Form onSubmitCapture={handleSubmit(onFormSubmit)} layout="inline">
        <Form.Item label="UserId">
          <Controller name="userId" as={<InputNumber />} control={control} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Card title="Result">
        {userId != null && <UserDetailsById id={userId} />}
      </Card>
    </Provider>
  )
}

export default SagaExample
