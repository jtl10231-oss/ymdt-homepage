'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { NAV, mailto, CONTACT_EMAIL } from '@/lib/site';
import YmdtLogo from '@/components/brand/YmdtLogo';
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose, SheetDescription } from '@/components/ui/sheet';

export default function Header({ tone = 'paper' }: { tone?: 'paper' | 'night' }) {
  const [scrolled, setScrolled] = useState(false);
  const [overNight, setOverNight] = useState(tone === 'night');
  const pathname = usePathname();
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      setScrolled(window.scrollY > 16);
      // 헤더 아래에 어두운 구간(data-header="night")이 있으면 밝은 글씨로
      const line = 36;
      const nights = document.querySelectorAll<HTMLElement>('[data-header="night"]');
      let over = false;
      nights.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom >= line) over = true;
      });
      setOverNight(over);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
      cancelAnimationFrame(raf);
    };
  }, []);
  const light = overNight;
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-hani',
        scrolled
          ? light
            ? 'bg-night/55 shadow-[0_1px_0_rgba(255,255,255,.06)] backdrop-blur-xl'
            : 'bg-paper/82 shadow-[0_1px_0_var(--color-line-soft)] backdrop-blur-xl backdrop-saturate-150'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1320px] items-center justify-between px-5 sm:px-8 md:h-[72px] lg:px-12">
        <Link href="/" aria-label="YMDT 홈" className="relative z-10">
          <YmdtLogo tone={light ? 'paper' : 'ink'} size="md" />
        </Link>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => {
            const active = pathname.startsWith(n.href.replace(/\/$/, '')) && n.href.length > 2 && !n.href.includes('#');
            return (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  'relative rounded-full px-4 py-2 text-[14.5px] font-medium transition-colors duration-300',
                  light ? 'text-white/80 hover:text-white' : 'text-ink-sub hover:text-ink',
                  active && (light ? 'text-white' : 'text-ink'),
                )}
              >
                {n.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-[var(--color-champagne)]" aria-hidden />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={mailto('HANI 도입 상담 문의')}
            className={cn(
              'hidden h-10 items-center rounded-hani-btn px-4 text-[14px] font-semibold transition-colors duration-300 sm:inline-flex',
              light
                ? 'border border-white/25 text-white hover:bg-white/10'
                : 'bg-brand text-paper shadow-hani-btn hover:bg-brand-hover',
            )}
          >
            도입 상담
          </a>
          <Sheet>
            <SheetTrigger
              aria-label="메뉴 열기"
              className={cn(
                'inline-flex size-10 items-center justify-center rounded-hani-btn lg:hidden',
                light ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-paper-deep',
              )}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path d="M3 7h16M3 15h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-l-0 bg-paper p-0 sm:max-w-md">
              <SheetTitle className="sr-only">메뉴</SheetTitle>
              <SheetDescription className="sr-only">YMDT 사이트 메뉴</SheetDescription>
              <div className="flex h-full flex-col px-7 pt-6 pb-10">
                <YmdtLogo />
                <nav aria-label="모바일 메뉴" className="mt-14 flex flex-col">
                  {NAV.map((n, i) => (
                    <SheetClose asChild key={n.href}>
                      <Link href={n.href} className="group flex items-baseline gap-4 border-b border-line-soft py-5">
                        <span className="font-display text-sm text-ink-muted">0{i + 1}</span>
                        <span>
                          <span className="block font-display text-[28px] leading-tight text-ink">{n.label}</span>
                          <span className="mt-1 block text-[13px] text-ink-muted">{n.sub}</span>
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <a
                  href={mailto('HANI 도입 상담 문의')}
                  className="mt-auto inline-flex h-14 items-center justify-center rounded-hani-btn bg-brand text-[15px] font-semibold text-paper shadow-hani-btn"
                >
                  도입 상담 · {CONTACT_EMAIL}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
