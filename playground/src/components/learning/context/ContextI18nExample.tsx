import React from 'react'
import { Card } from 'antd'
import UserCreate from './UserCreate'
import LocaleSelector from './LocaleSelector'
import LocaleStore from './LocaleStore'

const ContextI18nExample: React.FC = () => {
  return (
    <LocaleStore>
      <Card>
        <LocaleSelector />
        <UserCreate />
      </Card>
    </LocaleStore>
  )
}

export default ContextI18nExample
