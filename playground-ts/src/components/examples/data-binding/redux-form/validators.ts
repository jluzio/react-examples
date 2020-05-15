import validators from 'services/validation/validators'
import validationMessages from 'services/validation/validation-messages'

const validationRule = <T>(
  validator: (value: T) => boolean,
  message: string
) => (value: T) => (validator(value) ? undefined : message)

export const required = validationRule(
  validators.required,
  validationMessages.required()
)

export const min = (limit: number) =>
  validationRule(validators.min(limit), validationMessages.min(limit))

export const max = (limit: number) =>
  validationRule(validators.max(limit), validationMessages.max(limit))

export const minLength = (limit: number) =>
  validationRule(
    validators.minLength(limit),
    validationMessages.minLength(limit)
  )

export const maxLength = (limit: number) =>
  validationRule(
    validators.maxLength(limit),
    validationMessages.maxLength(limit)
  )

export const email = validationRule(
  validators.email,
  validationMessages.email()
)

export default {
  required,
  maxLength,
  email,
  minLength
}
