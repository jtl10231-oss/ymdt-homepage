import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  // GitHub Pages 기본 주소(하위 경로) 배포용 — 비어 있으면 루트
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // 로컬에서 개발 서버를 여러 개 띄울 때만 빌드 폴더를 분리한다 (NEXT_DIST_DIR)
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
};

export default nextConfig;
