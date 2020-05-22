import React, { useContext, useState } from 'react'
import { Descriptions, Space, Button } from 'antd'

const LocaleContext = React.createContext('en')

const DisplayLocale: React.FC = () => {
  const locale = useContext(LocaleContext)
  return (
    <Descriptions>
      <Descriptions.Item label="Locale">{locale}</Descriptions.Item>
    </Descriptions>
  )
}

const UseContextHookExample: React.FC = () => {
  const [locale, setLocale] = useState('en')
  return (
    <>
      <LocaleContext.Provider value={locale}>
        <DisplayLocale />
      </LocaleContext.Provider>
      <LocaleContext.Provider value="pt">
        <DisplayLocale />
      </LocaleContext.Provider>
      <Space direction="horizontal">
        <Button onClick={() => setLocale('en')}>EN</Button>
        <Button onClick={() => setLocale('pt')}>PT</Button>
      </Space>
    </>
  )
}

export default UseContextHookExample
