import * as yup from 'yup'
import { Todo } from './models'

export const todoValidationSchema = yup.object<Todo>().shape({
  title: yup
    .string()
    .required()
    .min(4)
})

export const validationSchemas = {
  todo: todoValidationSchema
}

export default {
  validationSchemas
}
