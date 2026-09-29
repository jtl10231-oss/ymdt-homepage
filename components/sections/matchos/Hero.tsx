'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import BrowserFrame from '@/components/frames/BrowserFrame';
import PhoneFrame from '@/components/frames/PhoneFrame';
import MandarinDucks from '@/components/brand/MandarinDucks';
import HaniMatchosLogo from '@/components/brand/HaniMatchosLogo';
import Button from '@/components/site/Button';
import Container from '@/components/site/Container';
import { mailto } from '@/lib/site';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function MatchosHero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const rotateX = useTransform(scrollYProgress, [0, 0.45], [reduce ? 0 : 14, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [reduce ? 1 : 0.94, 1]);
  const phoneY = useTransform(scrollYProgress, [0, 0.6], [reduce ? 0 : 80, reduce ? 0 : -20]);

  const line = (d = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: EASE, delay: d },
  });

  return (
    <section ref={ref} className="relative">
      <div className="paper-grain relative overflow-hidden bg-paper-subtle pt-28 md:pt-36">
        <Container className="relative">
          <motion.div {...line(0)}>
            <HaniMatchosLogo size="lg" />
          </motion.div>
          <motion.span
            {...line(0.04)}
            className="mt-8 inline-flex rounded-full bg-brand-subtle-hover/70 px-4 py-2 text-[13.5px] font-semibold text-brand"
          >
            결혼정보업체 전용 CRM·매칭 플랫폼
          </motion.span>
          <h1 className="mt-8 font-display text-[clamp(3rem,8.4vw,7.6rem)] leading-[1.08] font-normal tracking-[-0.035em] text-ink">
            <motion.span {...line(0.08)} className="block">
              운영은 하나로
            </motion.span>
            <motion.span {...line(0.18)} className="block">
              매칭풀은 <span className="text-brand">더 크게</span>
            </motion.span>
          </h1>
          <motion.p {...line(0.3)} className="mt-8 max-w-xl text-[18px] leading-[1.75] text-ink-sub md:text-xl">
            우리 회원만으로 찾던 매칭을
            <br className="sm:hidden" /> 파트너 업체의 후보까지.
          </motion.p>
          <motion.div {...line(0.4)} className="mt-10 flex flex-wrap gap-3">
            <Button href={mailto('HANI MatchOS 도입 상담')} arrow size="lg">
              도입 상담 받기
            </Button>
            <Button href="#features" variant="outline" size="lg">
              제품 살펴보기
            </Button>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.5 }}
            className="pointer-events-none absolute right-8 top-6 hidden w-[20%] max-w-[260px] text-[#b8a582] lg:block xl:right-12"
          >
            <MandarinDucks />
          </motion.div>
        </Container>

        {/* 브로셔 표지의 물결 */}
        <svg className="relative mt-20 block h-[90px] w-full md:mt-28 md:h-[140px]" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden>
          <path d="M0 40 C 320 150, 620 0, 900 60 S 1300 110, 1440 30 L1440 140 L0 140 Z" fill="var(--color-night)" />
          <path d="M0 22 C 320 132, 620 -18, 900 42 S 1300 92, 1440 12" fill="none" stroke="var(--color-champagne)" strokeOpacity=".7" strokeWidth="1.2" />
        </svg>
      </div>

      <div data-header="night" className="bg-night-sky relative pb-24 md:pb-36">
        <Container className="relative -mt-[70px] md:-mt-[110px]">
          <div className="[perspective:1800px]">
            <motion.div style={{ rotateX, scale, transformOrigin: 'center top' }} className="relative">
              <BrowserFrame screenKey="match-candidate" alt="HANI MatchOS 매칭 검색 화면 — 기준 회원과 후보를 나란히 비교" priority tone="night" />
              <motion.div style={{ y: phoneY }} className="absolute -right-2 bottom-[-8%] w-[20%] min-w-[92px] sm:-right-4 md:right-[-3%]">
                <PhoneFrame screenKey="m-home" alt="HANI 회원 전용 앱 홈 화면" priority />
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-24 grid gap-10 md:mt-32 md:grid-cols-[1.2fr_1fr] md:items-end">
            <h2 className="font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.25] font-normal tracking-[-0.02em] text-paper">
              회원관리는 한곳에서
              <br />
              <span className="text-[var(--color-champagne)]">소개할 기회는 더 넓게</span>
            </h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[15px] text-white/70 md:justify-end md:text-[16px]">
              {['회원관리 CRM', '크로스매칭', '회원 전용 앱'].map((t, i) => (
                <li key={t} className="flex items-center gap-6">
                  {i > 0 && <span className="text-white/25">/</span>}
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
