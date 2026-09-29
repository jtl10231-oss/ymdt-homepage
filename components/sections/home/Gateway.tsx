'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import HaniAppIcon from '@/components/brand/HaniAppIcon';
import HaniMatchosLogo from '@/components/brand/HaniMatchosLogo';
import MandarinDucks from '@/components/brand/MandarinDucks';
import YmdtMark from '@/components/brand/YmdtMark';
import { asset } from '@/lib/site';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;
type Side = 'app' | 'mos';

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="transition-transform duration-500 ease-hani group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5"
    >
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * 첫 페이지 갈림길 — 대표 문장 "한 사람을 깊이, 두 사람을 가깝게"를 두 개의 문으로 나눴다.
 * 왼쪽(위) 문 = HANI 앱(한 사람을 깊이), 오른쪽(아래) 문 = HANI MatchOS(두 사람을 가깝게).
 */
export default function Gateway() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<Side | null>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (reduce) v.pause();
    else v.play().catch(() => {});
  }, [reduce]);

  // 데스크톱에서 가리킨 문이 넓어진다
  const grow = (s: Side) => (active === null ? 1 : active === s ? 1.24 : 0.76);
  const rise = (d = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: EASE, delay: d },
  });
  const hoverProps = (s: Side) => ({
    onMouseEnter: () => setActive(s),
    onMouseLeave: () => setActive(null),
    onFocus: () => setActive(s),
    onBlur: () => setActive(null),
  });

  return (
    <section
      aria-label="제품 선택"
      className="relative flex h-[calc(100svh-64px)] min-h-[600px] flex-col md:h-[calc(100svh-72px)] md:min-h-[660px] md:flex-row"
    >
      {/* ───────── HANI 앱 · 한 사람을 깊이 ───────── */}
      <Link
        href="/hani-app/"
        {...hoverProps('app')}
        aria-label="HANI 앱 — 한 사람을 깊이. 사주로 나를 읽고, 대화로 나를 이해하는 앱"
        className="group relative flex min-h-0 grow basis-0 overflow-hidden bg-[radial-gradient(120%_95%_at_85%_15%,var(--color-plum-150)_0%,var(--color-plum-50)_45%,var(--color-paper-subtle)_85%)] outline-none transition-[flex-grow] duration-700 ease-hani md:grow-(--g)"
        style={{ ['--g' as string]: grow('app') }}
      >
        {/* 다른 문을 가리키면 살짝 가라앉는다 */}
        <span
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 z-20 bg-paper-deep/40 transition-opacity duration-700',
            active === 'mos' ? 'opacity-100' : 'opacity-0',
          )}
        />
        <motion.img
          src={asset('/characters/hani-hero.webp')}
          alt=""
          aria-hidden
          width={889}
          height={1000}
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.25 }}
          className="pointer-events-none absolute top-4 right-3 w-[32%] max-w-[150px] drop-shadow-[0_24px_30px_rgba(68,3,130,.18)] transition-transform duration-700 ease-hani group-hover:-translate-y-2 md:top-auto md:right-[5%] md:bottom-[9%] md:w-[38%] md:max-w-[330px]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/brand/deco-sparkles.svg')}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[14%] right-[36%] hidden w-9 opacity-70 animate-drift md:block"
        />
        <div className="relative z-10 flex h-full w-full flex-col justify-end px-6 pt-6 pb-8 sm:px-10 md:justify-center md:px-14 md:pb-6 lg:px-20">
          <motion.p
            {...rise(0.1)}
            className="inline-flex w-fit items-center rounded-full border border-brand/15 bg-paper/70 px-3.5 py-1.5 text-[12.5px] font-semibold text-brand backdrop-blur-sm"
          >
            누구나 · 자기이해 앱
          </motion.p>
          <motion.h2
            {...rise(0.18)}
            className="mt-4 font-display text-[clamp(2.3rem,5.1vw,5.3rem)] leading-[1.08] font-normal tracking-[-0.035em] whitespace-nowrap text-ink md:mt-6"
          >
            한 사람을 <span className="text-brand">깊이</span>
          </motion.h2>
          <motion.div {...rise(0.26)} className="mt-4 flex items-center gap-3 md:mt-7">
            <HaniAppIcon size={34} className="rounded-[9px] shadow-hani-card" />
            <span className="text-[18px] font-bold tracking-[-0.01em] text-ink md:text-[20px]">HANI 앱</span>
          </motion.div>
          <motion.p {...rise(0.32)} className="mt-2.5 max-w-[19rem] text-[15px] leading-relaxed text-ink-sub md:max-w-sm md:text-[17px]">
            사주로 나를 읽고, 대화로 나를 이해하는 앱
          </motion.p>
          <motion.span {...rise(0.4)} className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-brand md:mt-8">
            HANI 앱 보기
            <Arrow />
          </motion.span>
        </div>
      </Link>

      {/* ───────── HANI MatchOS · 두 사람을 가깝게 ───────── */}
      <Link
        href="/matchos/"
        {...hoverProps('mos')}
        aria-label="HANI MatchOS — 두 사람을 가깝게. 결혼정보업체를 위한 회원관리·크로스매칭 플랫폼"
        className="group relative flex min-h-0 grow basis-0 bg-night outline-none transition-[flex-grow] duration-700 ease-hani md:grow-(--g)"
        style={{ ['--g' as string]: grow('mos') }}
      >
        <span aria-hidden className="absolute inset-0 overflow-hidden">
        {/* 영상을 위로 끌어올려 금실 매듭이 제목과 겹치지 않고 오른쪽 위에 오게 한다 */}
        <video
          ref={video}
          className="absolute top-[-35%] left-0 h-[135%] w-full -scale-x-100 object-cover object-[37%_50%] transition-transform duration-[1.4s] ease-hani group-hover:scale-x-[-1.04] group-hover:scale-y-[1.04]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={asset('/media/hero-thread-poster.webp')}
          aria-hidden
        >
          <source src={asset('/media/hero-thread-sm.webm')} type="video/webm" media="(max-width: 767px)" />
          <source src={asset('/media/hero-thread-sm.mp4')} type="video/mp4" media="(max-width: 767px)" />
          <source src={asset('/media/hero-thread.webm')} type="video/webm" />
          <source src={asset('/media/hero-thread.mp4')} type="video/mp4" />
        </video>
        {/* 글자가 읽히도록 왼쪽 아래를 먹보라로 눌러 준다 */}
        <span className="absolute inset-0 bg-[linear-gradient(0deg,rgba(9,3,24,.94)_0%,rgba(9,3,24,.62)_42%,rgba(9,3,24,.2)_75%),linear-gradient(90deg,rgba(9,3,24,.6)_0%,transparent_62%)]" />
        {/* 제목 뒤만 살짝 눌러 금실이 지나가도 글자가 또렷하게 */}
        <span className="absolute inset-0 hidden bg-[radial-gradient(48%_30%_at_30%_52%,rgba(9,3,24,.62)_0%,transparent_100%)] md:block" />
        <span
          className={cn(
            'pointer-events-none absolute inset-0 z-20 bg-night/45 transition-opacity duration-700',
            active === 'app' ? 'opacity-100' : 'opacity-0',
          )}
        />
        </span>

        {/* 두 문을 잇는 금실과 매듭(YMDT) */}
        <span aria-hidden className="absolute inset-x-0 top-0 z-30 h-px bg-[var(--color-champagne)]/60 md:inset-x-auto md:inset-y-0 md:left-0 md:h-auto md:w-px" />
        <span
          aria-hidden
          className="absolute top-0 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-[11px] p-[3px] ring-1 ring-[var(--color-champagne)]/70 bg-paper md:top-1/2 md:left-0"
        >
          <YmdtMark size={30} tone="plum" title="" />
        </span>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.35 }}
          aria-hidden
          className="pointer-events-none absolute top-6 left-6 w-[26%] max-w-[104px] text-[var(--color-champagne)] md:top-auto md:right-[7%] md:bottom-[8%] md:left-auto md:w-[24%] md:max-w-[170px]"
        >
          <MandarinDucks title="" />
        </motion.div>

        <div className="relative z-10 flex h-full w-full flex-col justify-end px-6 pt-6 pb-8 sm:px-10 md:justify-center md:px-14 md:pb-6 lg:px-20">
          <motion.p
            {...rise(0.16)}
            className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[12.5px] font-semibold text-white/85 backdrop-blur-sm"
          >
            결혼정보업체 · 운영 플랫폼
          </motion.p>
          <motion.h2
            {...rise(0.24)}
            className="mt-4 font-display text-[clamp(2.3rem,5.1vw,5.3rem)] leading-[1.08] font-normal tracking-[-0.035em] whitespace-nowrap text-paper [text-shadow:0_2px_24px_rgba(9,3,24,.55)] md:mt-6"
          >
            두 사람을 <span className="text-[var(--color-champagne)]">가깝게</span>
          </motion.h2>
          <motion.div {...rise(0.32)} className="mt-4 md:mt-7">
            <HaniMatchosLogo tone="paper" size="sm" />
          </motion.div>
          <motion.p {...rise(0.38)} className="mt-2.5 max-w-[19rem] text-[15px] leading-relaxed text-white/70 md:max-w-sm md:text-[17px]">
            결혼정보업체를 위한 회원관리·크로스매칭 플랫폼
          </motion.p>
          <motion.span
            {...rise(0.46)}
            className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-champagne)] md:mt-8"
          >
            MatchOS 보기
            <Arrow />
          </motion.span>
        </div>
      </Link>
    </section>
  );
}
