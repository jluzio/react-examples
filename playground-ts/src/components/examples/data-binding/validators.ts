import * as yup from 'yup'
import { SignupFormValues, LoginFormValues } from './models'

export const required = <T>(v: OptNull<T>): v is T => v != null

export const optionalValidation = <T>(
  value: OptNull<T>,
  validator: (v: T) => boolean
) => value == null || validator(value)

export const email = (value: OptNull<string>) =>
  optionalValidation(value, v =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)
  )

export const validators = {
  required,
  optionalValidation,
  email
}

export const transformations = {
  emptyStringToUndefined: (value: OptNull<string>) =>
    value && value.length ? value : undefined
}

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
