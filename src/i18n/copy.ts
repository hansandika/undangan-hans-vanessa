import type { Locale } from "../data/wedding";

export type Copy = {
  documentTitle: string;
  cover: {
    kicker: string;
    open: string;
    to: string;
    dearGuest: string;
    dearFallback: string;
    invite: string;
    scrollHint: string;
  };
  hero: {
    kicker: string;
    weAreGettingMarried: string;
    blessing: string;
  };
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    ended: string;
  };
  couple: {
    title: string;
    groom: string;
    bride: string;
    sonOf: string;
    daughterOf: string;
    and: string;
  };
  events: {
    title: string;
    akad: string;
    resepsi: string;
    map: string;
    mapPlaceholder: string;
    dressCode: string;
  };
  gallery: {
    title: string;
    close: string;
  };
  rsvp: {
    title: string;
    subtitle: string;
    name: string;
    attending: string;
    yes: string;
    no: string;
    maybe: string;
    guests: string;
    message: string;
    submit: string;
    success: string;
    wishes: string;
    empty: string;
    nameRequired: string;
  };
  gift: {
    title: string;
    subtitle: string;
    copy: string;
    copied: string;
    accountName: string;
    accountNumber: string;
  };
  music: {
    play: string;
    pause: string;
  };
  lang: {
    id: string;
    en: string;
    zh: string;
  };
  footer: {
    thanks: string;
    closing: string;
    madeWith: string;
  };
};

