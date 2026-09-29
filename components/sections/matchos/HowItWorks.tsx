'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Users } from 'lucide-react';
import Container from '@/components/site/Container';
import SectionHead from '@/components/site/SectionHead';
import Reveal from '@/components/motion/Reveal';

const STEPS = [
  { t: '후보 검토', d: '조건에 맞는 후보를 찾아 비교합니다' },
  { t: '매니저 협의', d: '소개 가능 여부와 공개 범위를 확인합니다' },
  { t: '양쪽 의사 확인', d: '두 회원의 소개 의사를 확인합니다' },
  { t: '소개 진행', d: '합의된 소개와 다음 일정으로 이어갑니다' },
];

export default function HowItWorks() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] });
  const h = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="bg-paper py-24 md:py-36">
      <Container>
        <SectionHead
          en="How Cross-Matching Works"
          ko="매칭풀 확장을 소개로"
          title={
            <>
              정보는 신중하게
              <br />
              소개는 더 넓게
            </>
          }
          lead="후보를 찾은 뒤에도 매니저의 협의와 두 회원의 의사가 중요합니다"
        />
        <Reveal className="mt-14 grid items-center gap-6 rounded-hani-xl bg-lavender px-7 py-10 md:mt-20 md:grid-cols-[1fr_auto_1fr] md:px-12">
          <div className="flex items-center gap-5">
            <Users size={40} strokeWidth={1.3} className="shrink-0 text-brand-accent" aria-hidden />
            <div>
              <p className="text-[21px] font-bold text-ink md:text-[24px]">우리 업체</p>
              <p className="mt-1 text-[15px] text-ink-sub">우리 회원과 담당 매니저</p>
            </div>
          </div>
          <svg className="mx-auto rotate-90 text-[#b8a582] md:rotate-0" width="84" height="10" viewBox="0 0 84 10" fill="none" aria-hidden>
            <path d="M0 5h80M76 1.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
          <div className="flex items-center gap-5 md:flex-row-reverse md:text-right">
            <Users size={40} strokeWidth={1.3} className="shrink-0 text-brand-accent" aria-hidden />
            <div>
              <p className="text-[21px] font-bold text-ink md:text-[24px]">파트너 업체</p>
              <p className="mt-1 text-[15px] text-ink-sub">협업 후보와 담당 매니저</p>
            </div>
          </div>
        </Reveal>

        <ol ref={ref} className="relative mt-16 space-y-12 md:mt-20 md:space-y-16">
          <span className="absolute top-8 bottom-8 left-[31px] w-px bg-line" aria-hidden />
          <motion.span
            className="absolute top-8 left-[31px] w-px origin-top bg-[var(--color-champagne)]"
            style={{ height: reduce ? 'calc(100% - 64px)' : h, maxHeight: 'calc(100% - 64px)' }}
            aria-hidden
          />
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.t} className="relative flex items-start gap-7 md:gap-10" delay={i * 0.05}>
              <span className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full border border-[#b8a582] bg-paper font-display text-[19px] text-brand-accent">
                0{i + 1}
              </span>
              <div className="pt-2">
                <h3 className="text-[clamp(1.35rem,2.4vw,1.8rem)] font-bold text-ink">{s.t}</h3>
                <p className="mt-2 text-[16px] text-ink-sub md:text-[17px]">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-14">
          <span className="inline-flex rounded-full bg-lavender px-5 py-2.5 text-[14.5px] font-bold text-brand">더 넓은 매칭풀 + 동의 기반의 협업</span>
        </Reveal>
      </Container>
    </section>
  );
}
