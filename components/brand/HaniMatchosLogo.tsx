import HaniMark from './HaniMark';
import HaniWordmark from './HaniWordmark';

// HANI MatchOS 락업: [결 엠블럼] HANI / MATCH OS (MatchOS 앱 사이드바·브로셔 표지와 같은 구성)
export default function HaniMatchosLogo({
  tone = 'ink',
  size = 'md',
  className = '',
}: {
  tone?: 'ink' | 'paper';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const d = { sm: { mark: 24, word: 16, sub: 8.5 }, md: { mark: 32, word: 21, sub: 10 }, lg: { mark: 44, word: 30, sub: 12.5 } }[size];
  const paper = tone === 'paper';
  return (
    <span className={`inline-flex items-center gap-3 select-none ${paper ? 'text-paper' : 'text-ink'} ${className}`}>
      <HaniMark size={d.mark} strokeWidth={3.2} title="HANI MatchOS" />
      <span className="flex flex-col leading-none">
        <HaniWordmark height={d.word} accent={paper ? 'var(--color-champagne)' : 'var(--color-brand)'} weight={2} />
        <span
          className={`mt-[0.45em] font-bold tracking-[0.55em] ${paper ? 'text-white/60' : 'text-ink-muted'}`}
          style={{ fontSize: d.sub }}
        >
          MATCH OS
        </span>
      </span>
    </span>
  );
}
