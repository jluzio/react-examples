import React from 'react'

type Props = {
  error?: Error
  onErrorTrigger: () => void
}

const ErrorThrower: React.FC<Props> = ({ error, onErrorTrigger }: Props) => {
  if (error) {
    onErrorTrigger()
    throw error
  }
  return null
}

export default ErrorThrower
