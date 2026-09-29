// HANI 로만 세리프 각자체 워드마크 — 직접 그린 것 (MatchOS P0 확정 좌표).
// weight: 외곽선을 같은 색으로 더해 획을 두껍게 한다 (0 = 원본 굵기).
// 유일한 색 = A 가로획(accent).
export default function HaniWordmark({
  height = 20,
  className = '',
  accent = 'var(--color-brand-accent)',
  weight = 1.6,
}: {
  height?: number;
  className?: string;
  accent?: string;
  weight?: number;
}) {
  const pad = weight / 2;
  const width = height * ((153 + weight) / (47 + weight));
  const stroke = weight > 0 ? { stroke: 'currentColor', strokeWidth: weight, strokeLinejoin: 'miter' as const } : {};
  return (
    <svg
      width={width}
      height={height}
      viewBox={`${-2 - pad} ${-1 - pad} ${153 + weight} ${48 + weight}`}
      className={className}
      role="img"
      aria-label="HANI"
    >
      <g fill="currentColor" {...stroke}>
        <rect x="4" y="0" width="6.5" height="46" />
        <rect x="25" y="0" width="6.5" height="46" />
        <rect x="0.75" y="0" width="13" height="2.2" />
        <rect x="21.25" y="0" width="13" height="2.2" />
        <rect x="0.75" y="43.8" width="13" height="2.2" />
        <rect x="21.25" y="43.8" width="13" height="2.2" />
        <rect x="10.5" y="22" width="14.5" height="2.6" />
        <polygon points="60.8,0 63,0 49.3,43.8 46.2,43.8" />
        <polygon points="60.8,0 64.2,0 77.8,43.8 71.2,43.8" />
        <rect x="42" y="43.8" width="13" height="2.2" />
        <rect x="68" y="43.8" width="13" height="2.2" />
        <rect x="93" y="0" width="2.6" height="46" />
        <rect x="124.4" y="0" width="2.6" height="46" />
        <polygon points="93,0 99.8,0 127,46 120.2,46" />
        <rect x="89.5" y="0" width="10" height="2.2" />
        <rect x="121" y="0" width="9.5" height="2.2" />
        <rect x="89.5" y="43.8" width="9.5" height="2.2" />
        <rect x="120.5" y="43.8" width="10" height="2.2" />
        <rect x="141.5" y="0" width="6.5" height="46" />
        <rect x="138" y="0" width="13.5" height="2.2" />
        <rect x="138" y="43.8" width="13.5" height="2.2" />
      </g>
      <rect
        x="52"
        y="29"
        width="17"
        height="2.4"
        fill={accent}
        {...(weight > 0 ? { stroke: accent, strokeWidth: weight, strokeLinejoin: 'miter' as const } : {})}
      />
    </svg>
  );
}
