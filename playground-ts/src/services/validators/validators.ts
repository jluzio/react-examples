import * as yup from 'yup'

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
    value === '' ? undefined : value
}

type ValidationErrors = yup.ValidationError[] | undefined

export function getValidationErrors(
  path: string,
  errors: ValidationErrors
): ValidationErrors {
  return errors?.filter(f => f.path === path)
}

export function hasValidationErrors(
  path: string,
  errors: ValidationErrors
): boolean {
  return !!getValidationErrors(path, errors)?.length
}

export const getValidationMessages = (
  path: string,
  errors: ValidationErrors
): string[] | undefined =>
  getValidationErrors(path, errors)?.map(error => error.message)
