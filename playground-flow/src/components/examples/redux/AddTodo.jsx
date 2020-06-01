// @flow
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core'
import { connect, ConnectedProps } from 'react-redux'
import { useForm, ErrorMessage, Controller } from 'react-hook-form'
import type { Todo } from './store/models'
import { todoActions } from './store'

const mapStateToProps = () => ({})
const mapDispatchToProps = { onAddTodo: todoActions.addTodo }
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps

type Values = Todo
const initialValues: Values = {
  text: '',
  completed: false,
}

const AddTodo = ({ onAddTodo }: Props) => {
  const { handleSubmit, errors, control, getValues, register } = useForm({
    defaultValues: initialValues,
  })

  const onSubmit = (todo: Todo) => {
    if (todo.text) {
      onAddTodo({ todo })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="text"
          control={control}
          as={<TextField type="text" placeholder="Text" autoComplete="off" />}
        />
        <ErrorMessage errors={errors} name="text" />
      </div>
      <div>
        <Button variant="outlined" type="submit">
          Add Todo
        </Button>
      </div>
    </form>
  )
}

export default connector(AddTodo)
