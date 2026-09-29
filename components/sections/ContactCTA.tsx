import { CONTACT_EMAIL, asset, mailto } from '@/lib/site';
import Container from '@/components/site/Container';
import Button from '@/components/site/Button';
import Reveal from '@/components/motion/Reveal';
import MandarinDucks from '@/components/brand/MandarinDucks';
import { cn } from '@/lib/utils';

// 밤빛 비단 위 금실 — 문의 섹션 (두 페이지 공용)
export default function ContactCTA({
  eyebrow = 'Partner, not competitor',
  title,
  lead,
  subject = 'HANI 도입 상담',
  children,
  id = 'contact',
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  subject?: string;
  children?: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} data-header="night" className={cn('relative isolate overflow-hidden bg-night py-28 md:py-40', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset('/images/thread-night.webp')} alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(9,3,24,.92)_0%,rgba(9,3,24,.55)_45%,rgba(9,3,24,.94)_100%)]" aria-hidden />
      <Container className="text-center">
        <Reveal>
          <MandarinDucks className="mx-auto w-28 text-[var(--color-champagne)] md:w-36" />
          <p className="eyebrow mt-10 text-white/45">{eyebrow}</p>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.3rem,5.4vw,4.8rem)] leading-[1.2] font-normal tracking-[-0.025em] text-paper">
            {title}
          </h2>
          {lead && <p className="mx-auto mt-7 max-w-xl text-[17px] leading-[1.8] text-white/65 md:text-lg">{lead}</p>}
        </Reveal>
        {children}
        <Reveal className="mx-auto mt-14 max-w-xl rounded-hani-lg border border-white/12 bg-white/[.04] px-6 py-8 backdrop-blur-sm md:px-10" delay={0.1}>
          <p className="text-[15px] font-bold text-paper">도입 상담 · 제품 시연</p>
          <a
            href={mailto(subject)}
            className="mt-5 block rounded-hani-btn bg-paper px-6 py-4 font-display text-[clamp(1.4rem,3.4vw,2rem)] text-brand-deep transition-transform duration-300 ease-hani hover:-translate-y-0.5"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-4 text-[13.5px] text-white/50">지금 바로 HANI와 함께 시작하세요</p>
        </Reveal>
        <div className="mt-10 flex justify-center">
          <Button href={mailto(subject)} variant="gold" arrow>
            메일로 상담 요청하기
          </Button>
        </div>
      </Container>
    </section>
  );
}
