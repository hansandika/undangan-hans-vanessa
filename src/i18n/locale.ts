import { wedding } from '../data/wedding'
import { LOCALES, type Locale } from './types'

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'id' || value === 'en' || value === 'zh'
}

export function detectLocale(): Locale {
  try {
    const stored = localStorage.getItem(wedding.rsvp.localeKey)
    if (isLocale(stored)) return stored
  } catch {
    /* ignore */
  }

  const language = (navigator.language || navigator.languages?.[0] || 'id').toLowerCase()
  if (language.startsWith('id')) return 'id'
  if (language.startsWith('zh')) return 'zh'
  if (language.startsWith('en')) return 'en'
  return 'id'
}

export function persistLocale(locale: Locale) {
  try {
    localStorage.setItem(wedding.rsvp.localeKey, locale)
  } catch {
    /* ignore */
  }
}

export function dateLocale(locale: Locale): string {
  if (locale === 'id') return 'id-ID'
  if (locale === 'zh') return 'zh-CN'
  return 'en-GB'
}

export function formatWeddingDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(dateLocale(locale), {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))
}

export { LOCALES }
