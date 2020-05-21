import { Locales } from './locales'

type MessageKey = 'username' | 'submit'
export type LocalizedMessages = Record<MessageKey, string>

export const messagesPt: LocalizedMessages = {
  username: 'Nome',
  submit: 'Submeter'
}
export const messagesEn: LocalizedMessages = {
  username: 'Name',
  submit: 'Submit'
}

export const messages: Record<Locales, LocalizedMessages> = {
  pt: messagesPt,
  en: messagesEn
}

export default messages
