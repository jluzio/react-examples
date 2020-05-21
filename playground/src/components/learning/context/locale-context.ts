import React from 'react'
import { Locales } from './locales'

export type LocaleData = {
  locale: Locales
}

export const LocaleContext = React.createContext<LocaleData>({
  locale: 'en'
})
LocaleContext.displayName = 'I18nContext'
