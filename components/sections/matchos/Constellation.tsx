'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import MandarinDucks from '@/components/brand/MandarinDucks';
import { cn } from '@/lib/utils';

// 크로스매칭 성좌 — 우리 업체(중심)와 파트너 업체(주변)가 금실로 이어진다.
const C = 400; // 중심 좌표
const NODES = [
  { x: 205, y: 250, r: 44 },
  { x: 530, y: 145, r: 36 },
  { x: 655, y: 318, r: 44 },
  { x: 606, y: 560, r: 44 },
  { x: 372, y: 684, r: 36 },
  { x: 168, y: 505, r: 36 },
  { x: 125, y: 350, r: 30 },
];
const STARS = [
  [383, 88], [566, 222], [642, 452], [520, 628], [258, 632], [176, 438], [230, 126], [700, 190], [96, 590], [690, 660],
];

function curve(x: number, y: number, i: number) {
  // 중심에서 노드까지 부드럽게 휘는 곡선 (교대로 방향을 바꾼다)
  const mx = (C + x) / 2;
  const my = (C + y) / 2;
  const dx = y - C;
  const dy = -(x - C);
  const k = (i % 2 === 0 ? 1 : -1) * 0.22;
  return `M${C} ${C} Q${mx + dx * k} ${my + dy * k} ${x} ${y}`;
}

function People({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x - 13 * s} ${y - 11 * s}) scale(${s})`} fill="none" stroke="var(--color-champagne)" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="9" cy="6" r="3.6" />
      <circle cx="18.5" cy="7.5" r="3" />
      <path d="M2.5 21c0-4.2 2.9-7.2 6.5-7.2s6.5 3 6.5 7.2" />
      <path d="M16.6 13.8c3.4-.2 6.4 2.5 6.4 7" />
    </g>
  );
}

export default function Constellation({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className={cn('relative mx-auto aspect-square w-full max-w-[760px]', className)}>
      <svg viewBox="0 0 800 800" className="absolute inset-0 h-full w-full" role="img" aria-label="우리 업체를 중심으로 파트너 업체들이 연결된 크로스매칭 네트워크">
        <defs>
          <radialGradient id="cst-core" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#3a0a63" />
            <stop offset="100%" stopColor="#1c0733" />
          </radialGradient>
          <radialGradient id="cst-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(200,176,138,.28)" />
            <stop offset="100%" stopColor="rgba(200,176,138,0)" />
          </radialGradient>
        </defs>

        {/* 궤도 */}
        {[150, 250, 330].map((r, i) => (
          <motion.circle
            key={r}
            cx={C}
            cy={C}
            r={r}
            fill="none"
            stroke="rgba(255,255,255,.12)"
            strokeWidth="1"
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: '400px 400px' }}
          />
        ))}

        <circle cx={C} cy={C} r="210" fill="url(#cst-glow)" />

        {/* 금실 연결 */}
        {NODES.map((n, i) => (
          <motion.path
            key={`l${i}`}
            d={curve(n.x, n.y, i)}
            fill="none"
            stroke="var(--color-champagne)"
            strokeWidth={hover === i ? 2 : 1.2}
            strokeOpacity={hover === null || hover === i ? 0.85 : 0.3}
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, delay: 0.5 + i * 0.12, ease: [0.65, 0, 0.35, 1] }}
            style={{ transition: 'stroke-opacity .4s, stroke-width .4s' }}
          />
        ))}

        {/* 연결을 따라 오가는 소개 요청 */}
        {!reduce &&
          NODES.map((n, i) => (
            <circle key={`p${i}`} r="2.6" fill="#f3e3c2" opacity="0.9">
              <animateMotion dur={`${7 + (i % 3) * 1.6}s`} begin={`${2 + i * 0.7}s`} repeatCount="indefinite" path={curve(n.x, n.y, i)} keyPoints={i % 2 ? '0;1;0' : '1;0;1'} keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
            </circle>
          ))}

        {/* 별 */}
        {STARS.map(([x, y], i) => (
          <circle key={`s${i}`} cx={x} cy={y} r={i % 3 === 0 ? 3.4 : 2.4} fill="var(--color-champagne)" className={reduce ? '' : 'animate-breathe'} style={{ animationDelay: `${i * 0.6}s`, transformOrigin: `${x}px ${y}px` }} />
        ))}

        {/* 파트너 노드 */}
        {NODES.map((n, i) => (
          <motion.g
            key={`n${i}`}
            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 1.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: `${n.x}px ${n.y}px`, cursor: 'default' }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            <circle cx={n.x} cy={n.y} r={n.r + 10} fill="transparent" />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="#1d0733"
              stroke="var(--color-champagne)"
              strokeOpacity={hover === i ? 1 : 0.55}
              strokeWidth={hover === i ? 1.6 : 1}
              style={{ transition: 'stroke-opacity .4s' }}
            />
            <People x={n.x} y={n.y + 1} s={n.r / 40} />
          </motion.g>
        ))}

        {/* 중심: 우리 업체 */}
        <motion.g
          initial={reduce ? false : { opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: '400px 400px' }}
        >
          <circle cx={C} cy={C} r="104" fill="url(#cst-core)" stroke="var(--color-champagne)" strokeWidth="1.3" />
          <circle cx={C} cy={C} r="94" fill="none" stroke="rgba(200,176,138,.25)" strokeWidth="1" />
        </motion.g>
      </svg>

      {/* 중심 라벨 (HTML — 한글 활자 품질) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 flex w-[26%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
        <MandarinDucks className="w-[62%] text-[var(--color-champagne)]" />
        <span className="mt-[6%] font-display text-[clamp(15px,2.6vw,22px)] font-semibold text-paper">우리 업체</span>
        <span className="mt-0.5 text-[clamp(10px,1.5vw,13px)] tracking-[0.12em] text-white/55">자사 회원</span>
      </div>

      <span className="pointer-events-none absolute left-[3%] top-[23%] text-[12px] tracking-[0.18em] text-white/45 sm:text-[13px]">파트너 업체</span>
      <span className="pointer-events-none absolute bottom-[21%] right-[2%] text-[12px] tracking-[0.18em] text-white/45 sm:text-[13px]">파트너 업체</span>
    </div>
  );
}
