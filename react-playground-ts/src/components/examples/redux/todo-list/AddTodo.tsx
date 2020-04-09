/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import log from 'utils/Log'
import { connect, ConnectedProps } from 'react-redux'
import { Formik, Field, useField, ErrorMessage } from 'formik'
import { Todo } from './store/models'
import { addTodo } from './store'

const { Item } = Form

const mapState = () => ({})
const mapDispatch = { onAddTodo: addTodo }
const connector = connect(mapState, mapDispatch)
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
  handleAddTodo = (todo: Todo) => {
    const { onAddTodo } = this.props
    log.info('handleAddTodo', {
      todo
    })
    onAddTodo({ todo })
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
