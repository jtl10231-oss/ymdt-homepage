import { DGlyph, MGlyph, TGlyph, YGlyph } from './YmdtGlyphs';

// YMDT 워드마크 — 굵은 로만 세리프를 직접 그린 것. 유일한 색 = Y의 가는 획.
export default function YmdtWordmark({
  height = 20,
  className = '',
  accent = 'var(--color-brand)',
}: {
  height?: number;
  className?: string;
  accent?: string;
}) {
  const width = (height * 214) / 48;
  return (
    <svg width={width} height={height} viewBox="-1 -1 214 48" className={className} role="img" aria-label="YMDT">
      <YGlyph ink="currentColor" thin={accent} />
      <g transform="translate(54 0)">
        <MGlyph ink="currentColor" />
      </g>
      <g transform="translate(120 0)">
        <DGlyph ink="currentColor" />
      </g>
      <g transform="translate(172 0)">
        <TGlyph ink="currentColor" />
      </g>
    </svg>
  );
}
