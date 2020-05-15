import * as yup from 'yup'
import { StreamCreateData } from './models'

export const fieldValidations = {
  name: yup.string().max(20),
  title: yup.string().max(50),
  description: yup.string().max(100)
}

export const streamFieldValidations = {
  title: fieldValidations.title.required().min(4),
  description: fieldValidations.description.required()
}

export const streamCreateValidationSchema = yup
  .object<StreamCreateData>()
  .shape({
    title: streamFieldValidations.title,
    description: streamFieldValidations.description
  })
