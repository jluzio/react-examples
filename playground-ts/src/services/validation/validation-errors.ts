import * as yup from 'yup'

export type ValidationErrors = yup.ValidationError[]

export function getValidationErrors(
  path: string,
  errors: ValidationErrors
): ValidationErrors {
  return errors.filter(f => f.path === path)
}

export function hasValidationErrors(
  path: string,
  errors: ValidationErrors
): boolean {
  return !!getValidationErrors(path, errors).length
}

export const getValidationMessages = (
  path: string,
  errors: ValidationErrors
): string[] | undefined =>
  getValidationErrors(path, errors).map(error => error.message)

export default {
  getValidationErrors,
  hasValidationErrors,
  getValidationMessages
}
