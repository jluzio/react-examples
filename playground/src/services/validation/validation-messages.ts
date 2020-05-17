export const messages = {
  required: () => 'Required',
  min: (limit: number) => `Must be ${limit} or more`,
  max: (limit: number) => `Must be ${limit} or less`,
  minLength: (limit: number) => `Must be ${limit} characters or more`,
  maxLength: (limit: number) => `Must be ${limit} characters or less`,
  email: () => `Email`
}

export default messages
