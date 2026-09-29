# YMDT 홈페이지

YMDT 회사 소개 + HANI MatchOS(메인) + HANI 앱(서브) 소개 사이트.
Next.js(App Router) 정적 사이트로, 빌드 결과물(`out/`)을 어떤 정적 호스팅에도 올릴 수 있다.

## 페이지

| 경로 | 내용 |
|---|---|
| `/` | YMDT 홈 — 히어로 영상, 두 개의 HANI, 원칙, MatchOS·앱 티저, 문의 |
| `/matchos/` | HANI MatchOS — 고민 6, 해결 3, 크로스매칭 성좌, 매칭풀 차트, 활용 사례, 협업 절차, 실제 화면 쇼케이스, 사주궁합, 신뢰, 매출, 파트너십 |
| `/hani-app/` | HANI 앱 — 인사이트, 하늬와 대화, 다이어리, 관계, 캐릭터, 철학 |

## 실행

```bash
npm install
npm run dev      # http://localhost:5310
npm run build    # 정적 결과물 → out/
```

## 배포

- 주소: https://jtl10231-oss.github.io/ymdt-homepage/
- `main`에 푸시하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드해서 GitHub Pages에 자동 배포한다.
- 하위 경로 배포라 `NEXT_PUBLIC_BASE_PATH`(예: `/ymdt-homepage`)를 빌드 때 받는다. public 파일 경로는 `asset()`(`lib/site.ts`)으로 감싼다.
- ymdt.io 도메인에는 연결하지 않는다 (기존 사이트 유지).

## 기술 스택

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui(모바일 메뉴 시트) · Motion

## 폴더

```text
app/                    페이지, 레이아웃, 폰트(Wanted Sans, MaruBuri), 파비콘
components/brand/       YMDT 로고, HANI 워드마크·결 엠블럼·인장, 원앙 엠블럼, HANI 앱 아이콘
components/frames/      직접 만든 브라우저·휴대폰 프레임
components/motion/      등장, 금실, 인장 스탬프, 카운트업
components/sections/    홈·MatchOS·앱 섹션
components/site/        헤더, 푸터, 버튼, 섹션 머리
lib/                    화면 캡처 목록(screens.json), 사이트 상수
public/screens/         두 앱의 실제 화면 캡처(WebP)
public/characters/      하니 캐릭터(원본 + GPT 이미지로 만든 포즈 4종)
public/media/           히어로 영상(힉스필드 제작, 반복 재생용 가공)
public/brand/           로고 파일(SVG)
public/og/              공유 미리보기 이미지
docs/DESIGN_SYSTEM.md   디자인 규칙
```

## 로고

- `public/brand/ymdt-logo.svg` / `ymdt-logo-white.svg` — 락업(인장 모노그램 + 워드마크)
- `public/brand/ymdt-mark.svg` / `ymdt-mark-white.svg` — 인장 모노그램 단독
- `public/brand/ymdt-wordmark.svg` — 워드마크 단독
- `public/brand/ymdt-app-icon.svg` — 정사각 앱 아이콘

## 문의 메일

모든 상담 버튼은 `hani@ymdt.io`로 연결된다 (`lib/site.ts`).
