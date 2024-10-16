
import en from './locales/en.json'
import es from './locales/es.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'es',
    messages: {
      en,
      es
    }
  }))
  