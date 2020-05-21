import React, { useContext } from 'react'
import { LocaleContext } from './locale-context'
import { messages } from './messages'

const Button: React.FC = () => {
  const { locale } = useContext(LocaleContext)
  const { submit } = messages[locale]
  return (
    <button type="button" className="ant-btn ant-btn-primary">
      {submit}
    </button>
  )
}

export default Button
