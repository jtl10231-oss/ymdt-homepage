import Link from 'next/link';
import YmdtLogo from '@/components/brand/YmdtLogo';
import HaniWordmark from '@/components/brand/HaniWordmark';
import { BRAND, BUSINESS, COMPANY_LEGAL_NAME, CONTACT_EMAIL, FTC_LOOKUP_URL, SUPPORT_PATH, mailto } from '@/lib/site';

function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex gap-2">
      <dt className="shrink-0 text-white/45">{label}</dt>
      <dd className="text-white/70">{value}</dd>
    </div>
  );
}

export default function Footer() {
  return (
    <footer data-header="night" className="relative bg-night text-white/60">
      <div className="hairline-gold opacity-40" />
      <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.6fr_1fr_1fr] lg:px-12">
        <div>
          <YmdtLogo tone="paper" />
          <p className="mt-6 font-display text-[19px] leading-snug text-paper/90">{BRAND.slogan}</p>
          <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-white/50">{BRAND.definition}</p>
        </div>
        <div>
          <p className="eyebrow text-white/35">Products</p>
          <ul className="mt-5 space-y-3 text-[14.5px]">
            <li><Link className="hover:text-white" href="/hani-app/">HANI 앱</Link></li>
            <li><Link className="hover:text-white" href="/matchos/">HANI MatchOS</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-white/35">Contact</p>
          <a className="mt-5 block text-[14.5px] text-white/80 hover:text-white" href={mailto('YMDT 문의')}>
            {CONTACT_EMAIL}
          </a>
          <p className="mt-2 text-[13px] text-white/40">도입 상담 · 제품 시연</p>
          <Link className="mt-5 inline-block text-[14.5px] hover:text-white" href={SUPPORT_PATH}>
            HANI 앱 고객지원
          </Link>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1320px] border-t border-white/8 px-5 py-8 sm:px-8 lg:px-12">
        <h2 className="sr-only">사업자 정보</h2>
        <dl className="flex flex-wrap gap-x-7 gap-y-2 text-[12.5px] leading-relaxed">
          <Info label="상호" value={COMPANY_LEGAL_NAME} />
          <Info label="대표자" value={BUSINESS.ceo} />
          <Info label="사업자등록번호" value={BUSINESS.bizNo} />
          <Info
            label="통신판매업 신고번호"
            value={
              <>
                {BUSINESS.mailOrderNo}
                <a
                  href={FTC_LOOKUP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 underline decoration-white/25 underline-offset-2 hover:text-white hover:decoration-white/60"
                >
                  사업자정보확인
                </a>
              </>
            }
          />
          <Info label="주소" value={BUSINESS.address} />
          <Info label="전화" value={<a className="hover:text-white" href={`tel:${BUSINESS.phone.replace(/-/g, '')}`}>{BUSINESS.phone}</a>} />
          <Info label="이메일" value={<a className="hover:text-white" href={mailto('YMDT 문의')}>{CONTACT_EMAIL}</a>} />
        </dl>
        <div className="mt-7 flex flex-col items-start justify-between gap-4 text-[12.5px] text-white/45 sm:flex-row sm:items-center">
          <span>© 2026 {COMPANY_LEGAL_NAME}. All rights reserved.</span>
          <HaniWordmark height={12} className="text-white/35" accent="var(--color-champagne)" />
        </div>
      </div>
    </footer>
  );
}
