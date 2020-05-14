/* eslint-disable import/prefer-default-export */
import * as yup from 'yup'

type HTMLDataElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement

export const handleUpdate = (
  value: any,
  path: string,
  validationSchema: yup.Schema<any>,
  setValidationErrors: (errors: yup.ValidationError[]) => void
) => {
  validationSchema
    .validateAt(path, value)
    .then(() => {
      setValidationErrors([])
    })
    .catch((error: yup.ValidationError) => {
      setValidationErrors(error.inner)
    })
}

export const handleChangeEvent = (
  event: React.ChangeEvent<HTMLDataElement>,
  validationSchema: yup.Schema<any>,
  setValidationErrors: (errors: yup.ValidationError[]) => void
) => {
  console.log('handleChangeEvent', event)
  const { name, value } = event.target
  return handleUpdate(value, name, validationSchema, setValidationErrors)
}

export default {
  handleUpdate,
  handleChangeEvent
}
