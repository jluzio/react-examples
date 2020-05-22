import React from 'react'
import { Locales } from './locales'

export type LocaleData = {
  locale: Locales
  onLocaleChange: (locale: Locales) => void
}

export const LocaleContext = React.createContext<LocaleData>({
  locale: 'en',
  onLocaleChange: () => {}
})
LocaleContext.displayName = 'I18nContext'
