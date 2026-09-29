'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import Button from '@/components/site/Button';
import Container from '@/components/site/Container';
import { BRAND } from '@/lib/site';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomeHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0.2]);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (reduce) v.pause();
    else v.play().catch(() => {});
  }, [reduce]);

  const line = (d = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 30, filter: 'blur(6px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 1.3, ease: EASE, delay: d },
  });

  return (
    <section ref={ref} data-header="night" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-night pb-20 md:items-center md:pb-0">
      {/* 휴대폰: 영상을 키우고 위로 올려 금실 매듭이 제목 위쪽에 오도록 */}
      <motion.div style={{ y }} className="absolute inset-0 -z-20 max-md:top-[-30%] max-md:h-[130%]">
        <video
          ref={video}
          className="h-full w-full -scale-x-100 object-cover max-md:object-[27%_50%]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/hero-thread-poster.webp"
          aria-hidden
        >
          <source src="/media/hero-thread-sm.webm" type="video/webm" media="(max-width: 767px)" />
          <source src="/media/hero-thread-sm.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/media/hero-thread.webm" type="video/webm" />
          <source src="/media/hero-thread.mp4" type="video/mp4" />
        </video>
      </motion.div>
      {/* 먹빛 덮개: 글자가 읽히도록 왼쪽과 아래를 눌러 준다 */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,3,26,.92)_0%,rgba(7,3,26,.66)_42%,rgba(7,3,26,.12)_78%),linear-gradient(180deg,rgba(7,3,26,.55)_0%,transparent_28%,transparent_62%,rgba(7,3,26,1)_100%)]"
        aria-hidden
      />
      {/* 휴대폰: 글자가 놓이는 아래쪽을 한 번 더 눌러 금실 꼬리가 글자를 가리지 않게 */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_0%,transparent_30%,rgba(7,3,26,.5)_42%,rgba(7,3,26,.78)_56%,rgba(7,3,26,.9)_100%)] md:hidden"
        aria-hidden
      />

      <Container className="relative pt-32">
        <motion.div style={{ opacity: fade }}>
          <motion.p {...line(0.1)} className="eyebrow text-[var(--color-champagne)]">
            YMDT · Makers of HANI
          </motion.p>
          <h1 className="mt-7 font-display text-[clamp(3.1rem,7.5vw,7rem)] leading-[1.06] font-normal tracking-[-0.035em] text-paper">
            <motion.span {...line(0.2)} className="block">
              {BRAND.line1}
            </motion.span>
            <motion.span {...line(0.34)} className="block">
              {BRAND.line2.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-[var(--color-champagne)]">{BRAND.line2.split(' ').at(-1)}</span>
            </motion.span>
          </h1>
          <motion.p {...line(0.5)} className="mt-8 max-w-[34rem] text-[17px] leading-[1.8] text-white/72 md:text-[19px]">
            {BRAND.definition} {BRAND.products}
          </motion.p>
          <motion.div {...line(0.62)} className="mt-11 flex flex-wrap gap-3">
            <Button href="/matchos/" variant="light" arrow size="lg">
              HANI MatchOS
            </Button>
            <Button href="/hani-app/" variant="outline-light" arrow size="lg">
              HANI 앱
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* 스크롤 안내: 아래로 흐르는 금실 */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex" aria-hidden>
        <span className="eyebrow text-[10px] text-white/40">Scroll</span>
        <span className="relative block h-14 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-x-0 top-0 h-5 animate-[scrollcue_2.4s_var(--ease-ink)_infinite] bg-[var(--color-champagne)]" />
        </span>
      </div>
    </section>
  );
}
