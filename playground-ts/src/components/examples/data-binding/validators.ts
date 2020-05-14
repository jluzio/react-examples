/* eslint-disable import/prefer-default-export */
import * as yup from 'yup'
import { transformations } from 'services/validators/validators'
import { SignupFormValues, LoginFormValues } from './models'

const fieldValidations = {
  email: yup
    .string()
    .min(8)
    .max(50)
    .email()
    .required(),
  password: yup
    .string()
    .required()
    .min(4)
    .max(50),
  name: yup
    .string()
    .transform(transformations.emptyStringToUndefined)
    .min(4)
    .max(50),
  age: yup.number().min(16)
}

export const validationSchemas = {
  login: yup.object<LoginFormValues>().shape({
    email: fieldValidations.email,
    password: fieldValidations.password
  }),
  signup: yup.object<SignupFormValues>().shape({
    email: fieldValidations.email,
    password: fieldValidations.password,
    name: fieldValidations.name,
    age: fieldValidations.age
  })
}
