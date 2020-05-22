/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react'
import { Space } from 'antd'
import { LocaleContext } from './locale-context'

type FlagProps = { src: string; onClick: () => void }
const FlagButton: React.FC<FlagProps> = ({ src, onClick }: FlagProps) => (
  <img
    src={src}
    onClick={() => onClick()}
    alt=""
    style={{ height: '24px', width: '32px', cursor: 'pointer' }}
  />
)

const LocaleSelector: React.FC = () => {
  const { onLocaleChange } = useContext(LocaleContext)
  return (
    <Space direction="horizontal">
      <span>Select a language:</span>
      <FlagButton
        key="localeEn"
        src="https://image.flaticon.com/icons/svg/551/551953.svg"
        onClick={() => onLocaleChange('en')}
      />
      <FlagButton
        key="localePt"
        src="https://image.flaticon.com/icons/svg/551/551932.svg"
        onClick={() => onLocaleChange('pt')}
      />
    </Space>
  )
}

export default LocaleSelector
