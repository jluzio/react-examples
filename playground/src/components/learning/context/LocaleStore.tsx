import React, { useState, PropsWithChildren } from 'react'
import { LocaleContext, LocaleData } from './locale-context'
import { Locales } from './locales'

type Props = PropsWithChildren<{}>

const LocaleStore: React.FC<Props> = ({ children }: Props) => {
  const [locale, setLocale] = useState<Locales>('en')
  const localeData: LocaleData = {
    locale,
    onLocaleChange: setLocale
  }
  return (
    <LocaleContext.Provider value={localeData}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleStore
