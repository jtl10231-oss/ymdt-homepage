'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import BrowserFrame from '@/components/frames/BrowserFrame';
import PhoneFrame from '@/components/frames/PhoneFrame';
import { cn } from '@/lib/utils';

type Visual = 'crm' | 'match' | 'intro' | 'app';

const STEPS: {
  en: string;
  ko: string;
  title: React.ReactNode;
  body: string;
  points: { k: string; t: string }[];
  visual: Visual;
}[] = [
  {
    en: 'Member Management',
    ko: '회원관리 CRM',
    title: (
      <>
        옮겨 적는 일은 줄이고
        <br />
        회원에게 더 집중하세요
      </>
    ),
    body: '회원이 앱에서 직접 작성한 프로필·사진·상담 정보가 담당자의 다음 업무로 이어집니다.',
    points: [
      { k: '프로필·사진', t: '회원이 직접 작성' },
      { k: '접수·검토', t: '담당자가 확인' },
      { k: '회원 전환', t: 'CRM 업무로 연결' },
    ],
    visual: 'crm',
  },
  {
    en: 'Matching & Comparison',
    ko: '매칭 검색·비교',
    title: (
      <>
        찾는 시간은 짧게
        <br />
        소개할 이유는 분명하게
      </>
    ),
    body: '조건·가치관·이상형을 한 화면에서 함께 비교합니다. 후보를 정리하는 건 시스템, 최종 소개를 결정하는 건 매니저입니다.',
    points: [
      { k: '검색', t: '조건에 맞는 후보를 찾고' },
      { k: '비교', t: '차이를 같은 화면에서' },
      { k: '소개 제안', t: '회원의 의사와 함께' },
    ],
    visual: 'match',
  },
  {
    en: 'Introduction Care',
    ko: '소개 진행 관리',
    title: (
      <>
        보낸 소개부터
        <br />
        양쪽의 응답까지
      </>
    ),
    body: '누구의 답변을 기다리는지 한 건의 소개 안에서 확인합니다. 소개를 보내는 데서 끝내지 않고, 응답과 진행 기록을 이어서 관리합니다.',
    points: [
      { k: '제안 발송', t: '매니저가 소개를 보내고' },
      { k: '응답 대기', t: '양쪽의 답을 기다리며' },
      { k: '다음 일정', t: '확정된 만남으로' },
    ],
    visual: 'intro',
  },
  {
    en: 'Member Experience',
    ko: '회원 전용 앱',
    title: (
      <>
        회원에게 보이는
        <br />
        관리받는 경험
      </>
    ),
    body: '사진 몇 장을 전달하는 것을 넘어, 담당자가 있는 서비스로. 내 소개가 어떻게 진행되는지 회원도 흐름을 확인합니다.',
    points: [
      { k: '작성', t: '나의 프로필' },
      { k: '확인', t: '소개와 일정' },
      { k: '소통', t: '담당자와 상담' },
    ],
    visual: 'app',
  },
];

function VisualStage({ v, priority = false }: { v: Visual; priority?: boolean }) {
  if (v === 'crm')
    return (
      <div className="relative pb-[10%] pl-[12%]">
        <BrowserFrame screenKey="crm-detail" alt="MatchOS 회원 관리 CRM 화면" priority={priority} />
        <PhoneFrame screenKey="m-profile" alt="회원이 앱에서 프로필을 작성하는 화면" className="absolute bottom-0 left-0 w-[27%]" />
      </div>
    );
  if (v === 'match') return <BrowserFrame screenKey="match-candidate" alt="MatchOS 매칭 검색과 후보 비교 화면" priority={priority} />;
  if (v === 'intro')
    return (
      <div className="relative pr-[14%] pb-[8%]">
        <BrowserFrame screenKey="intro-care" alt="MatchOS 소개 관리 화면: 두 회원의 응답 상태" />
        <PhoneFrame screenKey="m-proposals" alt="회원 앱에서 받은 소개를 확인하는 화면" className="absolute right-0 bottom-0 w-[27%]" />
      </div>
    );
  return (
    <div className="relative mx-auto flex max-w-[640px] items-end justify-center py-[4%]">
      <PhoneFrame screenKey="m-schedule" alt="회원 앱 내 일정 화면" className="w-[31%] translate-x-[18%] translate-y-[6%] -rotate-[5deg] opacity-95" />
      <PhoneFrame screenKey="m-home" alt="회원 앱 홈 화면" className="relative z-10 w-[36%]" />
      <PhoneFrame screenKey="m-care" alt="회원 앱 상담센터 화면" className="w-[31%] -translate-x-[18%] translate-y-[6%] rotate-[5deg] opacity-95" />
    </div>
  );
}

export default function FeatureStory() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  const reduce = useReducedMotion();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.idx));
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:gap-14 xl:gap-20">
      {/* 왼쪽: 이야기 */}
      <div className="relative">
        {/* 금실 진행선 */}
        <div className="absolute top-0 bottom-0 left-[7px] hidden w-px bg-line lg:block" aria-hidden>
          <motion.div
            className="w-px origin-top bg-[var(--color-champagne)]"
            animate={{ height: `${((active + 1) / STEPS.length) * 100}%` }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        {STEPS.map((s, i) => (
          <article
            key={s.en}
            data-idx={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="relative py-14 lg:flex lg:min-h-[86vh] lg:flex-col lg:justify-center lg:py-0 lg:pl-12"
          >
            <span
              aria-hidden
              className={cn(
                'absolute top-1/2 left-0 hidden size-[15px] -translate-y-1/2 rounded-full border transition-all duration-500 lg:block',
                i <= active ? 'border-[var(--color-champagne)] bg-[var(--color-champagne)]' : 'border-line-strong bg-paper',
              )}
            />
            <p className="flex items-center gap-3 text-ink-muted">
              <span className="font-display text-[15px] text-brand-accent">0{i + 1}</span>
              <span className="eyebrow">{s.en}</span>
            </p>
            <h3 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.22] font-normal tracking-[-0.02em] text-ink">
              {s.title}
            </h3>
            <p className="mt-5 max-w-md text-[16.5px] leading-[1.8] text-ink-sub">{s.body}</p>
            <ol className="mt-8 grid max-w-md grid-cols-3 border-t border-line">
              {s.points.map((p, j) => (
                <li key={p.k} className={cn('pt-4 pr-3', j > 0 && 'border-l border-line pl-3')}>
                  <p className="text-[14.5px] font-semibold text-ink">{p.k}</p>
                  <p className="mt-1 text-[12.5px] leading-snug text-ink-muted">{p.t}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12 lg:hidden">
              <VisualStage v={s.visual} />
            </div>
          </article>
        ))}
      </div>

      {/* 오른쪽: 고정 무대 */}
      <div className="hidden lg:block">
        <div className="sticky top-[14vh] flex h-[72vh] items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="w-full"
              initial={reduce ? false : { opacity: 0, y: 26, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: -18, scale: 0.99 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <VisualStage v={STEPS[active].visual} priority={active === 0} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
