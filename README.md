# YMDT 홈페이지

YMDT 회사 소개 + HANI MatchOS(메인) + HANI 앱(서브) 소개 사이트.
Next.js(App Router) 정적 사이트로, 빌드 결과물(`out/`)을 어떤 정적 호스팅에도 올릴 수 있다.

## 페이지

| 경로 | 내용 |
|---|---|
| `/` | 갈림길 — 왼쪽 "한 사람을 깊이 · HANI 앱", 오른쪽 "두 사람을 가깝게 · HANI MatchOS" 중 골라 들어간다 |
| `/matchos/` | HANI MatchOS — 고민 6, 해결 3, 크로스매칭 성좌, 매칭풀 차트, 활용 사례, 협업 절차, 실제 화면 쇼케이스, 사주궁합, 신뢰, 매출, 파트너십 |
| `/hani-app/` | HANI 앱 — 인사이트, 하늬와 대화, 다이어리, 관계, 캐릭터, 철학 |

## 실행

```bash
npm install
npm run dev      # http://localhost:5310
npm run build    # 정적 결과물 → out/
```

## 서버 관리자용: 직접 서버에 올릴 때

이 사이트는 **정적 파일(HTML·이미지·영상)** 이라 Node 서버를 상시 돌릴 필요가 없다. 빌드 결과물 `out/` 폴더를 웹서버(nginx, Apache, S3, Cloudflare Pages 등)에 올리면 끝이다.

```bash
git clone https://github.com/jtl10231-oss/ymdt-homepage.git
cd ymdt-homepage
npm ci                                   # Node 22 이상
NEXT_PUBLIC_SITE_URL=https://실제도메인 npm run build   # → out/ 생성 (약 17MB)
```

- **도메인 루트에 올릴 때**(예: `https://example.com/`): 위 명령 그대로. `out/` 안의 파일을 웹 루트에 복사한다.
- **하위 경로에 올릴 때**(예: `https://example.com/ymdt/`): `NEXT_PUBLIC_BASE_PATH=/ymdt` 도 함께 지정해서 빌드한다.
- `NEXT_PUBLIC_SITE_URL`은 카카오톡·SNS 공유 미리보기 이미지 주소에 쓰인다. 빠뜨리면 GitHub Pages 주소가 들어가니 꼭 실제 도메인으로 지정한다.
- 폴더 주소(`/matchos/`)가 열리도록 `index.html` 자동 연결이 필요하다. nginx 예: `try_files $uri $uri/ =404;` 없는 주소는 `404.html`을 보여주면 된다.
- 영상(`.webm`·`.mp4`)은 `Range` 요청(부분 재생)을 지원하는 서버면 더 부드럽게 재생된다. 대부분의 웹서버는 기본 지원한다.
- 코드가 `main`에 올라올 때마다 GitHub Pages(https://jtl10231-oss.github.io/ymdt-homepage/)에도 자동 배포되며, 자체 서버 배포와는 별개로 동작한다.

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
