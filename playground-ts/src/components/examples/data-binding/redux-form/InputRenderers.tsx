/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { WrappedFieldProps } from 'redux-form'
import { Form, Input } from 'antd'

type KnownOtherFieldProps = {
  label?: string
  type?: string
}
export type FieldProps = WrappedFieldProps & KnownOtherFieldProps

export const renderFormItem: React.FC<FieldProps> = ({
  input,
  meta: { touched, error, warning },
  label,
  type
}: FieldProps) => (
  <Form.Item label={label} name={input.name} help={error}>
    <Input {...input} autoComplete="off" />
  </Form.Item>
)
