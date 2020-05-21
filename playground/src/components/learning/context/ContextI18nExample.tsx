/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'
import { Card, Space } from 'antd'
import { LocaleContext, LocaleData } from './locale-context'
import UserCreate from './UserCreate'

type FlagProps = { src: string; onClick: () => void }
const FlagButton: React.FC<FlagProps> = ({ src, onClick }: FlagProps) => (
  <img src={src} onClick={() => onClick()} alt="" style={{ height: '32px' }} />
)

const ContextI18nExample: React.FC = () => {
  const [localeData, setLocaleData] = useState<LocaleData>({ locale: 'en' })
  return (
    <Card>
      <Space direction="horizontal">
        <span>Select a language:</span>
        <FlagButton
          key="localeEn"
          src="https://image.flaticon.com/icons/svg/551/551953.svg"
          onClick={() => setLocaleData({ locale: 'en' })}
        />
        <FlagButton
          key="localePt"
          src="https://image.flaticon.com/icons/svg/551/551932.svg"
          onClick={() => setLocaleData({ locale: 'pt' })}
        />
      </Space>
      <LocaleContext.Provider value={localeData}>
        <UserCreate />
      </LocaleContext.Provider>
      <LocaleContext.Provider value={{ locale: 'en' }}>
        <UserCreate />
      </LocaleContext.Provider>
    </Card>
  )
}

export default ContextI18nExample
