import type { Metadata, Viewport } from 'next';
import './globals.css';
import { wanted, maru } from './fonts';
import { shareMeta } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://ymdt.io'),
  title: {
    default: 'YMDT — 좋은 인연이 닿는 구조를 만듭니다',
    template: '%s · YMDT',
  },
  description:
    '결혼정보업체를 위한 CRM·크로스매칭 플랫폼 HANI MatchOS, 사주로 나를 읽고 대화로 나를 이해하는 HANI 앱을 만듭니다.',
  applicationName: 'YMDT',
  ...shareMeta(
    'YMDT — 좋은 인연이 더 자주 닿도록',
    '결혼정보업체를 위한 CRM·크로스매칭 플랫폼 HANI MatchOS, 사주로 나를 읽고 대화로 나를 이해하는 HANI 앱을 만듭니다.',
    '/og/home.jpg',
    'YMDT — 좋은 인연이 더 자주 닿도록',
  ),
};

export const viewport: Viewport = {
  themeColor: '#2E0257',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning className={`${wanted.variable} ${maru.variable}`}>
      <body>{children}</body>
    </html>
  );
}
