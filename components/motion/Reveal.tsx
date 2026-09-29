'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as const;

// 조용한 등장: 투명도 + 짧은 상승. 모션 감소 설정이면 바로 보인다.
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  as = 'div',
  amount = 0.25,
  ...rest
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'span' | 'p' | 'h2' | 'h3' | 'figure' | 'article';
  amount?: number;
} & Omit<HTMLMotionProps<'div'>, 'children'>) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.85, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function Stagger({
  children,
  className,
  gap = 0.08,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, y = 18 }: { children: React.ReactNode; className?: string; y?: number }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
