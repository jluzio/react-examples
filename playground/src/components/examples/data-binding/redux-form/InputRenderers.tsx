/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { WrappedFieldProps, WrappedFieldInputProps } from 'redux-form'
import { Form, Input, InputNumber } from 'antd'

type KnownOtherFieldProps = {
  label?: string
  type?: string
}
export type FieldProps = WrappedFieldProps & KnownOtherFieldProps
export type FieldInputProps = WrappedFieldInputProps

export const createRenderFormItem = (
  InputComponent: React.ComponentType<FieldInputProps>
) => {
  const ReduxFormItem: React.FC<FieldProps> = ({
    input,
    meta: { touched, error, warning },
    label,
    type
  }: FieldProps) => {
    const inputProps = { ...input, type }
    return (
      <Form.Item label={label} name={input.name} help={error}>
        <InputComponent {...inputProps} />
      </Form.Item>
    )
  }
  return ReduxFormItem
}

export const InputFieldInput: React.FC<FieldInputProps> = (
  props: FieldInputProps
) => <Input {...props} autoComplete="off" />

export const InputNumberFieldInput: React.FC<FieldInputProps> = (
  props: FieldInputProps
) => <InputNumber {...props} autoComplete="off" />
