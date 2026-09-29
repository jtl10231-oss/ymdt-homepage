import type { Metadata, Viewport } from 'next';
import './globals.css';
import { wanted, maru } from './fonts';
import { BRAND, SITE_URL, shareMeta } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `YMDT — ${BRAND.slogan}`,
    template: '%s · YMDT',
  },
  description: BRAND.description,
  applicationName: 'YMDT',
  ...shareMeta(`YMDT — ${BRAND.slogan}`, BRAND.description, '/og/home.jpg', `YMDT — ${BRAND.slogan}`),
};

export const viewport: Viewport = {
  themeColor: '#2E0257',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning className={`${wanted.variable} ${maru.variable}`}>
      <body>
        {/* 자바스크립트가 꺼진 환경에서도 등장 애니메이션 대기 중인 글자가 보이도록 */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
