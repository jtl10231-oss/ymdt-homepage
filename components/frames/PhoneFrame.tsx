import { cn } from '@/lib/utils';
import { isDarkTop, screen, type ScreenKey } from '@/lib/screens';

// 직접 만든 휴대폰 프레임. 캡처 화면 위에 상태바를 얹어 실제 기기처럼 보이게 한다.
export default function PhoneFrame({
  screenKey,
  alt,
  className,
  priority = false,
  shadow = true,
}: {
  screenKey: ScreenKey;
  alt: string;
  className?: string;
  priority?: boolean;
  shadow?: boolean;
}) {
  const s = screen(screenKey);
  const dark = isDarkTop(s.top);
  return (
    <figure
      className={cn(
        'relative aspect-[390/868] w-full rounded-[13.5%/6.2%] bg-[#17111c] p-[3.4%]',
        shadow && 'shadow-hani-float',
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[10.6%/4.9%]" style={{ background: s.top }}>
        {/* 상태바 */}
        <div
          className={cn(
            'absolute inset-x-0 top-0 z-10 flex h-[5.2%] items-center justify-between px-[8%] text-[clamp(7px,2.6cqw,11px)] font-semibold',
            dark ? 'text-white' : 'text-ink',
          )}
          style={{ containerType: 'inline-size' }}
          aria-hidden
        >
          <span className="tracking-tight">9:41</span>
          <span className="flex items-center gap-[0.35em]">
            <svg viewBox="0 0 18 12" className="h-[0.9em] w-auto" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="0.8"/><rect x="5" y="5.5" width="3" height="6.5" rx="0.8"/><rect x="10" y="3" width="3" height="9" rx="0.8"/><rect x="15" y="0" width="3" height="12" rx="0.8"/></svg>
            <svg viewBox="0 0 26 12" className="h-[0.95em] w-auto" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="currentColor" opacity=".45"/><rect x="2.5" y="2.5" width="17" height="7" rx="1.6" fill="currentColor"/><rect x="24" y="4" width="1.6" height="4" rx=".8" fill="currentColor" opacity=".45"/></svg>
          </span>
        </div>
        {/* 다이내믹 아일랜드 */}
        <div className="absolute left-1/2 top-[1.3%] z-20 h-[3.1%] w-[30%] -translate-x-1/2 rounded-full bg-black" aria-hidden />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={s.src}
          width={s.w}
          height={s.h}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-x-0 bottom-0 top-[5.2%] block h-[94.8%] w-full object-cover object-top"
        />
      </div>
    </figure>
  );
}
