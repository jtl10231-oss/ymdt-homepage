import {
  CalendarDays,
  ChartColumn,
  FileText,
  Handshake,
  Link2,
  MapPin,
  MessageSquareText,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
} from 'lucide-react';
import Container from '@/components/site/Container';
import SectionHead, { EditorialBar } from '@/components/site/SectionHead';
import Reveal, { Stagger, StaggerItem } from '@/components/motion/Reveal';
import Stamp from '@/components/motion/Stamp';
import BrowserFrame from '@/components/frames/BrowserFrame';
import PhoneFrame from '@/components/frames/PhoneFrame';
import MandarinDucks from '@/components/brand/MandarinDucks';
import HaniMark from '@/components/brand/HaniMark';
import { cn } from '@/lib/utils';

const ICON = { size: 26, strokeWidth: 1.5 } as const;

/* ───────────────────────── 02 · 대표님의 고민 ───────────────────────── */
const PAINS = [
  { icon: Users, t: '소개할 후보가 부족해요', d: '자사 회원만으로 찾다 보면 조건에 맞는 후보가 한정됩니다', a: '파트너 업체 후보까지 함께 검토' },
  { icon: Search, t: '후보 찾는 데 오래 걸려요', d: '기억에 의존해 검색하고 조건을 하나씩 비교합니다', a: '조건·가치관·이상형을 한 화면에서 비교' },
  { icon: FileText, t: '회원정보가 흩어져 있어요', d: '프로필과 상담 기록이 나뉘어 담당자 간 확인이 번거롭습니다', a: '회원이 작성한 정보가 CRM으로 바로' },
  { icon: CalendarDays, t: '계약과 일정을 놓쳐요', d: '계약 내역과 소개 진행을 다른 곳에서 다시 확인합니다', a: '소개·계약·일정을 하나의 흐름으로' },
  { icon: MessageSquareText, t: '회원은 진행이 궁금해요', d: '누구를 소개받고 어디까지 진행됐는지 알고 싶어 합니다', a: '회원 전용 앱으로 진행 상황을 함께' },
  { icon: ChartColumn, t: '전체 현황이 잘 안 보여요', d: '회원과 계약과 수납을 한눈에 파악하기 어렵습니다', a: '매출과 실제 수납을 나누어 확인' },
];

