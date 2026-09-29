import localFont from 'next/font/local';

export const wanted = localFont({
  src: './fonts/WantedSansVariable.woff2',
  variable: '--font-wanted',
  weight: '400 900',
  display: 'swap',
  preload: true,
});

export const maru = localFont({
  src: [
    { path: './fonts/MaruBuri-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/MaruBuri-SemiBold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-maru',
  display: 'swap',
  preload: true,
});
