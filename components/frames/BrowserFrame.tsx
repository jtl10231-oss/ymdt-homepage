import { cn } from '@/lib/utils';
import { screen, type ScreenKey } from '@/lib/screens';

// 직접 만든 브라우저 프레임 — 우하단만 접힌 모서리, 종이색 크롬.
export default function BrowserFrame({
  screenKey,
  alt,
  url = 'matchos.hani',
  className,
  priority = false,
  tone = 'paper',
}: {
  screenKey: ScreenKey;
  alt: string;
  url?: string;
  className?: string;
  priority?: boolean;
  tone?: 'paper' | 'night';
}) {
  const s = screen(screenKey);
  const night = tone === 'night';
  return (
    <figure
      className={cn(
        'relative overflow-hidden rounded-hani-lg border shadow-hani-float',
        night ? 'border-white/10 bg-night-3' : 'border-line bg-paper',
        className,
      )}
    >
      <div
        className={cn(
          'flex h-8 items-center gap-3 border-b px-3.5 sm:h-9',
          night ? 'border-white/10 bg-night-2' : 'border-line-soft bg-paper-subtle',
        )}
        aria-hidden
      >
        <span className="flex gap-1.5">
          <i className={cn('block size-2.5 rounded-full', night ? 'bg-white/20' : 'bg-line-strong')} />
          <i className={cn('block size-2.5 rounded-full', night ? 'bg-white/15' : 'bg-line')} />
          <i className={cn('block size-2.5 rounded-full', night ? 'bg-white/10' : 'bg-line')} />
        </span>
        <span
          className={cn(
            'mx-auto hidden max-w-[46%] flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1 text-[11px] tracking-wide sm:flex',
            night ? 'bg-white/5 text-white/45' : 'bg-paper-deep text-ink-muted',
          )}
        >
          <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden>
            <rect x="0.75" y="4.75" width="7.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
            <path d="M2.4 4.6V3.3a2.1 2.1 0 0 1 4.2 0v1.3" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          {url}
        </span>
        <span className="w-10 sm:w-12" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={s.src}
        width={s.w}
        height={s.h}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className="block h-auto w-full"
      />
    </figure>
  );
}
