import YmdtMark from './YmdtMark';
import YmdtWordmark from './YmdtWordmark';

// YMDT 락업: [인장 모노그램] + [워드마크] — 이름 옆에 도장을 찍듯.
export default function YmdtLogo({
  tone = 'ink',
  className = '',
  size = 'md',
}: {
  tone?: 'ink' | 'paper';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const d = { sm: { mark: 26, word: 15 }, md: { mark: 32, word: 18 }, lg: { mark: 48, word: 28 } }[size];
  const dark = tone === 'paper';
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${dark ? 'text-paper' : 'text-ink'} ${className}`}>
      <YmdtMark size={d.mark} tone={dark ? 'paper' : 'plum'} title="YMDT 로고" />
      <YmdtWordmark height={d.word} accent={dark ? 'var(--color-champagne)' : 'var(--color-brand-accent)'} />
    </span>
  );
}
