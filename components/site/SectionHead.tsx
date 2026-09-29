import { cn } from '@/lib/utils';
import Reveal from '@/components/motion/Reveal';

// 브로셔 문법의 에디토리얼 머리: 영문 아이브로우 · 헤어라인 · 한글 라벨
export function EditorialBar({
  en,
  ko,
  tone = 'paper',
  className,
}: {
  en: string;
  ko?: string;
  tone?: 'paper' | 'night';
  className?: string;
}) {
  const night = tone === 'night';
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-6 border-b pb-4',
        night ? 'border-white/12 text-white/55' : 'border-line text-ink-muted',
        className,
      )}
    >
      <span className="eyebrow">{en}</span>
      {ko && <span className="hidden text-right text-[12.5px] tracking-[0.18em] sm:inline">{ko}</span>}
    </div>
  );
}

export default function SectionHead({
  en,
  ko,
  title,
  lead,
  tone = 'paper',
  className,
  align = 'left',
  titleClassName,
}: {
  en: string;
  ko?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: 'paper' | 'night';
  className?: string;
  align?: 'left' | 'center';
  titleClassName?: string;
}) {
  const night = tone === 'night';
  return (
    <div className={cn(className)}>
      <EditorialBar en={en} ko={ko} tone={tone} />
      <Reveal className={cn('mt-10 md:mt-14', align === 'center' && 'text-center')}>
        <h2
          className={cn(
            'font-display text-balance text-[clamp(2.1rem,4.6vw,4.25rem)] leading-[1.18] font-normal tracking-[-0.025em]',
            night ? 'text-paper' : 'text-ink',
            titleClassName,
          )}
        >
          {title}
        </h2>
        {lead && (
          <p
            className={cn(
              'mt-6 max-w-2xl text-pretty text-[17px] leading-[1.75] md:text-lg',
              night ? 'text-white/65' : 'text-ink-sub',
              align === 'center' && 'mx-auto',
            )}
          >
            {lead}
          </p>
        )}
      </Reveal>
    </div>
  );
}
