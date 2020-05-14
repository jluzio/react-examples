import validators from 'services/validation/validators'
import _ from 'lodash'

const toNumber = (value: string | number) =>
  typeof value === 'string' ? _.parseInt(value) : value

const validationRule = <T>(
  validator: (value: T) => boolean,
  message: string
) => (value: T) => (validator(value) ? undefined : message)

export const required = validationRule(
  (value: any) => value != null,
  'Required'
)

export const maxLength = (limit: number) =>
  validationRule(
    (value: string) => value == null || value.length < limit,
    `Must be ${limit} characters or less`
  )

export const minLength = (limit: number) =>
  validationRule(
    (value: string) => value == null || value.length > limit,
    `Must be ${limit} characters or more`
  )

export const max = (limit: number) =>
  validationRule(
    (value: number | string) => value == null || toNumber(value) < limit,
    `Must be ${limit} or less`
  )

export const min = (limit: number) =>
  validationRule(
    (value: number | string) => value == null || toNumber(value) > limit,
    `Must be ${limit} or more`
  )

export const email = validationRule(validators.email, 'Email')

export default {
  required,
  maxLength,
  email,
  minLength
}
