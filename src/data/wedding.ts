export type Attendance = 'hadir' | 'tidak-hadir' | 'ragu'

export const wedding = {
  couple: {
    displayNames: 'Hans & Vanessa',
    groom: {
      name: 'Hans Andika',
      shortName: 'Hans',
      photo: '/images/hans-vanessa-5.jpg',
      photoPosition: 'center 20%',
    },
    bride: {
      name: 'Vanessa',
      shortName: 'Vanessa',
      photo: '/images/hans-vanessa-4.jpg',
      photoPosition: 'center 30%',
    },
  },

  /** ISO datetime used by the countdown and formatted dates. Edit this first. */
  weddingDate: '2027-03-13T09:00:00+07:00',

  cover: {
    photo: '/images/hans-vanessa-1.jpg',
  },

  hero: {
    photo: '/images/hans-vanessa-1.jpg',
  },

  events: [
    {
      id: 'akad' as const,
      mapsUrl: 'https://maps.google.com/?q=Jakarta',
    },
    {
      id: 'resepsi' as const,
      mapsUrl: 'https://maps.google.com/?q=Jakarta',
    },
  ],

  gallery: [
    '/images/hans-vanessa-1.jpg',
    '/images/hans-vanessa-2.jpg',
    '/images/hans-vanessa-3.jpg',
    '/images/hans-vanessa-4.jpg',
    '/images/hans-vanessa-5.jpg',
  ],

  rsvp: {
    storageKey: 'hans-vanessa-guestbook-v1',
    localeKey: 'hans-vanessa-locale',
    // TODO: ganti penyimpanan localStorage dengan Formspree / API sebelum undangan dibagikan secara luas.
  },

  gift: {
    accounts: [
      { bankKey: 'bca' as const, name: 'Hans Andika', number: '1234567890' },
      { bankKey: 'mandiri' as const, name: 'Vanessa', number: '0987654321' },
    ],
  },

  music: {
    src: '/music/wedding.mp3',
  },
} as const

export function getGuestName(fallback: string): string {
  if (typeof window === 'undefined') return fallback
  const value = new URLSearchParams(window.location.search).get('to')
  const trimmed = value?.trim()
  return trimmed && trimmed.length > 0 ? trimmed : fallback
}
