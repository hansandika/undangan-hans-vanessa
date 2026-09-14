export const GUESTBOOK_KEY = "hans-vanessa-guestbook";

export type Attendance = "yes" | "no" | "maybe";

export type GuestbookEntry = {
  id: string;
  name: string;
  attending: Attendance;
  guests: number;
  message: string;
  createdAt: string;
};

export function loadGuestbook(): GuestbookEntry[] {
  try {
    const raw = localStorage.getItem(GUESTBOOK_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as GuestbookEntry[];
  } catch {
    return [];
  }
}

export function saveGuestbook(entries: GuestbookEntry[]): void {
  localStorage.setItem(GUESTBOOK_KEY, JSON.stringify(entries));
}

/**
 * TODO: POST /api/rsvp when a backend is ready.
 * Until then, wishes persist only in this browser via localStorage.
 */
export async function submitRsvp(
  entry: Omit<GuestbookEntry, "id" | "createdAt">,
): Promise<GuestbookEntry> {
  const full: GuestbookEntry = {
    ...entry,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const existing = loadGuestbook();
  saveGuestbook([full, ...existing]);

  // TODO: replace localStorage with API, e.g.
  // await fetch("/api/rsvp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(full) })

  return full;
}
