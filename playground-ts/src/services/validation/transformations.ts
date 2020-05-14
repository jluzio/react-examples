export const emptyStringToUndefined = (value: OptNull<string>) =>
  value === '' ? undefined : value

export default {
  emptyStringToUndefined
}
