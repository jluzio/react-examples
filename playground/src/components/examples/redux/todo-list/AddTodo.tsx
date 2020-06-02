/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { Form, Button, Input } from 'antd'
import log from 'utils/log'
import { connect, ConnectedProps } from 'react-redux'
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik'
import { Todo } from './store/models'
import { todoActions } from './store'

const mapStateToProps = () => ({})
const mapDispatchToProps = {
  onAddTodo: todoActions.addTodo
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps

type Values = Todo
const initialValues: Values = {
  id: 0,
  title: '',
  completed: false
}

const AddTodo: React.FC<Props> = ({ onAddTodo }: Props) => {
  const handleAddTodo = (todo: Values, actions: FormikHelpers<Values>) => {
    if (todo.title) {
      onAddTodo({ todo })
    }
    actions.setSubmitting(false)
  }

  return (
    <Formik<Values> initialValues={initialValues} onSubmit={handleAddTodo}>
      {({ isSubmitting, handleSubmit, values, handleChange, handleBlur }) => (
        <Form onSubmitCapture={handleSubmit}>
          <Form.Item>
            <Input
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <ErrorMessage name="text" component="div" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" disabled={isSubmitting}>
              Add Todo
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  )
}

export default connector(AddTodo)
