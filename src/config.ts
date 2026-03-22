export const SITE = {
  website: "https://cakdar.pages.dev/",
  author: "Sudar Blogger",
  profile: "https://github.com/0xdres",
  desc: "Blog Kang Sudar adalah blog untuk share pengalaman, tutorial, review dan share tempat travelling menarik di indonesia",
  title: "Sudar Blogger",
  ogImage: "devosfera-og.webp", // ubicado en la carpeta public
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showGalleries: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Editar este post",
    url: "https://github.com/0xdres/astro-devosfera/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "es", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Jakarta", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  introAudio: {
    enabled: false, // mostrar/ocultar el reproductor en el hero
    src: "/audio/intro-web.mp3", // ruta al archivo (relativa a /public)
    label: "INTRO.MP3", // etiqueta display en el reproductor
    duration: 30, // duración en segundos (para la barra de progreso fija)
  },
} as const;
