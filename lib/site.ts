export const CONTACT_EMAIL = 'hani@ymdt.io';
export const mailto = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export const NAV = [
  { href: '/matchos/', label: 'HANI MatchOS', sub: '결혼정보업체 CRM·크로스매칭' },
  { href: '/hani-app/', label: 'HANI 앱', sub: '사주로 나를 읽는 자기이해 앱' },
  { href: '/#principles', label: '원칙', sub: '우리가 지키는 것' },
  { href: '/#contact', label: '문의', sub: CONTACT_EMAIL },
] as const;

/** 페이지별 공유(OG) 메타데이터 — 레이아웃 값이 덮어써지지 않도록 전부 채운다 */
export function shareMeta(title: string, description: string, image: string, alt: string) {
  return {
    openGraph: {
      type: 'website' as const,
      locale: 'ko_KR',
      siteName: 'YMDT',
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt }],
    },
    twitter: { card: 'summary_large_image' as const, title, description, images: [image] },
  };
}
