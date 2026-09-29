'use client';

import { motion, useReducedMotion } from 'motion/react';
import CountUp from '@/components/motion/CountUp';

const BARS = [
  { n: 200, label: '자사 1곳', sub: '기존 자사 회원', tone: 'soft' },
  { n: 1000, label: '자사 포함 5곳', sub: '네트워크 규모 5배', tone: 'soft' },
  { n: 4000, label: '자사 포함 20곳', sub: '네트워크 규모 20배', tone: 'gold' },
] as const;

// 200 → 1,000 → 4,000 : 회원 200명씩 보유한 업체가 연결된다면
export default function PoolChart() {
  const reduce = useReducedMotion();
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12">
      {BARS.map((b, i) => {
        const pct = Math.max(3, (b.n / 4000) * 68);
        const gold = b.tone === 'gold';
        return (
          <div key={b.n} className="flex flex-col">
            <div className="relative flex h-[260px] flex-col justify-end sm:h-[340px] md:h-[380px]">
              <div className="mb-3 text-center">
                <CountUp
                  to={b.n}
                  duration={1.4 + i * 0.4}
                  className={`block font-display text-[clamp(2rem,6.4vw,5rem)] leading-none font-normal tracking-[-0.03em] ${gold ? 'text-[var(--color-champagne)]' : 'text-paper'}`}
                />
                <span className="mt-2 block text-[13px] text-white/55">명</span>
              </div>
              <motion.div
                className={`mx-auto w-[78%] origin-bottom rounded-t-[3px] ${
                  gold
                    ? 'bg-[linear-gradient(180deg,#d8c29a_0%,#b39a72_100%)] shadow-[0_0_60px_-10px_rgba(200,176,138,.55)]'
                    : 'bg-[#ddd2fb]'
                }`}
                style={{ height: `${pct}%` }}
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2 + i * 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.15 * i }}
              />
            </div>
            <div className="border-t border-white/15 pt-5 text-center">
              <p className="text-[15px] font-semibold text-paper sm:text-[17px]">{b.label}</p>
              <p className="mt-1.5 text-[12.5px] text-white/55 sm:text-[14px]">{b.sub}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
