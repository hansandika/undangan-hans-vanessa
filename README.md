# Undangan Pernikahan Hans & Vanessa

Mobile-first digital wedding invitation (undangan pernikahan digital) for **Hans Andika** and **Vanessa**, in a Chinese-Indonesian palette: cinnabar red, soft gold, ivory paper, and charcoal ink.

Languages: **Indonesian**, **English**, and **Chinese** (`ID / EN / 中`).

## Quick start

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

Personalized cover greeting:

```
http://localhost:5173/?to=Bapak%20dan%20Ibu%20Wijaya
```

Production build:

```bash
npm run build
npm run preview
```

## Edit content

| What | Where |
| --- | --- |
| Names, date, venues, parents, banks, maps, photos | `src/data/wedding.ts` |
| All guest-facing strings (id / en / zh) | `src/i18n/copy.ts` |
| Photos | `public/images/hans-vanessa-1.jpg` … `-5.jpg` |
| Background music | `public/music/bgm.mp3` |

Values wrapped in `[PLACEHOLDER: …]` are unfinished on purpose. Replace them before sharing the invitation:

- Ceremony date (example: **Sabtu, 13 Maret 2027**)
- Akad and resepsi venues + Google Maps URLs
- Parents’ names
- Chinese names
- Bank name / account name / account number
- Dress code

## Language

- Detects `navigator.language` and maps `id*` / `en*` / `zh*`
- Manual toggle **ID / EN / 中** writes an override to `localStorage` (`hans-vanessa-locale`)
- Default without a match is Indonesian

## RSVP guestbook

Wishes are stored in `localStorage` in this browser.

There is a **TODO** in `src/lib/guestbook.ts` to `POST /api/rsvp` once a backend exists.

## Music

Opening the cover starts audio. The floating control toggles play/pause.

Replace `public/music/bgm.mp3` with a royalty-free instrumental if you prefer. If the file cannot play, the site falls back to a generated pentatonic ambient bed (Web Audio).

## Stack

Vite + React + TypeScript + Tailwind CSS v4.
