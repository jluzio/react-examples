export default class Validators {
  static email = (v: string | null | undefined) =>
    Validators.required(v) && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)

  static required = <T>(v: T | null | undefined): v is T => v != null
}
