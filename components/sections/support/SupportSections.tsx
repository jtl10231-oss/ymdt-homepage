import { Fragment } from 'react';
import Link from 'next/link';
import { asset, CONTACT_EMAIL, mailto, supportMailto } from '@/lib/site';
import Container from '@/components/site/Container';
import SectionHead, { EditorialBar } from '@/components/site/SectionHead';
import Button from '@/components/site/Button';
import Reveal, { Stagger, StaggerItem } from '@/components/motion/Reveal';
import HaniAppIcon from '@/components/brand/HaniAppIcon';
import CopyEmail from './CopyEmail';

/** 앱 안의 메뉴 경로 표시: 더보기 › 구독 관리 */
function Path({ steps }: { steps: string[] }) {
  return (
    <span className="inline-flex flex-wrap items-center gap-x-1.5 rounded-[7px_7px_2px_7px] bg-brand-subtle px-2 py-0.5 align-baseline text-[0.92em] font-semibold whitespace-nowrap text-brand">
      {steps.map((s, i) => (
        <Fragment key={s}>
          {i > 0 && <span aria-hidden>›</span>}
          <span>{s}</span>
        </Fragment>
      ))}
    </span>
  );
}

/* ───────── 히어로: 문의 이메일 ───────── */
export function SupportHero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_90%_at_80%_20%,#e9e1fd_0%,#f7f5ff_38%,#fbfaf6_72%)] pt-28 pb-16 md:pt-36 md:pb-24">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset('/brand/deco-sparkles.svg')} alt="" aria-hidden className="absolute top-[22%] right-[10%] hidden w-10 opacity-70 animate-drift md:block" style={{ animationDelay: '1.4s' }} />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <Reveal className="flex items-center gap-3">
              <HaniAppIcon size={44} className="rounded-[12px] shadow-hani-card" />
              <span className="eyebrow text-brand-accent">Support · 고객지원</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-8 font-display text-[clamp(2.6rem,5.2vw,4.75rem)] leading-[1.16] font-normal tracking-[-0.035em] text-ink">
                무엇을
                <br />
                <span className="text-brand">도와드릴까요?</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-[17.5px] leading-[1.8] text-ink-sub md:text-[19px]">
                HANI 앱을 쓰다가 궁금하거나 불편한 점이 있다면 편하게 알려 주세요. 아래 이메일로 보내 주시면 확인하고
                답변드릴게요.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 max-w-xl rounded-hani-lg border border-line bg-paper/85 p-6 shadow-hani-card backdrop-blur-sm md:p-8">
                <p className="eyebrow text-ink-muted">고객지원 이메일</p>
                <a
                  href={supportMailto()}
                  className="mt-3 block font-display text-[clamp(1.7rem,4.2vw,2.5rem)] leading-tight tracking-[-0.02em] break-all text-ink transition-colors hover:text-brand"
                >
                  {CONTACT_EMAIL}
                </a>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={supportMailto()} arrow>
                    이메일 보내기
                  </Button>
                  <CopyEmail email={CONTACT_EMAIL} />
                </div>
                <p className="mt-5 text-[14px] leading-relaxed text-ink-muted">
                  앱 안에서는 <Path steps={['더보기', '고객센터 문의하기']} />로도 보낼 수 있어요.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative mx-auto hidden w-full max-w-[420px] lg:block">
            <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(closest-side,rgba(159,120,233,.35),transparent)] blur-2xl" aria-hidden />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset('/characters/hani-chat.webp')}
              alt="말풍선을 들고 이야기를 들어 주는 하니 캐릭터"
              loading="eager"
              decoding="async"
              className="relative h-auto w-full animate-drift drop-shadow-[0_28px_36px_rgba(68,3,130,.16)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ───────── 문의 전에: 알려 주면 빨라지는 정보 ───────── */
const CHECKS = [
  { n: '01', t: '가입한 로그인 방식', d: '카카오, Google, Apple 중 어떤 계정으로 가입하셨는지 알려 주세요.' },
  { n: '02', t: '기기와 운영체제', d: '예: iPhone 15 · iOS 18, Galaxy S24 · Android 15' },
  { n: '03', t: '앱 버전', d: '더보기의 설정 항목에서 앱 버전을 확인할 수 있어요.' },
  { n: '04', t: '문제가 생긴 화면', d: '화면을 캡처해 첨부하고, 언제 있었던 일인지 알려 주세요.' },
];

