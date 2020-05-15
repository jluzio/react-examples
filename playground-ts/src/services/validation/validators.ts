import * as yup from 'yup'

export const optionalValidation = <T>(
  value: OptNull<T>,
  validator: (v: T) => boolean
) => value == null || validator(value)

export const required = <T>(v: OptNull<T>): v is T => v != null

export const min = (limit: number) => (value: string) =>
  optionalValidation(value, v => v.length <= limit)

export const max = (limit: number) => (value: string) =>
  optionalValidation(value, v => v.length <= limit)

export const minLength = (limit: number) => (value: string) =>
  optionalValidation(value, v => v.length >= limit)

export const maxLength = (limit: number) => (value: string) =>
  optionalValidation(value, v => v.length <= limit)

export const email = (value: OptNull<string>) =>
  optionalValidation(value, v =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)
  )

export default {
  optionalValidation,
  required,
  minLength,
  maxLength,
  min,
  max,
  email
}
