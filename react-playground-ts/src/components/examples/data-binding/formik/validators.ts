import * as yup from 'yup'

export default class Validators {
  static email = (v: OptNull<string>) =>
    Validators.required(v) && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)

  static required = <T>(v: OptNull<T>): v is T => v != null

  static signupSchema = () =>
    yup.object().shape({
      email: yup
        .string()
        .min(2)
        .max(50)
        .email()
        .required(),
      password: yup
        .string()
        .required()
        .min(2)
        .max(50)
    })
}