export function BeforeYouWrite() {
  return (
    <section className="bg-paper-subtle py-20 md:py-28">
      <Container>
        <SectionHead
          en="Before You Write"
          ko="문의 전에"
          title={
            <>
              네 가지만 알려 주시면
              <br />더 빨리 도와드려요
            </>
          }
          lead="문의 메일을 누르면 이 항목이 미리 적힌 양식이 열려요. 빈칸만 채워서 보내 주세요."
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {CHECKS.map((c) => (
            <StaggerItem key={c.n}>
              <div className="h-full rounded-hani-lg border border-line bg-paper p-6 shadow-hani-card md:p-7">
                <span className="font-display text-[15px] tracking-[0.1em] text-brand-accent">{c.n}</span>
                <h3 className="mt-4 font-display text-[21px] leading-snug text-ink">{c.t}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-ink-sub">{c.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 max-w-[46rem] text-pretty text-[15px] leading-[1.8] text-ink-muted">
          결제 문의라면 결제한 날짜와 금액, 스토어에서 받은 영수증의 주문 번호도 함께 알려 주세요. 카드 번호나 인증번호는
          적지 않으셔도 돼요.
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────── 자주 묻는 질문 ───────── */
type Faq = { id: string; q: string; a: React.ReactNode };

const FAQS: Faq[] = [
  {
    id: 'login',
    q: '어떤 계정으로 로그인하나요?',
    a: (
      <>
        <p>카카오, Google, Apple 계정으로 로그인할 수 있어요.</p>
        <p>
          기록이 보이지 않는다면 다른 방식으로 로그인했을 수 있어요. 처음 가입할 때 쓴 방식으로 다시 로그인해 보시고, 그래도
          보이지 않으면 문의해 주세요. 현재 로그인한 방식은 <Path steps={['더보기', '로그인 정보']} />에서 확인할 수 있어요.
        </p>
      </>
    ),
  },
  {
    id: 'cancel-subscription',
    q: '구독을 해지하고 싶어요',
    a: (
      <>
        <p>
          <Path steps={['더보기', '구독 관리']} />에서 구독 상태를 확인하고 해지할 수 있어요.
        </p>
        <p>
          App Store나 Google Play로 결제한 구독은 앱이 안내하는 각 스토어의 구독 관리 화면에서 해지해요. 해지해도 이미 결제한
          기간이 끝날 때까지는 계속 이용할 수 있어요.
        </p>
      </>
    ),
  },
  {
    id: 'payment-issue',
    q: '결제했는데 이용권이 반영되지 않았어요',
    a: (
      <>
        <p>앱을 완전히 종료했다가 다시 열어 보세요. 그래도 그대로라면 아래 내용을 이메일로 보내 주세요.</p>
        <ul className="list-disc space-y-1 pl-5 marker:text-brand-accent">
          <li>결제한 날짜와 금액</li>
          <li>스토어에서 받은 영수증의 주문 번호</li>
          <li>사용 중인 기기와 가입한 로그인 방식</li>
        </ul>
      </>
    ),
  },
  {
    id: 'refund',
    q: '환불받고 싶어요',
    a: (
      <>
        <p>
          App Store나 Google Play로 결제한 건은 결제한 스토어를 통해 환불을 요청해야 할 수 있어요. 먼저 해당 스토어의 결제
          내역에서 확인해 보세요.
        </p>
        <p>
          환불과 청약철회 기준은 <Path steps={['더보기', '약관 및 개인정보']} />의 이용약관에서 볼 수 있어요. 결제 정보와 함께
          이메일로 문의해 주시면 확인해서 안내드릴게요.
        </p>
      </>
    ),
  },
  {
    id: 'orb',
    q: '포인트(Orb)가 사라졌어요',
    a: (
      <p>
        Orb는 출석체크나 광고 시청 등으로 받는 무료 포인트예요. 유효기간이 지나면 사라지고, 상담할 때는 Orb가 먼저 쓰여요.
        유효기간은 앱 안의 안내를 따라요. 계산이 맞지 않는다고 느껴지면 날짜와 함께 알려 주세요.
      </p>
    ),
  },
  {
    id: 'ai-answer',
    q: '하늬의 답변이 틀릴 수도 있나요?',
    a: (
      <>
        <p>
          하늬는 생성형 AI라서 답변에 오류나 부정확한 내용이 있을 수 있어요. 사주와 대화는 나를 이해하는 하나의 관점으로
          참고해 주세요.
        </p>
        <p>건강, 법률, 투자처럼 중요한 결정은 반드시 해당 분야 전문가와 상의해 주세요.</p>
      </>
    ),
  },
  {
    id: 'notification',
    q: '알림을 끄고 싶어요',
    a: (
      <p>
        <Path steps={['더보기', '알림 설정']} />에서 이벤트·프로모션, 오늘의 인사이트, 문의 답변 알림 등을 항목별로 켜고
        끌 수 있어요.
      </p>
    ),
  },
  {
    id: 'delete-account',
    q: '계정을 삭제(탈퇴)하고 싶어요',
    a: (
      <>
        <p>
          앱에서 직접 할 수 있어요. <Path steps={['더보기', '계정 삭제']} />를 누르고 한 번 더 확인하면 탈퇴가 완료돼요. 탈퇴하면 모든 데이터가 삭제되고 복구할 수 없어요.
        </p>
        <p>
          유료 구독 중이라면 탈퇴 전에 먼저 구독을 해지해 주세요. 스토어에서 결제한 구독은 앱에서 탈퇴해도 자동으로 해지되지
          않을 수 있어요. 법령에 따라 보관해야 하는 일부 기록은 개인정보 처리방침에 정한 기간 동안 따로 보관되며,
          자세한 내용은 <Path steps={['더보기', '약관 및 개인정보']} />에서 볼 수 있어요.
        </p>
        <p>앱에 접속할 수 없어 탈퇴가 어렵다면 {CONTACT_EMAIL}로 알려 주세요.</p>
      </>
    ),
  },
];

function Plus() {
  return (
    <span
      aria-hidden
      className="relative grid size-8 shrink-0 place-items-center rounded-full border border-line-strong text-ink-sub transition-[background-color,border-color,color,transform] duration-300 ease-hani group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-paper group-hover:border-ink"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 bg-paper py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <EditorialBar en="FAQ" ko="자주 묻는 질문" />
            <Reveal className="mt-10 md:mt-14">
              <h2 className="font-display text-balance text-[clamp(2.1rem,4.2vw,3.5rem)] leading-[1.18] font-normal tracking-[-0.025em] text-ink">
                먼저
                <br />
                확인해 보세요
              </h2>
              <p className="mt-6 max-w-sm text-[17px] leading-[1.75] text-ink-sub">
                자주 들어오는 질문을 모았어요. 찾는 내용이 없다면 이메일로 알려 주세요.
              </p>
            </Reveal>
          </div>

          <Reveal as="div" delay={0.05}>
            <div className="border-t border-line">
              {FAQS.map((f) => (
                <details key={f.id} id={f.id} className="group scroll-mt-28 border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-[19px] leading-snug text-ink md:text-[22px]">{f.q}</span>
                    <Plus />
                  </summary>
                  <div className="space-y-3.5 pr-4 pb-8 text-[16px] leading-[1.85] text-ink-sub md:pr-14 md:text-[16.5px]">{f.a}</div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ───────── 다른 문의 ───────── */
export function OtherInquiries() {
  return (
    <section className="bg-paper-subtle py-20 md:py-24">
      <Container>
        <EditorialBar en="Other Inquiries" ko="다른 문의" />
        <Stagger className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2">
          <StaggerItem>
            <Link
              href="/matchos/"
              className="group flex h-full flex-col justify-between gap-10 rounded-hani-lg border border-line bg-paper p-7 shadow-hani-card transition-shadow duration-300 hover:shadow-hani-hover md:p-9"
            >
              <div>
                <p className="eyebrow text-brand-accent">HANI MatchOS</p>
                <h3 className="mt-4 font-display text-[26px] leading-snug text-ink md:text-[30px]">결혼정보업체 도입 상담</h3>
                <p className="mt-3 max-w-md text-[16px] leading-[1.75] text-ink-sub">
                  회원관리·크로스매칭 플랫폼 도입이나 제품 시연이 궁금하시다면 MatchOS 페이지를 확인해 주세요.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand">
                MatchOS 보기
                <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 ease-hani group-hover:translate-x-1">
                  <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </StaggerItem>
          <StaggerItem>
            <a
              href={mailto('YMDT 제휴·기타 문의')}
              className="group flex h-full flex-col justify-between gap-10 rounded-hani-lg border border-line bg-paper p-7 shadow-hani-card transition-shadow duration-300 hover:shadow-hani-hover md:p-9"
            >
              <div>
                <p className="eyebrow text-brand-accent">YMDT</p>
                <h3 className="mt-4 font-display text-[26px] leading-snug text-ink md:text-[30px]">제휴 · 기타 문의</h3>
                <p className="mt-3 max-w-md text-[16px] leading-[1.75] text-ink-sub">
                  제휴나 그 밖의 문의도 같은 이메일로 받고 있어요.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand">
                {CONTACT_EMAIL}
                <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 ease-hani group-hover:translate-x-1">
                  <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
