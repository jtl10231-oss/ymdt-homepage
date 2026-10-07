/**
 * 배포 경로 — GitHub Pages 기본 주소처럼 하위 경로(/ymdt-homepage)에 올릴 때 빌드 환경변수로 받는다.
 * 로컬 개발에서는 비워 두면 된다.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://jtl10231-oss.github.io/ymdt-homepage';
/** public 폴더 파일 경로에 배포 경로를 붙인다: asset('/media/a.mp4') */
export const asset = (p: string) => `${BASE_PATH}${p}`;

/** 법인명 — 브랜드 표기는 YMDT, 법인 표기는 이 값 */
export const COMPANY_LEGAL_NAME = '와이엠디티주식회사';

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
export const mailto = (subject: string, body?: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body.replace(/\n/g, '\r\n'))}` : ''
  }`;

/** 고객지원 페이지 — 실제 주소: https://www.ymdt.io/support/ (외부에 등록되는 주소라 경로를 바꾸지 말 것) */
export const SUPPORT_PATH = '/support/';
/** 문의 메일을 누르면 미리 채워지는 양식 — 답변에 필요한 정보를 한 번에 받기 위함 */
export const SUPPORT_MAIL_SUBJECT = '[HANI 앱 문의]';
export const SUPPORT_MAIL_BODY =
  '안녕하세요. HANI 앱 문의드립니다.\n\n- 로그인 방식(카카오 / Google / Apple):\n- 기기와 OS 버전:\n- 앱 버전:\n- 문의 내용:\n';
export const supportMailto = () => mailto(SUPPORT_MAIL_SUBJECT, SUPPORT_MAIL_BODY);

export const NAV = [
  { href: '/hani-app/', label: 'HANI 앱', sub: '한 사람을 깊이 · 자기이해 앱' },
  { href: '/matchos/', label: 'HANI MatchOS', sub: '두 사람을 가깝게 · 결혼정보업체 플랫폼' },
] as const;

/** 페이지마다 머리 버튼을 그 제품에 맞게 */
export function headerCta(pathname: string) {
  if (pathname.startsWith('/hani-app')) return { label: '앱 소식 받기', href: mailto('HANI 앱 소식 받기') };
  if (pathname.startsWith('/support')) return { label: '이메일 문의', href: supportMailto() };
  if (pathname.startsWith('/matchos')) return { label: '도입 상담', href: mailto('HANI MatchOS 도입 상담') };
  return { label: '문의하기', href: mailto('YMDT 문의') };
}

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
