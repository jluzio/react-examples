import React, { useContext } from 'react'
import { LocaleContext } from './locale-context'
import Field from './Field'
import Button from './Button'
import messages from './messages'

const UserCreate: React.FC = () => {
  const { locale } = useContext(LocaleContext)
  const { username } = messages[locale]
  return (
    <div>
      <label>{username}</label>
      <Field />
      <Button />
    </div>
  )
}

export default UserCreate
