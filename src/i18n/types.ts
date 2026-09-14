export const LOCALES = ['id', 'en', 'zh'] as const
export type Locale = (typeof LOCALES)[number]

export type EventCopy = {
  title: string
  subtitle: string
  time: string
  venue: string
  address: string
}

export type PersonCopy = {
  role: string
  parents: string
  bio: string
}

export type GalleryCopy = {
  alt: string
  caption: string
}

export type Copy = {
  meta: {
    title: string
    description: string
  }
  cover: {
    kicker: string
    openLabel: string
    defaultGuest: string
    guestPrefix: string
    dateNote: string
  }
  hero: {
    kicker: string
    poetic: string
    countdownLabel: string
    day: string
    hour: string
    minute: string
    second: string
    completed: string
  }
  verse: {
    text: string
    source: string
  }
  couple: {
    kicker: string
    title: string
    groom: PersonCopy
    bride: PersonCopy
  }
  events: {
    kicker: string
    title: string
    note: string
    maps: string
    akad: EventCopy
    resepsi: EventCopy
  }
  gallery: {
    kicker: string
    title: string
    close: string
    dialog: string
    items: GalleryCopy[]
  }
  rsvp: {
    kicker: string
    title: string
    intro: string
    name: string
    namePlaceholder: string
    attendance: string
    hadir: string
    tidakHadir: string
    ragu: string
    message: string
    messagePlaceholder: string
    submit: string
    demo: string
    errorName: string
    errorMessage: string
    success: string
    book: string
    loading: string
    empty: string
  }
  gift: {
    kicker: string
    title: string
    intro: string
    accountOf: string
    copy: string
    copied: string
    copyError: string
    banks: {
      bca: string
      mandiri: string
    }
  }
  footer: {
    thankYou: string
    closing: string
    musicCredit: string
  }
  music: {
    play: string
    pause: string
  }
  language: {
    label: string
  }
}
