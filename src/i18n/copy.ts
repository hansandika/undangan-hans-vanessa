import type { Copy, Locale } from './types'

const id: Copy = {
  meta: {
    title: 'Undangan Pernikahan Hans & Vanessa',
    description:
      'Dengan penuh sukacita, Hans & Vanessa mengundang Anda untuk hadir di hari bahagia kami.',
  },
  cover: {
    kicker: 'Undangan Pernikahan',
    openLabel: 'Buka Undangan',
    defaultGuest: 'Bapak/Ibu/Saudara/i',
    guestPrefix: 'Kepada Yth.',
    dateNote: 'Tanggal placeholder — ganti di src/data/wedding.ts',
  },
  hero: {
    kicker: 'The Wedding of',
    poetic:
      'Dengan penuh sukacita kami mengundang Anda untuk menyaksikan janji suci kami, dan merayakan kasih yang telah menumbuhkan kami berdua.',
    countdownLabel: 'Menuju hari bahagia',
    day: 'Hari',
    hour: 'Jam',
    minute: 'Menit',
    second: 'Detik',
    completed: 'Hari istimewa telah tiba.',
  },
  verse: {
    text: '“Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan menyempurnakan.”',
    source: 'Kolose 3:14 — ganti ayat/doa di src/i18n/copy.ts bila perlu',
  },
  couple: {
    kicker: 'Mempelai',
    title: 'Kami yang berbahagia',
    groom: {
      role: 'Mempelai Pria',
      parents: 'Putra dari Bapak [Nama Ayah] & Ibu [Nama Ibu] — ganti di config',
      bio: 'Seorang pria yang sederhana, setia, dan selalu ingin membuat hari-hari bersama menjadi lebih hangat. (Ganti bio Hans di src/i18n/copy.ts)',
    },
    bride: {
      role: 'Mempelai Wanita',
      parents: 'Putri dari Bapak [Nama Ayah] & Ibu [Nama Ibu] — ganti di config',
      bio: 'Perempuan yang lembut, ceria, dan penuh perhatian — cahaya yang menuntun langkah kami berdua. (Ganti bio Vanessa di src/i18n/copy.ts)',
    },
  },
  events: {
    kicker: 'Save the Date',
    title: 'Acara',
    note: 'Mohon sesuaikan tanggal, jam, dan lokasi sebelum undangan dibagikan.',
    maps: 'Lihat Lokasi',
    akad: {
      title: 'Akad Nikah',
      subtitle: 'Ikatan suci di hadapan yang terkasih',
      time: '09.00 WIB — ganti di config',
      venue: 'Gedung / Venue TBD — ganti di config',
      address: 'Alamat lengkap akad belum diisi. Contoh: Jl. Merdeka No. 1, Jakarta',
    },
    resepsi: {
      title: 'Resepsi',
      subtitle: 'Perjamuan syukur bersama keluarga',
      time: '18.00 WIB — ganti di config',
      venue: 'Gedung / Venue TBD — ganti di config',
      address: 'Alamat lengkap resepsi belum diisi. Contoh: Jl. Kenanga No. 8, Jakarta',
    },
  },
  gallery: {
    kicker: 'Galeri',
    title: 'Momen kami',
    close: 'Tutup',
    dialog: 'Foto galeri',
    items: [
      { alt: 'Hans dan Vanessa di cermin lengkung', caption: 'Sebuah bingkai, dua hati' },
      { alt: 'Potret film vintage Hans dan Vanessa', caption: 'Cahaya yang lembut' },
      { alt: "Hans dan Vanessa di scarlett's", caption: 'Malam yang tenang' },
      { alt: 'Selfie di mal', caption: 'Senyum yang pulang' },
      { alt: 'Selfie booth yang playful', caption: 'Lelucon kecil kami' },
    ],
  },
  rsvp: {
    kicker: 'RSVP & Ucapan',
    title: 'Konfirmasi kehadiran',
    intro:
      'Kehadiran dan doa restu Anda adalah hadiah terindah bagi kami. Mohon konfirmasi kehadiran melalui formulir ini.',
    name: 'Nama',
    namePlaceholder: 'Nama lengkap',
    attendance: 'Kehadiran',
    hadir: 'Hadir',
    tidakHadir: 'Tidak Hadir',
    ragu: 'Ragu',
    message: 'Ucapan & doa',
    messagePlaceholder: 'Tuliskan doa dan ucapan bahagia...',
    submit: 'Kirim Ucapan',
    demo: 'Demo: ucapan disimpan di peramban ini (localStorage). Ganti dengan Formspree/API sebelum dibagikan.',
    errorName: 'Mohon isi nama Anda.',
    errorMessage: 'Mohon tuliskan ucapan atau doa.',
    success: 'Terima kasih, ucapan Anda sudah tersimpan.',
    book: 'Buku tamu',
    loading: 'Memuat ucapan...',
    empty: 'Belum ada ucapan. Jadilah yang pertama memberikan doa restu.',
  },
  gift: {
    kicker: 'Tanda Kasih',
    title: 'Angpao digital',
    intro:
      'Doa restu Anda sudah lebih dari cukup. Apabila berkenan memberikan tanda kasih, kami sediakan informasi berikut.',
    accountOf: 'a.n.',
    copy: 'Salin Nomor',
    copied: 'Tersalin',
    copyError: 'Tidak bisa menyalin otomatis. Silakan salin nomor secara manual.',
    banks: {
      bca: 'BCA — ganti di config',
      mandiri: 'Mandiri — ganti di config',
    },
  },
  footer: {
    thankYou:
      'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.',
    closing: 'Dengan kasih,',
    musicCredit: 'Musik: Canon in D Major — Kevin MacLeod (incompetech.com)',
  },
  music: {
    play: 'Putar musik',
    pause: 'Matikan musik',
  },
  language: {
    label: 'Bahasa',
  },
}

