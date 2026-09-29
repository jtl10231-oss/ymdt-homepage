'use client';

import { useId } from 'react';

// HANI 결(結) 엠블럼 — 맞물린 두 반지. MatchOS Design Renewal P0 확정 좌표.
// 위 교차는 오른쪽 링이, 아래 교차는 왼쪽 링이 위로 오는 실제 위빙(mask 기법).
export default function HaniMark({
  size = 32,
  className = '',
  lens = true,
  strokeWidth = 2.4,
  title = 'HANI',
}: {
  size?: number;
  className?: string;
  lens?: boolean;
  strokeWidth?: number;
  title?: string;
}) {
  const uid = useId().replace(/:/g, '');
  const w = size * (64 / 60);
  return (
    <svg width={w} height={size} viewBox="0 0 64 60" className={className} role="img" aria-label={title} fill="none">
      <defs>
        <mask id={`hm1-${uid}`}>
          <rect width="64" height="60" fill="white" />
          <path d="M29.23 18.85 A15.5 15.5 0 0 1 35.21 15.26" stroke="black" strokeWidth="7.5" fill="none" />
        </mask>
        <mask id={`hm2-${uid}`}>
          <rect width="64" height="60" fill="white" />
          <path d="M34.77 41.15 A15.5 15.5 0 0 1 28.79 44.74" stroke="black" strokeWidth="7.5" fill="none" />
        </mask>
      </defs>
      {lens && (
        <path d="M32 16.72 A15.5 15.5 0 0 1 32 43.28 A15.5 15.5 0 0 1 32 16.72 Z" fill="var(--color-brand-accent)" opacity="0.22" />
      )}
      <circle cx="24" cy="30" r="15.5" stroke="currentColor" strokeWidth={strokeWidth} mask={`url(#hm1-${uid})`} />
      <circle cx="40" cy="30" r="15.5" stroke="currentColor" strokeWidth={strokeWidth} mask={`url(#hm2-${uid})`} />
    </svg>
  );
}
