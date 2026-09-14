# Undangan Pernikahan Hans & Vanessa

Undangan pernikahan digital (satu halaman, mobile-first) untuk Hans & Vanessa. Estetika pernikahan Tionghoa–Indonesia: merah cinnabar, emas, kertas gading, dan motif 囍. Bahasa mengikuti locale perangkat, dengan sakelar ID / EN / 中.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://127.0.0.1:4721`. Untuk pratinjau produksi:

```bash
npm run build
npm run preview
```

Nama tamu di URL (berlaku di semua bahasa):

```
http://127.0.0.1:4721/?to=Keluarga%20Andi
```

## Mengedit konten

Fakta yang sama di semua bahasa (nama, foto, tanggal ISO, rekening, tautan peta):

```
src/data/wedding.ts
```

Semua teks yang tampil ke tamu (ID / EN / ZH), termasuk bio, venue, dan ucapan:

```
src/i18n/copy.ts
```

Bahasa:

- Deteksi `navigator.language`: `id*` → Indonesia, `en*` → English, `zh*` → 简体中文
- Pilihan tamu disimpan di `localStorage` (`hans-vanessa-locale`)
- Sakelar ID / EN / 中 ada di sampul dan di halaman undangan

Foto: `public/images/hans-vanessa-1.jpg` … `5.jpg`.

## RSVP

Formulir RSVP menyimpan data di `localStorage` peramban tamu (demo). Ada komentar `TODO` untuk Formspree/API.

## Musik

Setelah undangan dibuka: *Canon in D Major* — Kevin MacLeod ([incompetech.com](https://incompetech.com)), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Ganti `public/music/wedding.mp3` atau `music.src` di config.

## Stack

Vite + React + TypeScript + Tailwind CSS. Tidak ada backend.
