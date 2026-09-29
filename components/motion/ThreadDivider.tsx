'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';

// 금실 이음선: 섹션과 섹션 사이를 한 가닥의 실이 꿰매듯 이어진다. 스크롤에 맞춰 그려진다.
export default function ThreadDivider({
  className,
  tone = 'gold',
  height = 160,
  flip = false,
}: {
  className?: string;
  tone?: 'gold' | 'plum' | 'paper';
  height?: number;
  flip?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 90%', 'end 45%'] });
  const len = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const knot = useTransform(scrollYProgress, [0.75, 1], [0, 1]);
  const color =
    tone === 'gold' ? 'var(--color-champagne)' : tone === 'plum' ? 'var(--color-brand-accent)' : 'rgba(255,254,251,.6)';
  const d = flip
    ? 'M40 0 C 40 40, 8 50, 12 90 S 40 140, 40 160'
    : 'M40 0 C 40 40, 72 50, 68 90 S 40 140, 40 160';
  return (
    <div ref={ref} className={cn('pointer-events-none flex justify-center', className)} aria-hidden>
      <svg width="80" height={height} viewBox="0 0 80 160" preserveAspectRatio="none" fill="none">
        <path d={d} stroke={color} strokeOpacity="0.18" strokeWidth="1" />
        <motion.path d={d} stroke={color} strokeWidth="1.4" strokeLinecap="round" style={{ pathLength: reduce ? 1 : len }} />
        <motion.circle cx="40" cy="156" r="3.2" fill={color} style={{ opacity: reduce ? 1 : knot, scale: reduce ? 1 : knot }} />
      </svg>
    </div>
  );
}
