/**
 * Wedding facts and placeholders.
 *
 * Edit this file to update names, dates, venues, parents, bank details, photos, and maps.
 * Guest-facing UI strings (ID / EN / 中) live in `src/i18n/copy.ts`.
 *
 * Values wrapped in [PLACEHOLDER: ...] are intentionally unfinished — replace them
 * before sending the invitation.
 */

export const wedding = {
  couple: {
    groom: {
      givenName: "Hans",
      familyName: "Andika",
      fullName: "Hans Andika",
      /** [PLACEHOLDER] Chinese name of the groom */
      nameZh: "[PLACEHOLDER: 新郎中文名]",
      parents: {
        /** [PLACEHOLDER] */
        father: "[PLACEHOLDER: Nama ayah mempelai pria]",
        /** [PLACEHOLDER] */
        mother: "[PLACEHOLDER: Nama ibu mempelai pria]",
      },
    },
    bride: {
      givenName: "Vanessa",
      familyName: "",
      fullName: "Vanessa",
      /** [PLACEHOLDER] Chinese name of the bride */
      nameZh: "[PLACEHOLDER: 新娘中文名]",
      parents: {
        /** [PLACEHOLDER] */
        father: "[PLACEHOLDER: Nama ayah mempelai wanita]",
        /** [PLACEHOLDER] */
        mother: "[PLACEHOLDER: Nama ibu mempelai wanita]",
      },
    },
    and: "&",
    hashtag: "#HansAndVanessa",
  },

  /**
   * [PLACEHOLDER] Ceremony date — example Saturday 13 March 2027.
   * ISO is used for the countdown (WIB, UTC+7).
   */
  date: {
    iso: "2027-03-13T10:00:00+07:00",
    display: {
      id: "Sabtu, 13 Maret 2027",
      en: "Saturday, 13 March 2027",
      zh: "2027年3月13日 星期六",
    },
    short: {
      id: "13.03.2027",
      en: "13.03.2027",
      zh: "2027.03.13",
    },
  },

  events: {
    /**
     * [PLACEHOLDER] Rename if your ceremony is not an akad
     * (e.g. pemberkatan / tea ceremony). Labels are in copy.ts.
     */
    akad: {
      time: {
        id: "10.00 WIB",
        en: "10:00 AM (WIB)",
        zh: "上午 10:00（西印尼时间）",
      },
      venue: "[PLACEHOLDER: Nama tempat akad]",
      address: "[PLACEHOLDER: Alamat lengkap akad]",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=[PLACEHOLDER:+Nama+Tempat+Akad]",
    },
    resepsi: {
      time: {
        id: "12.00 WIB",
        en: "12:00 PM (WIB)",
        zh: "中午 12:00（西印尼时间）",
      },
      venue: "[PLACEHOLDER: Nama tempat resepsi]",
      address: "[PLACEHOLDER: Alamat lengkap resepsi]",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=[PLACEHOLDER:+Nama+Tempat+Resepsi]",
    },
    /** [PLACEHOLDER] */
    dressCode: {
      id: "[PLACEHOLDER: Cheongsam / Batik / Formal]",
      en: "[PLACEHOLDER: Cheongsam / Batik / Formal]",
      zh: "[PLACEHOLDER: 旗袍 / 峇迪 / 正装]",
    },
  },

  photos: [
    {
      src: "./images/hans-vanessa-1.jpg",
      alt: {
        id: "Hans dan Vanessa di cermin lengkung",
        en: "Hans and Vanessa in an arched mirror",
        zh: "Hans 与 Vanessa 在拱形镜前",
      },
    },
    {
      src: "./images/hans-vanessa-2.jpg",
      alt: {
        id: "Potret film Hans dan Vanessa",
        en: "Film portrait of Hans and Vanessa",
        zh: "Hans 与 Vanessa 的胶片肖像",
      },
    },
    {
      src: "./images/hans-vanessa-3.jpg",
      alt: {
        id: "Hans dan Vanessa di Scarlett's",
        en: "Hans and Vanessa at Scarlett's",
        zh: "Hans 与 Vanessa 在 Scarlett's",
      },
    },
    {
      src: "./images/hans-vanessa-4.jpg",
      alt: {
        id: "Selfie Hans dan Vanessa di mal",
        en: "Hans and Vanessa mall selfie",
        zh: "Hans 与 Vanessa 的商场自拍",
      },
    },
    {
      src: "./images/hans-vanessa-5.jpg",
      alt: {
        id: "Hans dan Vanessa dengan busana bernuansa merah",
        en: "Hans and Vanessa in festive red",
        zh: "Hans 与 Vanessa 红装合影",
      },
    },
  ],

  gifts: [
    {
      bank: "BCA",
      /** [PLACEHOLDER] */
      accountName: "[PLACEHOLDER: Nama rekening mempelai pria]",
      /** [PLACEHOLDER] */
      accountNumber: "[PLACEHOLDER: 1234567890]",
    },
    {
      bank: "Mandiri",
      /** [PLACEHOLDER] */
      accountName: "[PLACEHOLDER: Nama rekening mempelai wanita]",
      /** [PLACEHOLDER] */
      accountNumber: "[PLACEHOLDER: 0987654321]",
    },
  ],

  /**
   * Optional looping audio. If the file is missing, the music toggle
   * falls back to a generated pentatonic ambient bed (Web Audio).
   */
  music: {
    src: "./music/bgm.mp3",
  },
} as const;

export type Locale = "id" | "en" | "zh";
export type Wedding = typeof wedding;
