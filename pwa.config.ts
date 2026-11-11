import { defineConfig } from '@/types/config';

export default defineConfig({
  manifest: {
    id: '/',
    name: 'TAHFIDZKU - Pondok Pesantren Abdussalam',
    short_name: 'TAHFIDZKU',
    description: "Aplikasi tahfidz, setoran Al-Qur'an, absensi, halaqah, dan layanan santri Pondok Pesantren Abdussalam.",
    dir: 'auto',
    lang: 'id-ID',
    background_color: '#F7FAF8',
    theme_color: '#087A55',
    display: 'standalone',
    orientation: 'natural',
    scope: '/',
    start_url: '/?utm_source=homescreen',
    prefer_related_applications: false,
    shortcuts: [
      {
        name: 'Buka Aplikasi TAHFIDZKU',
        short_name: 'Buka Aplikasi',
        description: 'Masuk ke aplikasi TAHFIDZKU',
        url: '/?utm_source=homescreen',
      },
    ],
  },

  pwa: {
    logs: true,
  },

  // OneSignal hanya tersedia melalui metode Cloudflare Workers.
  // Blogspot menggunakan CDN JsDelivr, jadi tetap nonaktif.
  oneSignal: {
    enabled: false,
    appId: '00000000-0000-0000-0000-000000000000',
    allowLocalhostAsSecureOrigin: true,
  },

  // Origin blog Blogspot untuk metode CDN JsDelivr.
  origin: 'https://tahfidz-pp-abdussalam.blogspot.com',
});
