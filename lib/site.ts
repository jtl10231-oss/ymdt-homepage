/**
 * 배포 경로 — GitHub Pages 기본 주소처럼 하위 경로(/ymdt-homepage)에 올릴 때 빌드 환경변수로 받는다.
 * 로컬 개발에서는 비워 두면 된다.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://jtl10231-oss.github.io/ymdt-homepage';
/** public 폴더 파일 경로에 배포 경로를 붙인다: asset('/media/a.mp4') */
export const asset = (p: string) => `${BASE_PATH}${p}`;

export const CONTACT_EMAIL = 'hani@ymdt.io';

/** YMDT 대표 문장 — 바꿀 때는 여기만 고치면 히어로·푸터·탭 제목·공유 정보가 함께 바뀐다 */
export const BRAND = {
  line1: '한 사람을 깊이',
  line2: '두 사람을 가깝게',
  slogan: '한 사람을 깊이, 두 사람을 가깝게',
  definition: 'YMDT는 사람을 이해하는 기술을 만듭니다.',
  // 제품 이름이 줄바꿈으로 끊기지 않도록 붙임 공백(\u00A0) 사용
  products: '나를 깊이 알아가는 HANI\u00A0앱, 좋은 만남을 잇는 HANI\u00A0MatchOS.',
  description:
    'YMDT는 사람을 이해하는 기술을 만듭니다. 나를 깊이 알아가는 HANI 앱, 결혼정보업체를 위한 CRM·크로스매칭 플랫폼 HANI MatchOS.',
} as const;
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
