import { DGlyph, GLYPH_W, MGlyph, TGlyph, YGlyph } from './YmdtGlyphs';

// YMDT 인장형 모노그램 — 접힌 모서리 타일에 YM/DT 네 글자를 도장처럼 새겼다.
export const YMDT_TILE = 'M16 0 H48 A16 16 0 0 1 64 16 V60 A4 4 0 0 1 60 64 H16 A16 16 0 0 1 0 48 V16 A16 16 0 0 1 16 0 Z';

const TONES = {
  plum: { tile: '#440382', ink: '#FFFEFB', thin: '#D9C29A' },
  paper: { tile: '#FFFEFB', ink: '#2E0257', thin: '#A8873D' },
  night: { tile: '#090318', ink: '#FFFEFB', thin: '#C8B08A' },
} as const;

export function YmdtMonogram({ ink, thin }: { ink: string; thin: string }) {
  const s = 0.425; // 글자 높이 19.6
  const h = 46 * s;
  const cx = [19.9, 44.1];
  const cy = [20.4, 43.6];
  const at = (w: number, x: number, y: number) => `translate(${(x - (w * s) / 2).toFixed(2)} ${(y - h / 2).toFixed(2)}) scale(${s})`;
  return (
    <g>
      <g transform={at(GLYPH_W.Y, cx[0], cy[0])}>
        <YGlyph ink={ink} thin={thin} />
      </g>
      <g transform={at(GLYPH_W.M, cx[1], cy[0])}>
        <MGlyph ink={ink} />
      </g>
      <g transform={at(GLYPH_W.D, cx[0], cy[1])}>
        <DGlyph ink={ink} />
      </g>
      <g transform={at(GLYPH_W.T, cx[1], cy[1])}>
        <TGlyph ink={ink} />
      </g>
    </g>
  );
}

export default function YmdtMark({
  size = 32,
  tone = 'plum',
  className = '',
  title = 'YMDT',
}: {
  size?: number;
  tone?: keyof typeof TONES;
  className?: string;
  title?: string;
}) {
  const t = TONES[tone];
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} role="img" aria-label={title}>
      <path d={YMDT_TILE} fill={t.tile} />
      <YmdtMonogram ink={t.ink} thin={t.thin} />
    </svg>
  );
}
