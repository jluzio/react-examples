/* eslint-disable import/prefer-default-export */
import validationErrors, { ValidationErrors } from './validation-errors'

export const validationErrorsBuilder = (
  get: () => ValidationErrors,
  set: (validationErrors: ValidationErrors) => void
) => {
  const errors = get()
  // validationErrors.hasValidationErrors()
}