export const copy: Record<Locale, Copy> = {
  id: {
    documentTitle: "Hans & Vanessa — Undangan Pernikahan",
    cover: {
      kicker: "The Wedding of",
      open: "Buka Undangan",
      to: "Kepada Yth.",
      dearGuest: "Kepada Yth. {name}",
      dearFallback: "Kepada Yth. Bapak/Ibu/Saudara/i",
      invite:
        "Dengan penuh sukacita kami mengundang Anda untuk hadir di hari bahagia kami.",
      scrollHint: "Ketuk untuk membuka",
    },
    hero: {
      kicker: "Save the Date",
      weAreGettingMarried: "Kami akan menikah",
      blessing: "Dua jiwa, satu janji — 百年好合",
    },
    countdown: {
      days: "Hari",
      hours: "Jam",
      minutes: "Menit",
      seconds: "Detik",
      ended: "Hari yang dinanti telah tiba.",
    },
    couple: {
      title: "Mempelai",
      groom: "Mempelai Pria",
      bride: "Mempelai Wanita",
      sonOf: "Putra dari",
      daughterOf: "Putri dari",
      and: "dan",
    },
    events: {
      title: "Waktu & Tempat",
      akad: "Akad Nikah",
      resepsi: "Resepsi",
      map: "Lihat Peta",
      mapPlaceholder:
        "Tautan peta bersifat placeholder. Ubah `mapsUrl` di src/data/wedding.ts.",
      dressCode: "Dress code",
    },
    gallery: {
      title: "Galeri",
      close: "Tutup",
    },
    rsvp: {
      title: "Ucapan & RSVP",
      subtitle:
        "Kehadiran dan doa restu Anda adalah hadiah terindah bagi kami.",
      name: "Nama",
      attending: "Kehadiran",
      yes: "Hadir",
      no: "Tidak dapat hadir",
      maybe: "Belum pasti",
      guests: "Jumlah tamu",
      message: "Ucapan",
      submit: "Kirim Ucapan",
      success: "Terima kasih atas ucapannya.",
      wishes: "Ucapan tamu",
      empty: "Jadilah yang pertama mengirim ucapan.",
      nameRequired: "Mohon isi nama Anda.",
    },
    gift: {
      title: "Tanda Kasih",
      subtitle:
        "Doa restu Anda sudah lebih dari cukup. Jika berkenan menyampaikan tanda kasih:",
      copy: "Salin",
      copied: "Tersalin",
      accountName: "a.n.",
      accountNumber: "No. rekening",
    },
    music: {
      play: "Putar musik",
      pause: "Hentikan musik",
    },
    lang: {
      id: "ID",
      en: "EN",
      zh: "中",
    },
    footer: {
      thanks:
        "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",
      closing: "Sampai jumpa di hari bahagia kami.",
      madeWith: "Hans & Vanessa",
    },
  },
  en: {
    documentTitle: "Hans & Vanessa — Wedding Invitation",
    cover: {
      kicker: "The Wedding of",
      open: "Open Invitation",
      to: "Dear",
      dearGuest: "Dear {name}",
      dearFallback: "Dear family and friends",
      invite:
        "With joy we invite you to witness and celebrate our wedding day.",
      scrollHint: "Tap to open",
    },
    hero: {
      kicker: "Save the Date",
      weAreGettingMarried: "We are getting married",
      blessing: "Two souls, one promise — 百年好合",
    },
    countdown: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      ended: "The day we have been waiting for is here.",
    },
    couple: {
      title: "The Couple",
      groom: "The Groom",
      bride: "The Bride",
      sonOf: "Son of",
      daughterOf: "Daughter of",
      and: "and",
    },
    events: {
      title: "When & Where",
      akad: "Wedding Ceremony",
      resepsi: "Reception",
      map: "View Map",
      mapPlaceholder:
        "Map links are placeholders. Update `mapsUrl` in src/data/wedding.ts.",
      dressCode: "Dress code",
    },
    gallery: {
      title: "Gallery",
      close: "Close",
    },
    rsvp: {
      title: "Wishes & RSVP",
      subtitle: "Your presence and blessing are the greatest gift of all.",
      name: "Name",
      attending: "Attendance",
      yes: "Joyfully attending",
      no: "Unable to attend",
      maybe: "Not sure yet",
      guests: "Number of guests",
      message: "Your message",
      submit: "Send Wish",
      success: "Thank you for your kind words.",
      wishes: "Guestbook",
      empty: "Be the first to leave a wish.",
      nameRequired: "Please enter your name.",
    },
    gift: {
      title: "Wedding Gift",
      subtitle:
        "Your blessing is more than enough. Should you wish to send a gift:",
      copy: "Copy",
      copied: "Copied",
      accountName: "a.n.",
      accountNumber: "Account no.",
    },
    music: {
      play: "Play music",
      pause: "Pause music",
    },
    lang: {
      id: "ID",
      en: "EN",
      zh: "中",
    },
    footer: {
      thanks:
        "It would be an honour and a joy to have you with us as we begin this new chapter.",
      closing: "We look forward to celebrating with you.",
      madeWith: "Hans & Vanessa",
    },
  },
  zh: {
    documentTitle: "Hans & Vanessa — 婚礼邀请函",
    cover: {
      kicker: "婚礼邀请函",
      open: "打开请柬",
      to: "敬致",
      dearGuest: "敬致 {name}",
      dearFallback: "敬致各位至亲好友",
      invite: "诚挚邀请您见证我们的幸福时刻，共同分享这份喜悦。",
      scrollHint: "点击打开",
    },
    hero: {
      kicker: "敬请期待",
      weAreGettingMarried: "我们结婚啦",
      blessing: "百年好合 · 永结同心",
    },
    countdown: {
      days: "天",
      hours: "时",
      minutes: "分",
      seconds: "秒",
      ended: "期待已久的大喜之日已至。",
    },
    couple: {
      title: "新郎新娘",
      groom: "新郎",
      bride: "新娘",
      sonOf: "公子",
      daughterOf: "千金",
      and: "与",
    },
    events: {
      title: "时间与地点",
      akad: "婚礼仪式",
      resepsi: "喜宴",
      map: "查看地图",
      mapPlaceholder: "地图链接为占位符。请在 src/data/wedding.ts 中更新 `mapsUrl`。",
      dressCode: "着装",
    },
    gallery: {
      title: "相册",
      close: "关闭",
    },
    rsvp: {
      title: "宾客回复",
      subtitle: "您的光临与祝福，是我们最珍视的礼物。",
      name: "姓名",
      attending: "出席",
      yes: "出席",
      no: "无法出席",
      maybe: "待定",
      guests: "人数",
      message: "祝福语",
      submit: "送上祝福",
      success: "谢谢您的祝福。",
      wishes: "宾客留言",
      empty: "来写下第一条祝福吧。",
      nameRequired: "请填写您的姓名。",
    },
    gift: {
      title: "随礼",
      subtitle: "您的祝福已是最好的礼物。若方便随礼，可通过以下账户：",
      copy: "复制",
      copied: "已复制",
      accountName: "户名",
      accountNumber: "账号",
    },
    music: {
      play: "播放音乐",
      pause: "暂停音乐",
    },
    lang: {
      id: "ID",
      en: "EN",
      zh: "中",
    },
    footer: {
      thanks: "恭请光临，与我们一同见证这幸福的时刻。",
      closing: "我们在大喜之日恭候您的到来。",
      madeWith: "Hans & Vanessa",
    },
  },
};

export function greet(locale: Locale, guestName?: string): string {
  const cover = copy[locale].cover;
  if (guestName) return cover.dearGuest.replace("{name}", guestName);
  return cover.dearFallback;
}
