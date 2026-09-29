'use client';

import { motion, useReducedMotion } from 'motion/react';
import SealMark from '@/components/brand/SealMark';

// 인장 스탬프: 화면에 들어오면 0.5초 오버슈트로 한 번 찍힌다. 반복·회전 없음.
export default function Stamp({
  size = 56,
  variant = 'solid',
  className,
  delay = 0.2,
}: {
  size?: number;
  variant?: 'solid' | 'outline' | 'gold';
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={className}
      style={{ display: 'inline-block' }}
      initial={reduce ? false : { opacity: 0, scale: 1.45, filter: 'blur(2px)' }}
      whileInView={{ opacity: 1, scale: [1.45, 0.94, 1], filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, delay, times: [0, 0.7, 1], ease: 'easeOut' }}
    >
      <SealMark size={size} variant={variant} />
    </motion.span>
  );
}
