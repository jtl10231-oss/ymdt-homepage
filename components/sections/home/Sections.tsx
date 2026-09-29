import Link from 'next/link';
import Container from '@/components/site/Container';
import SectionHead, { EditorialBar } from '@/components/site/SectionHead';
import Button from '@/components/site/Button';
import Reveal, { Stagger, StaggerItem } from '@/components/motion/Reveal';
import Stamp from '@/components/motion/Stamp';
import CountUp from '@/components/motion/CountUp';
import BrowserFrame from '@/components/frames/BrowserFrame';
import PhoneFrame from '@/components/frames/PhoneFrame';
import MandarinDucks from '@/components/brand/MandarinDucks';
import HaniAppIcon from '@/components/brand/HaniAppIcon';
import HaniWordmark from '@/components/brand/HaniWordmark';
import HaniMatchosLogo from '@/components/brand/HaniMatchosLogo';

function ArrowLink({ children, tone = 'ink' }: { children: React.ReactNode; tone?: 'ink' | 'paper' }) {
  return (
    <span className={`inline-flex items-center gap-2 text-[15px] font-semibold ${tone === 'paper' ? 'text-paper' : 'text-brand'}`}>
      {children}
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden className="transition-transform duration-500 ease-hani group-hover:translate-x-1.5">
        <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* ───────── 두 개의 HANI ───────── */
export function ProductDuo() {
  return (
    <section className="paper-grain relative bg-paper-subtle pt-24 pb-24 md:pt-32 md:pb-36">
      <Container>
        <EditorialBar en="What we make" ko="YMDT가 만드는 제품" />
        <Reveal className="mt-10 md:mt-14">
          <h2 className="font-display text-[clamp(2.1rem,4.6vw,4.25rem)] leading-[1.18] font-normal tracking-[-0.025em] text-ink">
            사람을 이해하는 기술을
            <br />
            두 개의 HANI에 담았습니다
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:mt-20 lg:grid-cols-12">
          {/* MatchOS — 메인 */}
          <Reveal className="lg:col-span-7">
            <Link
              href="/matchos/"
              className="group relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-hani-xl bg-night p-8 text-paper shadow-hani-stage transition-shadow duration-700 hover:shadow-hani-float md:p-12"
            >
              <div className="bg-night-sky absolute inset-0 -z-0 opacity-90" aria-hidden />
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <p className="flex items-center gap-3">
                    <span className="font-display text-[15px] text-[var(--color-champagne)]">01</span>
                    <span className="eyebrow text-white/50">For matchmaking agencies</span>
                  </p>
                  <h3 className="mt-7">
                    <span className="sr-only">HANI MatchOS</span>
                    <HaniMatchosLogo tone="paper" size="lg" />
                  </h3>
                  <p className="mt-3 font-display text-[clamp(1.2rem,2vw,1.55rem)] text-white/80">운영은 하나로, 매칭풀은 더 크게</p>
                </div>
                <MandarinDucks className="hidden w-24 shrink-0 text-[var(--color-champagne)] opacity-80 sm:block md:w-32" />
              </div>
              <p className="relative z-10 mt-6 max-w-md text-[15.5px] leading-[1.8] text-white/60">
                결혼정보업체를 위한 회원관리 CRM, 파트너 업체와의 크로스매칭, 회원 전용 앱을 하나로 연결합니다.
              </p>
              <div className="relative z-10 mt-8">
                <ArrowLink tone="paper">MatchOS 살펴보기</ArrowLink>
              </div>
              <div className="relative z-10 mt-auto -mr-8 -mb-8 translate-y-6 pt-10 pl-6 transition-transform duration-700 ease-hani group-hover:translate-y-2 md:-mr-12 md:-mb-12 md:pl-12">
                <BrowserFrame screenKey="dashboard" alt="HANI MatchOS 매니저 대시보드" tone="night" className="rounded-br-none" />
              </div>
            </Link>
          </Reveal>

          {/* HANI 앱 — 서브 */}
          <Reveal className="lg:col-span-5" delay={0.1}>
            <Link
              href="/hani-app/"
              className="group relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-hani-xl bg-brand-subtle-alt p-8 shadow-hani-card transition-shadow duration-700 hover:shadow-hani-hover md:p-12"
            >
              <div className="absolute -right-20 -bottom-24 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(139,94,181,.28),transparent_68%)]" aria-hidden />
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <p className="flex items-center gap-3">
                    <span className="font-display text-[15px] text-brand-accent">02</span>
                    <span className="eyebrow text-ink-muted">For everyone</span>
                  </p>
                  <h3 className="mt-6 text-[clamp(2rem,3.6vw,3rem)] font-bold tracking-[-0.03em] text-ink">HANI 앱</h3>
                  <p className="mt-3 font-display text-[clamp(1.2rem,2vw,1.55rem)] text-ink-sub">
                    사주로 나를 읽고,
                    <br />
                    대화로 나를 이해하다
                  </p>
                </div>
                <HaniAppIcon size={56} className="shrink-0 rounded-[14px] shadow-hani-card" />
              </div>
              <div className="relative z-10 mt-8">
                <ArrowLink>HANI 앱 살펴보기</ArrowLink>
              </div>
              <div className="relative z-10 mt-auto flex items-end justify-between gap-2 pt-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/characters/hani-hero.webp"
                  alt="보라색 하트를 안고 있는 하니 캐릭터"
                  width={889}
                  height={1000}
                  loading="lazy"
                  className="w-[46%] max-w-[240px] animate-drift drop-shadow-[0_30px_40px_rgba(68,3,130,.18)]"
                />
                <div className="w-[44%] max-w-[210px] translate-y-10 transition-transform duration-700 ease-hani group-hover:translate-y-6">
                  <PhoneFrame screenKey="saju-insight" alt="HANI 앱 인사이트 화면" />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ───────── 결(結): 우리가 지키는 원칙 ───────── */
const PRINCIPLES = [
  {
    t: '판단은 사람이',
    d: '시스템은 후보를 정리하고, 최종 소개는 매니저와 회원이 결정합니다. 사주는 관계를 이해하도록 돕는 선택형 참고정보입니다.',
  },
  {
    t: '신뢰가 먼저',
    d: '공개 범위는 회원이 선택하고, 정보는 소개에 필요한 만큼만 전합니다. 더 넓은 매칭은 회원정보에 대한 신뢰에서 시작합니다.',
  },
  {
    t: '파트너로서',
    d: '우리는 고객사와 경쟁하지 않습니다. 회원은 고객사의 자산이고, 관계의 주도권은 고객사에 있습니다.',
  },
];

export function Principles() {
  return (
    <section id="principles" className="bg-paper py-24 md:py-36">
      <Container>
        <EditorialBar en="Our Thread · 結" ko="우리가 지키는 원칙" />
        <div className="mt-12 grid gap-14 md:mt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-hani-xl shadow-hani-stage">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/rings-hanji.webp"
                alt="한지 위에 맞물린 두 개의 금반지와 금실"
                width={1422}
                height={1106}
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover object-[30%_50%] transition-transform duration-[1.6s] ease-hani hover:scale-[1.03] lg:aspect-auto lg:min-h-[640px]"
              />
            </div>
            <div className="absolute -bottom-7 left-6 flex items-center gap-4 rounded-hani bg-paper px-5 py-4 shadow-hani-card md:left-10">
              <Stamp size={44} />
              <p className="text-[13.5px] leading-snug text-ink-sub">
                맞물린 두 개의 반지
                <br />
                <span className="font-semibold text-ink">HANI의 결(結) 엠블럼</span>
              </p>
            </div>
          </Reveal>
          <div className="flex flex-col justify-center">
            <Reveal>
              <h2 className="font-display text-balance text-[clamp(1.9rem,3.3vw,3.2rem)] leading-[1.25] font-normal tracking-[-0.025em] text-ink">
                사람을 대신 고르지 않습니다
                <br />
                <span className="text-brand">더 잘 고르도록 돕습니다</span>
              </h2>
              <p className="mt-6 max-w-lg text-[17px] leading-[1.8] text-ink-sub">
                인연은 점수로 정해지지 않습니다. HANI는 조건과 가치관, 두 사람의 의사를 함께 살피도록 도울 뿐, 마지막 결정은
                언제나 사람이 합니다.
              </p>
            </Reveal>
            <Stagger className="mt-12 divide-y divide-line border-y border-line">
              {PRINCIPLES.map((p, i) => (
                <StaggerItem key={p.t} className="grid grid-cols-[56px_1fr] gap-4 py-7">
                  <span className="font-display text-[26px] leading-none text-brand-accent">0{i + 1}</span>
                  <div>
                    <h3 className="text-[19px] font-bold text-ink md:text-[21px]">{p.t}</h3>
                    <p className="mt-2.5 text-[15.5px] leading-[1.8] text-ink-sub">{p.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────── MatchOS 티저 (밤) ───────── */
export function MatchosTeaser() {
  return (
    <section data-header="night" className="bg-night-sky relative overflow-hidden py-24 md:py-36">
      <Container>
        <SectionHead
          tone="night"
          en="HANI MatchOS"
          ko="결혼정보업체 전용 CRM·매칭 플랫폼"
          title={
            <>
              우리 회원만으로 찾던 매칭을
              <br />
              <span className="text-[var(--color-champagne)]">파트너 업체의 후보까지</span>
            </>
          }
          lead="회원 200명씩 보유한 업체가 연결된다면, 소개를 검토할 수 있는 후보군은 이렇게 넓어집니다."
        />
        <Stagger className="mt-16 grid grid-cols-3 items-end gap-3 border-b border-white/12 pb-10 md:mt-20">
          {[
            { n: 200, l: '자사 1곳' },
            { n: 1000, l: '자사 포함 5곳' },
            { n: 4000, l: '자사 포함 20곳', gold: true },
          ].map((x) => (
            <StaggerItem key={x.n}>
              <CountUp
                to={x.n}
                className={`block font-display text-[clamp(2.2rem,7vw,6rem)] leading-none font-normal tracking-[-0.03em] ${x.gold ? 'text-[var(--color-champagne)]' : 'text-paper'}`}
              />
              <p className="mt-4 text-[13px] text-white/55 md:text-[15px]">{x.l}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-6">
          <p className="text-[15.5px] text-white/60">회원관리 CRM · 크로스매칭 · 회원 전용 앱 · 선택형 사주궁합</p>
          <Button href="/matchos/" variant="gold" arrow>
            MatchOS 자세히 보기
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────── HANI 앱 티저 ───────── */
export function AppTeaser() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#faf8f3_0%,#f4eeff_100%)] py-24 md:py-36">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <EditorialBar en="HANI App" ko="자기이해 앱" />
            <Reveal className="mt-10">
              <h2 className="font-display text-[clamp(2.1rem,3.7vw,3.5rem)] leading-[1.22] font-normal tracking-[-0.025em] text-ink">
                사주로 나를 읽고
                <br />
                대화로 나를 이해하다
              </h2>
              <p className="mt-6 max-w-md text-[17px] leading-[1.8] text-ink-sub">
                성향과 강점, 관계 방식과 감정 패턴을 지금의 언어로. 나를 이해하는 친구 하늬와 함께 나다운 선택 기준을 찾아가요.
              </p>
            </Reveal>
            <Reveal className="mt-8 flex flex-wrap gap-2" delay={0.1}>
              {['인사이트', '하늬와 대화', '다이어리', '관계 인사이트'].map((t) => (
                <span key={t} className="rounded-full border border-brand-subtle-hover bg-paper/70 px-4 py-2 text-[14px] font-semibold text-brand">
                  {t}
                </span>
              ))}
            </Reveal>
            <Reveal className="mt-10" delay={0.15}>
              <Button href="/hani-app/" arrow>
                HANI 앱 살펴보기
              </Button>
            </Reveal>
          </div>
          <Reveal className="relative mx-auto flex w-full max-w-[560px] items-end justify-center" delay={0.1}>
            <div className="absolute inset-x-8 bottom-4 h-2/3 rounded-full bg-[radial-gradient(closest-side,rgba(139,94,181,.28),transparent)]" aria-hidden />
            <div className="relative w-[40%] -rotate-[4deg]">
              <PhoneFrame screenKey="saju-diary-card" alt="HANI 앱 오늘의 카드 화면" />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/characters/hani-chat.webp"
              alt="말풍선과 함께 이야기하는 하니 캐릭터"
              width={996}
              height={1000}
              loading="lazy"
              className="relative z-10 -mx-[6%] mb-[-2%] w-[36%] animate-drift drop-shadow-[0_24px_30px_rgba(68,3,130,.18)]"
            />
            <div className="relative w-[40%] rotate-[4deg]">
              <PhoneFrame screenKey="saju-chat" alt="HANI 앱 하늬와 대화 화면" />
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-20 flex items-center justify-center gap-3 text-ink-muted">
          <HaniWordmark height={14} className="text-ink-muted" />
          <span className="text-[13px] tracking-[0.2em]">UNDERSTAND · EMPOWER · TRANSFORM</span>
        </Reveal>
      </Container>
    </section>
  );
}
