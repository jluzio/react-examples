/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { Form, Button } from 'antd'
import log from 'utils/log-test'
import { connect, ConnectedProps } from 'react-redux'
import { Formik, Field, useField, ErrorMessage, FormikHelpers } from 'formik'
import { Todo } from './store/models'
import { todoActions } from './store'

const { Item } = Form

const mapStateToProps = () => ({})
const mapDispatchToProps = { onAddTodo: todoActions.addTodo }
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps
type State = {
  todo: Todo
}

type Values = Todo
const initialValues: Values = {
  text: '',
  completed: false
}

class AddTodo extends Component<Props> {
  handleAddTodo = (todo: Todo, actions: FormikHelpers<Todo>) => {
    const { onAddTodo } = this.props
    if (todo.text) {
      onAddTodo({ todo })
    }
    actions.setSubmitting(false)
  }

  render() {
    return (
      <Formik<Values>
        initialValues={initialValues}
        onSubmit={this.handleAddTodo}
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form onSubmitCapture={handleSubmit}>
            <Item>
              <Field
                type="text"
                name="text"
                className="ant-input"
                placeholder="Text"
              />
              <ErrorMessage name="text" component="div" />
            </Item>
            <Item>
              <Button htmlType="submit" disabled={isSubmitting}>
                Add Todo
              </Button>
            </Item>
          </Form>
        )}
      </Formik>
    )
  }
}

export default connector(AddTodo)
