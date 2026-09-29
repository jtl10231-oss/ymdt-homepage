'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

export default function CountUp({
  to,
  from = 0,
  duration = 1.6,
  className,
  format = (n: number) => Math.round(n).toLocaleString('ko-KR'),
}: {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : from);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(from, to, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: setVal });
    return () => c.stop();
  }, [inView, reduce, from, to, duration]);
  return (
    <span ref={ref} className={className}>
      {format(reduce ? to : val)}
    </span>
  );
}
