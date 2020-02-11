import i18n, { Resource, ResourceLanguage } from 'i18next'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them)
const resources: Resource = {
  en: {
    translation: {
      hello: 'Hello world!',
      'Welcome to React': 'Welcome to React and react-i18next'
    }
  } as ResourceLanguage,
  pt: {
    translation: {
      hello: 'Olá mundo!',
      'Welcome to React': 'Benvindo ao React e react-i18next'
    }
  } as ResourceLanguage
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
