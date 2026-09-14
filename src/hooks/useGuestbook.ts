import { useCallback, useEffect, useState } from 'react'
import type { Attendance } from '../data/wedding'
import { wedding } from '../data/wedding'

export type GuestbookEntry = {
  id: string
  name: string
  attendance: Attendance
  message: string
  createdAt: string
}

function readStored(): GuestbookEntry[] {
  try {
    const raw = localStorage.getItem(wedding.rsvp.storageKey)
    if (!raw) return []
    const parsed = JSON.parse(raw) as GuestbookEntry[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function useGuestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setEntries(readStored())
    setReady(true)
  }, [])

  const addEntry = useCallback((input: Omit<GuestbookEntry, 'id' | 'createdAt'>) => {
    const next: GuestbookEntry = {
      ...input,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    setEntries((prev) => {
      const updated = [next, ...prev]
      // TODO: ganti localStorage dengan Formspree / API sebelum undangan dibagikan secara luas.
      localStorage.setItem(wedding.rsvp.storageKey, JSON.stringify(updated))
      return updated
    })
    return next
  }, [])

  return { entries, addEntry, ready }
}