const en: Copy = {
  meta: {
    title: 'The Wedding of Hans & Vanessa',
    description: 'With joy, Hans & Vanessa invite you to celebrate their wedding day.',
  },
  cover: {
    kicker: 'Wedding Invitation',
    openLabel: 'Open Invitation',
    defaultGuest: 'Dear Guest',
    guestPrefix: 'Warmly invited',
    dateNote: 'Placeholder date — edit in src/data/wedding.ts',
  },
  hero: {
    kicker: 'The Wedding of',
    poetic:
      'With glad hearts we invite you to witness our vows, and to celebrate the love that has grown between us.',
    countdownLabel: 'Until our wedding day',
    day: 'Days',
    hour: 'Hours',
    minute: 'Mins',
    second: 'Secs',
    completed: 'The day has arrived.',
  },
  verse: {
    text: '“And over all these virtues put on love, which binds them all together in perfect unity.”',
    source: 'Colossians 3:14 — edit verse in src/i18n/copy.ts if needed',
  },
  couple: {
    kicker: 'The Couple',
    title: 'Together in joy',
    groom: {
      role: 'The Groom',
      parents: 'Son of Mr. [Father] & Mrs. [Mother] — edit in config',
      bio: 'A steady, faithful man who wants every shared day to feel a little warmer. (Edit Hans’s bio in src/i18n/copy.ts)',
    },
    bride: {
      role: 'The Bride',
      parents: 'Daughter of Mr. [Father] & Mrs. [Mother] — edit in config',
      bio: 'Gentle, bright, and full of care — the light that guides our steps together. (Edit Vanessa’s bio in src/i18n/copy.ts)',
    },
  },
  events: {
    kicker: 'Save the Date',
    title: 'The Celebration',
    note: 'Please update the date, time, and venues before sharing this invitation.',
    maps: 'View Map',
    akad: {
      title: 'Wedding Ceremony',
      subtitle: 'Our vows before those we love',
      time: '09.00 — edit in config',
      venue: 'Venue TBD — edit in config',
      address: 'Ceremony address not set yet. Example: Jl. Merdeka No. 1, Jakarta',
    },
    resepsi: {
      title: 'Reception',
      subtitle: 'A banquet of thanks with family',
      time: '18.00 — edit in config',
      venue: 'Venue TBD — edit in config',
      address: 'Reception address not set yet. Example: Jl. Kenanga No. 8, Jakarta',
    },
  },
  gallery: {
    kicker: 'Gallery',
    title: 'Our moments',
    close: 'Close',
    dialog: 'Gallery photo',
    items: [
      { alt: 'Hans and Vanessa in an arched mirror', caption: 'One frame, two hearts' },
      { alt: 'Vintage film portrait of Hans and Vanessa', caption: 'Soft light' },
      { alt: "Hans and Vanessa at scarlett's", caption: 'A quiet evening' },
      { alt: 'Mall selfie', caption: 'A smile that comes home' },
      { alt: 'Playful booth selfie', caption: 'Our little joke' },
    ],
  },
  rsvp: {
    kicker: 'RSVP & Wishes',
    title: 'Kindly respond',
    intro: 'Your presence and blessing are the greatest gift. Please let us know if you can join us.',
    name: 'Name',
    namePlaceholder: 'Your full name',
    attendance: 'Attendance',
    hadir: 'Attending',
    tidakHadir: 'Regretfully not',
    ragu: 'Unsure',
    message: 'Wishes',
    messagePlaceholder: 'Share a blessing or a few warm words...',
    submit: 'Send Wishes',
    demo: 'Demo: messages are saved in this browser (localStorage). Replace with Formspree/API before sharing widely.',
    errorName: 'Please enter your name.',
    errorMessage: 'Please write a short message.',
    success: 'Thank you — your wishes have been saved.',
    book: 'Guestbook',
    loading: 'Loading messages...',
    empty: 'No messages yet. Be the first to leave a blessing.',
  },
  gift: {
    kicker: 'Wedding Gift',
    title: 'A token of joy',
    intro:
      'Your blessing is more than enough. Should you wish to send a gift, our details are below.',
    accountOf: 'a/n',
    copy: 'Copy Number',
    copied: 'Copied',
    copyError: 'Could not copy automatically. Please copy the number by hand.',
    banks: {
      bca: 'BCA — edit in config',
      mandiri: 'Mandiri — edit in config',
    },
  },
  footer: {
    thankYou:
      'It will be our honour and joy if you are able to attend and offer your blessing.',
    closing: 'With love,',
    musicCredit: 'Music: Canon in D Major — Kevin MacLeod (incompetech.com)',
  },
  music: {
    play: 'Play music',
    pause: 'Pause music',
  },
  language: {
    label: 'Language',
  },
}

