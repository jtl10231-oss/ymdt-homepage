// 팔각 인장 — 이중 테두리 + 반지 각인, -3° (MatchOS P0).
export default function SealMark({
  size = 40,
  variant = 'solid',
  className = '',
  title = 'HANI 인장',
}: {
  size?: number;
  variant?: 'solid' | 'outline' | 'gold';
  className?: string;
  title?: string;
}) {
  const fill = variant === 'solid' ? 'var(--color-brand)' : variant === 'gold' ? 'var(--color-gold)' : 'none';
  const line = variant === 'outline' ? 'currentColor' : '#F7EFFF';
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} role="img" aria-label={title}>
      <g transform="rotate(-3 32 32)">
        <path
          d="M23 6 H41 L58 23 V41 L41 58 H23 L6 41 V23 Z"
          fill={fill}
          stroke={variant === 'outline' ? 'currentColor' : 'none'}
          strokeWidth={variant === 'outline' ? 2.2 : 0}
        />
        <path d="M24 10 H40 L54 24 V40 L40 54 H24 L10 40 V24 Z" fill="none" stroke={line} strokeWidth="1.1" opacity="0.7" />
        <circle cx="27.5" cy="32" r="7.5" fill="none" stroke={line} strokeWidth="2" />
        <circle cx="36.5" cy="32" r="7.5" fill="none" stroke={line} strokeWidth="2" />
      </g>
    </svg>
  );
}
