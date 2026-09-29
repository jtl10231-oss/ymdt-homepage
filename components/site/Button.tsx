import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'gold' | 'outline' | 'ghost' | 'light' | 'outline-light';

const base =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-hani-btn px-6 h-12 text-[15px] font-semibold tracking-[0.01em] transition-[transform,box-shadow,background-color,color] duration-300 ease-hani active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4';

const variants: Record<Variant, string> = {
  primary:
    'text-paper bg-[linear-gradient(180deg,#520a99_0%,#440382_55%,#38026b_100%)] shadow-hani-btn hover:shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_16px_30px_-14px_rgba(46,2,87,.75)]',
  gold: 'text-night bg-[linear-gradient(180deg,#dcc59a_0%,#c8b08a_60%,#b99c6e_100%)] shadow-hani-gold hover:brightness-105',
  outline: 'text-ink border border-line-strong bg-paper/60 hover:border-ink hover:bg-paper',
  ghost: 'text-ink hover:bg-paper-deep',
  light: 'text-brand-deep bg-paper hover:bg-white shadow-hani-card',
  'outline-light': 'text-paper border border-white/25 hover:border-white/60 hover:bg-white/5',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  className,
  arrow = false,
  external = false,
  size = 'md',
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  external?: boolean;
  size?: 'md' | 'lg';
}) {
  const cls = cn(base, variants[variant], size === 'lg' && 'h-14 px-8 text-base', className);
  const inner = (
    <>
      {/* 잉크 번짐 */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 scale-50 rounded-[inherit] bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,.22),transparent_65%)] opacity-0 transition-[opacity,transform] duration-500 ease-hani group-hover:scale-100 group-hover:opacity-100"
      />
      <span className="relative">{children}</span>
      {arrow && (
        <svg
          aria-hidden
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="relative transition-transform duration-300 ease-hani group-hover:translate-x-1"
        >
          <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );
  if (external || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a href={href} className={cls} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
