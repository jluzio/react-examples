/* eslint-disable import/prefer-default-export */
import * as yup from 'yup'

type HTMLDataElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement

export type FieldValidationErrorsSetter = (
  errors: yup.ValidationError[],
  path: string
) => void

export const handleFieldUpdate = (
  value: any,
  path: string,
  validationSchema: yup.Schema<any>,
  setFieldValidationErrors: FieldValidationErrorsSetter
) => {
  yup
    .reach(validationSchema, path)
    .validate(value)
    .then(() => {
      setFieldValidationErrors([], path)
    })
    .catch((error: yup.ValidationError) => {
      const fieldError: yup.ValidationError = { ...error, path }
      setFieldValidationErrors([fieldError], path)
    })
}

export const handleFieldChangeEvent = (
  event: React.ChangeEvent<HTMLDataElement>,
  validationSchema: yup.Schema<any>,
  setFieldValidationErrors: FieldValidationErrorsSetter
) => {
  const { name, value } = event.target
  return handleFieldUpdate(
    value,
    name,
    validationSchema,
    setFieldValidationErrors
  )
}

export default {
  handleFieldUpdate,
  handleFieldChangeEvent
}
