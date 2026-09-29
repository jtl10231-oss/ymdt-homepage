import Link from 'next/link';
import YmdtLogo from '@/components/brand/YmdtLogo';
import HaniWordmark from '@/components/brand/HaniWordmark';
import { BRAND, CONTACT_EMAIL, mailto } from '@/lib/site';

export default function Footer() {
  return (
    <footer data-header="night" className="relative bg-night text-white/60">
      <div className="hairline-gold opacity-40" />
      <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-12">
        <div>
          <YmdtLogo tone="paper" />
          <p className="mt-6 font-display text-[19px] leading-snug text-paper/90">{BRAND.slogan}</p>
          <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-white/50">{BRAND.definition}</p>
        </div>
        <div>
          <p className="eyebrow text-white/35">Products</p>
          <ul className="mt-5 space-y-3 text-[14.5px]">
            <li><Link className="hover:text-white" href="/matchos/">HANI MatchOS</Link></li>
            <li><Link className="hover:text-white" href="/hani-app/">HANI 앱</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-white/35">Company</p>
          <ul className="mt-5 space-y-3 text-[14.5px]">
            <li><Link className="hover:text-white" href="/#principles">우리가 지키는 원칙</Link></li>
            <li><Link className="hover:text-white" href="/#contact">문의</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-white/35">Contact</p>
          <a className="mt-5 block text-[14.5px] text-white/80 hover:text-white" href={mailto('YMDT 문의')}>
            {CONTACT_EMAIL}
          </a>
          <p className="mt-2 text-[13px] text-white/40">도입 상담 · 제품 시연</p>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start justify-between gap-4 border-t border-white/8 px-5 py-7 text-[12.5px] text-white/35 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <span>© 2026 YMDT. All rights reserved.</span>
        <HaniWordmark height={12} className="text-white/35" accent="var(--color-champagne)" />
      </div>
    </footer>
  );
}