const zh: Copy = {
  meta: {
    title: 'Hans 与 Vanessa 婚礼邀请',
    description: '诚挚邀请您莅临 Hans 与 Vanessa 的婚礼，共享喜悦。',
  },
  cover: {
    kicker: '婚礼邀请',
    openLabel: '打开请柬',
    defaultGuest: '尊敬的宾客',
    guestPrefix: '敬呈',
    dateNote: '日期为占位，请在 src/data/wedding.ts 中修改',
  },
  hero: {
    kicker: '婚礼志喜',
    poetic: '谨以至诚之心，邀请您见证我们的盟约，一同庆贺这份彼此成就的深情。',
    countdownLabel: '距喜日还有',
    day: '天',
    hour: '时',
    minute: '分',
    second: '秒',
    completed: '良辰已至。',
  },
  verse: {
    text: '“在这一切之外，要存着爱心；爱心就是联络全德的。”',
    source: '歌罗西书 3:14 — 如需更换经文或贺词，请编辑 src/i18n/copy.ts',
  },
  couple: {
    kicker: '新人',
    title: '百年好合',
    groom: {
      role: '新郎',
      parents: '公子，[父亲姓名] 与 [母亲姓名] 之子 — 请在配置中修改',
      bio: '沉稳而专一，愿与所爱把寻常日子过得更温暖。（请在 src/i18n/copy.ts 修改 Hans 简介）',
    },
    bride: {
      role: '新娘',
      parents: '千金，[父亲姓名] 与 [母亲姓名] 之女 — 请在配置中修改',
      bio: '温柔明朗，体贴入微，是我们并肩前行的光。（请在 src/i18n/copy.ts 修改 Vanessa 简介）',
    },
  },
  events: {
    kicker: '恭请莅临',
    title: '婚礼日程',
    note: '分享请柬前，请先确认日期、时间与场地。',
    maps: '查看地图',
    akad: {
      title: '结婚典礼',
      subtitle: '在至亲面前许下盟约',
      time: '09:00 — 请在配置中修改',
      venue: '场地待定 — 请在配置中修改',
      address: '典礼地址尚未填写。示例：雅加达 Merdeka 大街 1 号',
    },
    resepsi: {
      title: '喜宴',
      subtitle: '与家人亲友共享答谢宴',
      time: '18:00 — 请在配置中修改',
      venue: '场地待定 — 请在配置中修改',
      address: '喜宴地址尚未填写。示例：雅加达 Kenanga 大街 8 号',
    },
  },
  gallery: {
    kicker: '相册',
    title: '我们的时光',
    close: '关闭',
    dialog: '相册照片',
    items: [
      { alt: 'Hans 与 Vanessa 在拱形镜前', caption: '一框两心' },
      { alt: 'Hans 与 Vanessa 的胶片肖像', caption: '柔光' },
      { alt: 'Hans 与 Vanessa 在 scarlett’s', caption: '静夜' },
      { alt: '商场自拍', caption: '归来的笑意' },
      { alt: '趣味自拍亭', caption: '我们的小玩笑' },
    ],
  },
  rsvp: {
    kicker: '敬请回复',
    title: '出席确认',
    intro: '您的莅临与祝福，是我们最珍视的礼物。敬请在此确认能否出席。',
    name: '姓名',
    namePlaceholder: '您的姓名',
    attendance: '是否出席',
    hadir: '出席',
    tidakHadir: '抱歉无法出席',
    ragu: '待定',
    message: '祝福',
    messagePlaceholder: '请留下您的祝福...',
    submit: '送出祝福',
    demo: '演示：祝福保存在本浏览器（localStorage）。正式分享前请改为 Formspree/API。',
    errorName: '请填写您的姓名。',
    errorMessage: '请写下祝福或寄语。',
    success: '谢谢，您的祝福已保存。',
    book: '宾客留言',
    loading: '正在载入...',
    empty: '尚无留言。欢迎您写下第一句祝福。',
  },
  gift: {
    kicker: '礼金',
    title: '红包心意',
    intro: '您的祝福已足够丰厚。若愿致赠心意，账户信息如下。',
    accountOf: '户名',
    copy: '复制账号',
    copied: '已复制',
    copyError: '无法自动复制，请手动抄写账号。',
    banks: {
      bca: 'BCA — 请在配置中修改',
      mandiri: 'Mandiri — 请在配置中修改',
    },
  },
  footer: {
    thankYou: '若蒙光临并赐福，将是我们莫大的荣幸与喜悦。',
    closing: '敬上',
    musicCredit: '音乐：D大调卡农 — Kevin MacLeod（incompetech.com）',
  },
  music: {
    play: '播放音乐',
    pause: '暂停音乐',
  },
  language: {
    label: '语言',
  },
}

export const dictionaries: Record<Locale, Copy> = { id, en, zh }

export const localeLabels: Record<Locale, string> = {
  id: 'ID',
  en: 'EN',
  zh: '中',
}