export function Challenges() {
  return (
    <section className="paper-grain bg-paper-subtle py-24 md:py-36">
      <Container>
        <SectionHead
          en="The Challenge"
          ko="대표와 매니저의 고민"
          title={
            <>
              대표님
              <br />
              이런 고민 없으신가요
            </>
          }
          lead="엑셀·메신저·수기 사이에서 놓치고 있던 소개의 기회"
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-5">
          {PAINS.map(({ icon: Icon, t, d, a }) => (
            <StaggerItem key={t}>
              <article className="group relative flex h-full flex-col rounded-hani border border-line bg-paper p-7 shadow-hani-card transition-[box-shadow,border-color,background-color] duration-500 ease-hani hover:border-brand-subtle-hover hover:bg-[#f7f5ff] hover:shadow-hani-hover md:p-8">
                <Icon {...ICON} className="text-brand-accent" aria-hidden />
                <h3 className="mt-6 text-[19px] font-bold tracking-[-0.01em] text-ink">{t}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-ink-sub">{d}</p>
                <div className="mt-auto pt-7">
                  <div className="flex items-center gap-3 border-t border-line-soft pt-5 text-[14.5px] font-semibold text-brand/70 transition-colors duration-500 group-hover:text-brand">
                    <HaniMark size={16} strokeWidth={3} lens={false} className="shrink-0" title="HANI" />
                    <span className="transition-transform duration-500 ease-hani group-hover:translate-x-1">{a}</span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-5 rounded-hani bg-lavender px-7 py-8 md:px-10 md:py-10">
          <p className="text-[clamp(1.35rem,2.4vw,1.9rem)] font-bold tracking-[-0.02em] text-ink">관리 도구를 바꾸는 것을 넘어</p>
          <p className="mt-2 text-[16px] text-ink-sub md:text-[17px]">소개할 수 있는 범위까지 넓힙니다</p>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────────────────── 03 · HANI로 이렇게 달라집니다 ───────────────────────── */
const SOLUTIONS = [
  {
    n: '01',
    icon: Link2,
    t: '더 넓은 매칭',
    s: '자사 회원과 파트너 후보를 함께 검토',
    tags: ['크로스매칭', '조건 비교', '선택형 사주궁합'],
    bg: 'bg-lavender',
    fg: 'text-brand',
  },
  {
    n: '02',
    icon: FileText,
    t: '하나로 모은 운영',
    s: '회원정보부터 소개·계약·일정까지',
    tags: ['회원관리 CRM', '소개 관리', '계약·매출'],
    bg: 'bg-sage',
    fg: 'text-[#2f5d4c]',
  },
  {
    n: '03',
    icon: Smartphone,
    t: '연결되는 회원 경험',
    s: '회원의 작성과 응답이 담당자의 다음 업무로',
    tags: ['프로필 작성', '소개 확인', '상담·일정'],
    bg: 'bg-sand',
    fg: 'text-[#7a6446]',
  },
];

export function Solutions() {
  return (
    <section className="bg-paper py-24 md:py-36">
      <Container>
        <SectionHead
          en="One Connected Service"
          ko="HANI의 해결책"
          title={
            <>
              HANI로
              <br />
              이렇게 달라집니다
            </>
          }
          lead="매칭·운영·소통을 하나의 흐름으로 연결합니다"
        />
        <div className="relative mt-16 md:mt-24">
          {SOLUTIONS.map(({ n, icon: Icon, t, s, tags, bg, fg }, i) => (
            <div key={n} className="sticky" style={{ top: `${96 + i * 22}px` }}>
              <Reveal
                className={cn(
                  'mb-6 grid min-h-[300px] gap-8 rounded-hani-xl p-8 shadow-[0_-18px_40px_-30px_rgba(46,2,87,.35)] md:min-h-[360px] md:grid-cols-[180px_1fr] md:p-14',
                  bg,
                )}
              >
                <div className={cn('flex items-start gap-6 md:flex-col md:justify-between', fg)}>
                  <span className="font-display text-[56px] leading-none font-normal md:text-[88px]">{n}</span>
                  <Icon size={36} strokeWidth={1.3} aria-hidden className="mt-2 md:mt-0" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-bold tracking-[-0.03em] text-ink">{t}</h3>
                  <p className="mt-3 text-[17px] text-ink md:text-[19px]">{s}</p>
                  <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[14.5px] text-ink-sub md:text-[15px]">
                    {tags.map((tag, j) => (
                      <li key={tag} className="flex items-center gap-4">
                        {j > 0 && <span className="text-ink-muted/60">/</span>}
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
        <Reveal className="mt-10 grid grid-cols-3 border-t border-ink/20 pt-8 text-center">
          {['회원 확보', '회원 만족', '매출 기회'].map((t) => (
            <p key={t} className="text-[clamp(1.1rem,2.2vw,1.6rem)] font-bold text-ink">
              {t}
            </p>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────────────────── 06 · 매칭풀 확장의 기회 ───────────────────────── */
const CASES = [
  {
    label: '재혼 매칭',
    icon: (
      <svg width="40" height="26" viewBox="0 0 40 26" fill="none" aria-hidden>
        <circle cx="14" cy="13" r="10.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="26" cy="13" r="10.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    bg: 'bg-[#f1ecff]',
    fg: 'text-brand-accent',
    when: '우리 업체 안에서는 재혼 조건에 맞는 후보가 부족할 때',
    then: '파트너 후보까지 검토 범위를 넓힙니다',
  },
  {
    label: '시니어 매칭',
    icon: <Users size={34} strokeWidth={1.4} aria-hidden />,
    bg: 'bg-sand',
    fg: 'text-[#8a7658]',
    when: '특정 연령대의 회원이 많지 않아 소개가 어려울 때',
    then: '함께 검색할 수 있는 후보군을 넓힙니다',
  },
  {
    label: '지역 매칭',
    icon: <MapPin size={34} strokeWidth={1.4} aria-hidden />,
    bg: 'bg-sage',
    fg: 'text-[#2f5d4c]',
    when: '희망 지역의 후보를 자사 회원만으로 찾기 어려울 때',
    then: '다른 지역 파트너와 소개 가능성을 살펴봅니다',
  },
];

export function UseCases() {
  return (
    <section className="paper-grain bg-paper-subtle py-24 md:py-36">
      <Container>
        <SectionHead
          en="More Room to Find a Match"
          ko="매칭풀 확장의 기회"
          title={
            <>
              자사에서 어려웠던 매칭
              <br />
              더 넓은 풀에서 다시 검토
            </>
          }
          lead="후보가 부족했던 상담에도 새로운 선택지를 살펴볼 수 있습니다"
        />
        <Stagger className="mt-14 space-y-4 md:mt-20">
          {CASES.map((c) => (
            <StaggerItem key={c.label}>
              <article className="group grid overflow-hidden rounded-hani border border-line bg-paper transition-shadow duration-500 hover:shadow-hani-hover md:grid-cols-[240px_1fr]">
                <div className={cn('flex items-center gap-5 px-7 py-7 md:flex-col md:justify-center md:gap-4 md:py-10', c.bg)}>
                  <span className={c.fg}>{c.icon}</span>
                  <h3 className="text-[19px] font-bold text-ink md:text-[21px]">{c.label}</h3>
                </div>
                <div className="flex flex-col justify-center gap-4 px-7 py-7 md:px-12">
                  <p className="text-[16px] leading-relaxed text-ink-sub md:text-[17px]">{c.when}</p>
                  <p className="flex items-start gap-4 text-[17px] font-bold text-ink md:text-[19px]">
                    <svg className="mt-3 shrink-0 text-[var(--color-champagne)] transition-transform duration-500 ease-hani group-hover:translate-x-1.5" width="44" height="8" viewBox="0 0 44 8" fill="none" aria-hidden>
                      <path d="M0 4h42M38 1l4 3-4 3" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                    {c.then}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-16">
          <p className="font-display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.35] text-ink">
            소개할 수 없었던 상담을
            <br />
            다시 검토할 수 있는 상담으로
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────────────────── 12 · 선택형 사주궁합 (챔버) ───────────────────────── */
export function SajuChamber() {
  return (
    <section className="relative overflow-hidden bg-[#f4efe6] py-24 md:py-36">
      <Container>
        <SectionHead
          en="HANI Saju Compatibility"
          ko="선택형 사주궁합"
          title={
            <>
              조건 너머
              <br />
              두 사람의 관계까지
            </>
          }
          lead="소개와 상담에 관계를 이해하는 관점을 더합니다"
        />
        <Reveal className="mt-14 rounded-hani-xl bg-sand px-6 py-12 text-center md:mt-20 md:px-12 md:py-16">
          <MandarinDucks className="mx-auto w-[46%] max-w-[300px] text-[#ad9776]" />
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4 text-[15px] font-bold text-ink md:text-[19px]">
            <li>성향 이해</li>
            <li>관계 스타일</li>
            <li>조율 포인트</li>
          </ul>
        </Reveal>

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <Reveal>
              <h3 className="text-[clamp(1.6rem,2.8vw,2.3rem)] font-bold tracking-[-0.02em] text-ink">궁합을 상담의 언어로</h3>
            </Reveal>
            <Reveal className="mt-12 flex items-center justify-between gap-2" delay={0.1}>
              <div className="flex aspect-square w-[34%] max-w-[190px] flex-col items-center justify-center rounded-full bg-lavender text-center">
                <p className="font-display text-[clamp(1.3rem,3vw,2.1rem)] text-ink">추진력</p>
                <p className="mt-1 text-[12px] text-ink-sub md:text-[14px]">결단력 · 명쾌함</p>
              </div>
              <div className="relative flex flex-1 items-center justify-center">
                <span className="absolute inset-x-0 top-1/2 h-px bg-[#b8a582]" aria-hidden />
                <MandarinDucks className="relative w-[46%] max-w-[92px] bg-[#f4efe6] px-2 text-[#ad9776]" />
              </div>
              <div className="flex aspect-square w-[34%] max-w-[190px] flex-col items-center justify-center rounded-full bg-sand text-center">
                <p className="font-display text-[clamp(1.3rem,3vw,2.1rem)] text-ink">섬세함</p>
                <p className="mt-1 text-[12px] text-ink-sub md:text-[14px]">세심함 · 높은 기준</p>
              </div>
            </Reveal>
            <Reveal className="mt-12 text-center lg:text-left" delay={0.15}>
              <p className="font-display text-[clamp(1.35rem,2.6vw,2rem)] leading-[1.6] font-normal text-ink-sub">
                직설적인 표현은 부드럽게
                <br />
                높은 기준에는 여유를
              </p>
            </Reveal>
            <Reveal className="mt-12" delay={0.2}>
              <span className="inline-flex rounded-full bg-lavender px-5 py-2.5 text-[14px] font-bold text-brand">
                사주는 선택, 판단의 중심은 매니저와 회원
              </span>
              <p className="mt-4 text-[13px] text-ink-muted">전통 사주 해석을 활용한 선택형 상담 참고정보</p>
            </Reveal>
          </div>
          <Reveal className="relative mx-auto w-full max-w-[340px]" delay={0.1}>
            <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(168,135,61,.22),transparent_65%)]" aria-hidden />
            <PhoneFrame screenKey="m-deep-report" alt="회원 앱의 심화 궁합 리포트 화면" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────────── 13 · 회원과 업체의 신뢰 ───────────────────────── */
export function Trust() {
  return (
    <section className="bg-paper py-24 md:py-36">
      <Container>
        <SectionHead
          en="Privacy and Trust"
          ko="회원과 업체의 신뢰"
          title={
            <>
              더 넓은 매칭의 기본
              <br />
              회원정보에 대한 신뢰
            </>
          }
          lead="내 정보가 어떻게 소개되는지 회원도 알 수 있도록"
        />
        <div className="mt-16 grid items-center gap-16 md:mt-24 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-14">
            <Reveal>
              <span className="inline-flex rounded-full bg-lavender px-4 py-1.5 text-[13.5px] font-bold text-brand">공개 전</span>
              <h3 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-normal text-ink">공개는 선택하고</h3>
              <p className="mt-4 text-[16.5px] leading-[1.8] text-ink-sub">
                사진·나이·프로필
                <br />
                소개에 필요한 공개 범위를 회원이 확인합니다
              </p>
            </Reveal>
            <div className="hairline" />
            <Reveal>
              <span className="inline-flex rounded-full bg-sage px-4 py-1.5 text-[13.5px] font-bold text-[#2f5d4c]">유출 발생 후</span>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-[clamp(1.9rem,3.6vw,3rem)] font-normal text-ink">출처는 추적하고</h3>
                  <p className="mt-4 text-[16.5px] leading-[1.8] text-ink-sub">
                    비가시성 워터마크로
                    <br />
                    유출 이미지의 출처 추적을 지원합니다
                  </p>
                </div>
                <ShieldCheck size={64} strokeWidth={1} className="shrink-0 text-[var(--color-champagne)]" aria-hidden />
              </div>
            </Reveal>
          </div>
          <Reveal className="mx-auto w-full max-w-[320px]" delay={0.1}>
            <PhoneFrame screenKey="m-privacy" alt="회원 앱의 프로필 공개 설정 화면" />
          </Reveal>
        </div>
        <Reveal className="mt-20 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 rounded-hani-lg bg-night px-6 py-9 text-center text-[15px] font-bold text-paper sm:px-10 md:text-[19px]">
          <span>유출 이미지</span>
          <Arrow />
          <span>표식 분석</span>
          <Arrow />
          <span>출처 확인</span>
        </Reveal>
      </Container>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="56" height="8" viewBox="0 0 56 8" fill="none" aria-hidden className="w-8 text-white/60 sm:w-14">
      <path d="M0 4h54M50 1l4 3-4 3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/* ───────────────────────── 14 · 대표를 위한 가치 ───────────────────────── */
export function Growth() {
  return (
    <section className="paper-grain bg-paper-subtle py-24 md:py-36">
      <Container>
        <SectionHead
          en="Business Growth"
          ko="대표를 위한 가치"
          title={
            <>
              좋은 소개가
              <br />
              매출의 기회가 되도록
            </>
          }
          lead="회원 확보·회원 만족·수익 기회를 하나의 흐름에서"
        />
        <Stagger className="mt-14 grid gap-8 sm:grid-cols-3 md:mt-20">
          {[
            ['가입', '상담을 계약으로'],
            ['성혼', '좋은 만남을 성과로'],
            ['추천', '회원 만족을 신뢰로'],
          ].map(([t, d], i) => (
            <StaggerItem key={t} className="relative">
              <p className="font-display text-[clamp(2.6rem,5vw,4rem)] leading-none font-normal text-ink">{t}</p>
              <p className="mt-4 text-[16px] text-ink-sub">{d}</p>
              {i < 2 && (
                <svg className="absolute top-6 -right-6 hidden text-[var(--color-champagne)] sm:block" width="48" height="8" viewBox="0 0 48 8" fill="none" aria-hidden>
                  <path d="M0 4h46M42 1l4 3-4 3" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              )}
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-16 grid items-center gap-10 rounded-hani-xl border border-line bg-paper p-5 shadow-hani-card md:mt-20 md:p-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14 lg:p-10">
          <Reveal>
            <BrowserFrame screenKey="ceo-revenue" alt="MatchOS 대표 화면의 매출 분석" url="matchos.hani / 매출 분석" />
          </Reveal>
          <Reveal className="space-y-8 px-2 pb-4 lg:px-0 lg:pb-0" delay={0.1}>
            <div>
              <p className="text-[clamp(1.6rem,2.6vw,2.1rem)] font-bold text-ink">매출</p>
              <p className="mt-2 text-[16px] text-ink-sub">계약 기준의 성과</p>
            </div>
            <div className="hairline" />
            <div>
              <p className="text-[clamp(1.6rem,2.6vw,2.1rem)] font-bold text-ink">실제 수납</p>
              <p className="mt-2 text-[16px] text-ink-sub">들어온 금액을 확인</p>
            </div>
            <p className="text-[16px] font-bold text-brand">매출과 실제 수납은 나누어 확인합니다</p>
          </Reveal>
        </div>
        <Reveal className="mt-16">
          <p className="text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.5] font-bold tracking-[-0.02em] text-ink">
            매칭풀이 넓어지면
            <br />
            사업이 검토할 수 있는 기회도 넓어집니다
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────────────────── 15 · 파트너십 원칙 ───────────────────────── */
const PROMISES = [
  { icon: Users, t: '고객사가 주도', d: '회원 관계, 소개 결정, 상담 흐름은 고객사와 매니저가 주도합니다' },
  { icon: Settings, t: '우리는 지원', d: '운영 관리, 매칭 검색, 크로스매칭과 회원 경험을 더 효율적으로 돕습니다' },
  { icon: TrendingUp, t: '성장을 함께', d: '앞으로는 마케팅과 모객 지원까지, 고객사의 성장을 돕는 방향으로 확장합니다' },
];

export function Partnership() {
  return (
    <section className="bg-paper py-24 md:py-36">
      <Container>
        <EditorialBar en="Partnership Principle" ko="고객과 함께 성장" />
        <div className="mt-12 grid items-center gap-14 md:mt-16 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <h2 className="font-display text-[clamp(2.3rem,5vw,4.5rem)] leading-[1.18] font-normal tracking-[-0.025em] text-brand-deep">
              우리는 고객사와
              <br />
              경쟁하지 않습니다
            </h2>
            <p className="mt-6 text-[17px] text-ink-sub md:text-lg">HANI MatchOS는 고객의 성공을 돕는 파트너입니다</p>
            <p className="mt-10 border-l border-line-strong pl-5 text-[15.5px] leading-[2] text-ink-sub">
              좋은 인연이 더 많아지는
              <br />
              건강한 매칭 생태계를 위해
              <br />
              HANI는 언제나 고객사와 함께합니다
            </p>
          </Reveal>
          <Reveal className="relative mx-auto aspect-[1.55] w-full max-w-[460px]" delay={0.1}>
            <svg viewBox="0 0 310 200" className="h-full w-full" aria-hidden>
              <defs>
                <clipPath id="venn-l">
                  <circle cx="110" cy="92" r="84" />
                </clipPath>
              </defs>
              <circle cx="200" cy="92" r="84" fill="#e9e1d2" clipPath="url(#venn-l)" />
              <circle cx="110" cy="92" r="84" fill="none" stroke="#b8a582" strokeWidth="1" />
              <circle cx="200" cy="92" r="84" fill="none" stroke="#b8a582" strokeWidth="1" />
              <line x1="112" y1="190" x2="138" y2="190" stroke="#b8a582" strokeWidth="1" />
              <line x1="172" y1="190" x2="198" y2="190" stroke="#b8a582" strokeWidth="1" />
            </svg>
            <span className="absolute top-[40%] left-[13%] text-center text-[13px] leading-snug text-ink-sub md:text-[14px]">
              고객사의
              <br />
              성공
            </span>
            <span className="absolute top-[40%] right-[12%] text-center text-[13px] leading-snug text-ink-sub md:text-[14px]">
              더 많은
              <br />
              좋은 인연
            </span>
            <Handshake className="absolute top-[34%] left-1/2 -translate-x-1/2 text-[#9c8662]" size={40} strokeWidth={1.2} />
            <span className="absolute bottom-[1%] left-1/2 -translate-x-1/2 text-[13px] text-ink-sub">함께 더 멀리</span>
          </Reveal>
        </div>

        <Reveal className="mt-16 grid gap-8 rounded-hani-xl bg-lavender px-7 py-10 md:grid-cols-[1.4fr_1fr] md:items-center md:px-12 md:py-12">
          <div>
            <p className="text-[14px] font-bold text-brand-accent">우리의 약속</p>
            <p className="mt-4 text-[clamp(1.4rem,2.6vw,2.1rem)] font-bold tracking-[-0.02em] text-ink">회원은 고객사의 자산</p>
            <p className="mt-2 text-[clamp(1.4rem,2.6vw,2.1rem)] font-bold tracking-[-0.02em] text-[#a8906a]">관계의 주도권은 고객사에 있습니다</p>
          </div>
          <p className="border-line-strong text-[15px] leading-[1.9] text-ink-sub md:border-l md:pl-8">
            HANI MatchOS는 고객사의 소중한 회원과 신뢰를 지키며, 고객사가 더 좋은 인연을 만들어갈 수 있도록 항상 함께합니다
          </p>
        </Reveal>

        <Stagger className="mt-6 grid gap-4 md:grid-cols-3">
          {PROMISES.map(({ icon: Icon, t, d }) => (
            <StaggerItem key={t}>
              <article className="flex h-full flex-col items-center rounded-hani border border-line bg-paper px-7 py-10 text-center shadow-hani-card">
                <span className="flex size-20 items-center justify-center rounded-full bg-lavender text-brand-deep">
                  <Icon size={34} strokeWidth={1.3} aria-hidden />
                </span>
                <h3 className="mt-7 font-display text-[24px] font-normal text-ink">{t}</h3>
                <span className="mt-4 h-px w-10 bg-[var(--color-champagne)]" aria-hidden />
                <p className="mt-5 text-[15px] leading-[1.8] text-ink-sub">{d}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-16 flex items-center justify-center gap-5 text-center">
          <span className="hidden h-px w-16 bg-[var(--color-champagne)] sm:block" aria-hidden />
          <p className="text-[clamp(1.2rem,2.4vw,1.9rem)] font-bold tracking-[-0.02em] text-brand-deep">
            우리는 파트너지 고객사의 경쟁자가 아닙니다
          </p>
          <span className="hidden h-px w-16 bg-[var(--color-champagne)] sm:block" aria-hidden />
        </Reveal>
        <div className="mt-4 flex justify-center">
          <Stamp size={52} variant="solid" />
        </div>
      </Container>
    </section>
  );
}
