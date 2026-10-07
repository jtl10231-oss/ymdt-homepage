'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

/** 이메일 주소 복사 버튼 — 메일 앱이 없는 PC에서도 바로 쓸 수 있게 */
export default function CopyEmail({ email, className }: { email: string; className?: string }) {
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => void (timer.current && clearTimeout(timer.current)), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // 클립보드 권한이 없는 환경: 임시 입력칸으로 복사
      const el = document.createElement('textarea');
      el.value = email;
      el.setAttribute('readonly', '');
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setDone(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setDone(false), 2200);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        'group relative inline-flex h-12 items-center justify-center gap-2 rounded-hani-btn border border-line-strong bg-paper/60 px-6 text-[15px] font-semibold tracking-[0.01em] text-ink transition-colors duration-300 hover:border-ink hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-4 active:translate-y-px',
        className,
      )}
    >
      <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-ink-sub">
        {done ? (
          <path d="M3 8.5l3.2 3.2L13 4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <>
            <rect x="5.5" y="5.5" width="8" height="8" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
            <path d="M10.5 3.2V3A1.5 1.5 0 0 0 9 1.5H3A1.5 1.5 0 0 0 1.5 3v6A1.5 1.5 0 0 0 3 10.5h.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </>
        )}
      </svg>
      <span>{done ? '복사했어요' : '주소 복사'}</span>
      <span className="sr-only" role="status" aria-live="polite">
        {done ? '이메일 주소를 복사했습니다' : ''}
      </span>
    </button>
  );
}
