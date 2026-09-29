import { asset, mailto } from '@/lib/site';
import Container from '@/components/site/Container';
import { EditorialBar } from '@/components/site/SectionHead';
import Button from '@/components/site/Button';
import Reveal, { Stagger, StaggerItem } from '@/components/motion/Reveal';
import PhoneFrame from '@/components/frames/PhoneFrame';
import HaniAppIcon from '@/components/brand/HaniAppIcon';
import { cn } from '@/lib/utils';
import type { ScreenKey } from '@/lib/screens';

function Mascot({ src, alt, className, float = true }: { src: string; alt: string; className?: string; float?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src.startsWith('/') ? asset(src) : src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn('h-auto drop-shadow-[0_28px_36px_rgba(68,3,130,.16)]', float && 'animate-drift', className)}
    />
  );
}

/* ───────── 히어로 ───────── */
export function AppHero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_90%_at_80%_20%,#e9e1fd_0%,#f7f5ff_38%,#fbfaf6_72%)] pt-28 pb-20 md:pt-36 md:pb-28">
      {/* 장식: 달·반짝임·하트 (사주앱 에셋) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset('/brand/deco-moon.svg')} alt="" aria-hidden className="absolute top-[18%] right-[8%] hidden w-14 opacity-80 animate-drift md:block" style={{ animationDelay: '1.2s' }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset('/brand/deco-sparkles.svg')} alt="" aria-hidden className="absolute top-[58%] left-[46%] hidden w-10 opacity-70 animate-drift lg:block" style={{ animationDelay: '2.4s' }} />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal className="flex items-center gap-3">
              <HaniAppIcon size={44} className="rounded-[12px] shadow-hani-card" />
              <span className="eyebrow text-brand-accent">HANI App · 자기이해 앱</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-8 font-display text-[clamp(2.6rem,5.2vw,5rem)] leading-[1.14] font-normal tracking-[-0.035em] text-ink">
                사주로 나를 읽고
                <br />
                <span className="text-brand">대화로 나를</span>
                <br />
                이해하다
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-lg text-[17.5px] leading-[1.8] text-ink-sub md:text-[19px]">
                성향과 강점, 관계 방식과 감정 패턴을 지금의 언어로. 나를 이해하는 친구 하늬와 이야기하며 흔들리지 않는 나만의 선택
                기준을 찾아가요.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-10 flex flex-wrap gap-3">
              <Button href={mailto('HANI 앱 소식 받기')} arrow size="lg">
                앱 소식 받기
              </Button>
              <Button href="#features" variant="outline" size="lg">
                기능 살펴보기
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgba(159,120,233,.35),transparent)] blur-2xl" aria-hidden />
            <div className="relative ml-auto w-[54%] rotate-[4deg]">
              <PhoneFrame screenKey="saju-insight" alt="HANI 앱 나의 인사이트 화면: 성향 요약 레이더 차트" priority />
            </div>
            <div className="absolute bottom-[-4%] left-[-2%] w-[58%]">
              <Mascot src="/characters/hani-hero.webp" alt="보라색 하트를 꼭 안은 하니 캐릭터" className="w-full" />
              <div className="mx-auto -mt-3 h-4 w-[60%] rounded-full bg-[radial-gradient(closest-side,rgba(46,2,87,.18),transparent)]" aria-hidden />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ───────── Understand · Empower · Transform ───────── */
export function PromiseBand() {
  const items = [
    { en: 'Understand', ko: '있는 그대로 나를 안다' },
    { en: 'Empower', ko: '흔들리지 않는 선택 기준과 용기를 얻는다' },
    { en: 'Transform', ko: '가장 나답게 삶을 바꾸는 내비게이터가 된다' },
  ];
  return (
    <section data-header="night" className="bg-brand-deep py-16 text-paper md:py-20">
      <Container>
        <Stagger className="grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/12">
          {items.map((it, i) => (
            <StaggerItem key={it.en} className="md:px-10 first:md:pl-0 last:md:pr-0">
              <p className="flex items-baseline gap-3">
                <span className="font-display text-[15px] text-[var(--color-brand-accent-on-ink)]">0{i + 1}</span>
                <span className="eyebrow text-white/60">{it.en}</span>
              </p>
              <p className="mt-4 font-display text-[clamp(1.4rem,2.2vw,1.85rem)] leading-[1.45] text-paper">{it.ko}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

/* ───────── 기능 블록 ───────── */
type Feature = {
  id: string;
  n: string;
  en: string;
  title: React.ReactNode;
  body: React.ReactNode;
  list?: { k: string; t: string }[];
  mascot: { src: string; alt: string };
  phones: { key: ScreenKey; alt: string }[];
  extra?: React.ReactNode;
  tint: string;
};

function FeatureBlock({ f, flip }: { f: Feature; flip: boolean }) {
  return (
    <section id={f.id} className={cn('relative overflow-hidden py-24 md:py-32', f.tint)}>
      <Container>
        <div className={cn('grid items-center gap-14 lg:grid-cols-2 lg:gap-20', flip && 'lg:[&>*:first-child]:order-2')}>
          <div>
            <Reveal>
              <p className="flex items-center gap-3">
                <span className="font-display text-[16px] text-brand-accent">{f.n}</span>
                <span className="eyebrow text-ink-muted">{f.en}</span>
              </p>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.22] font-normal tracking-[-0.025em] text-ink">{f.title}</h2>
              <div className="mt-6 max-w-lg text-[16.5px] leading-[1.85] text-ink-sub md:text-[17.5px]">{f.body}</div>
            </Reveal>
            {f.list && (
              <Stagger className="mt-10 grid max-w-lg gap-px overflow-hidden rounded-hani border border-line bg-line sm:grid-cols-2">
                {f.list.map((x) => (
                  <StaggerItem key={x.k} className="bg-paper/90 px-5 py-4">
                    <p className="text-[15px] font-bold text-ink">{x.k}</p>
                    <p className="mt-1 text-[13.5px] leading-snug text-ink-muted">{x.t}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            )}
            {f.extra}
          </div>
          <Reveal className="relative mx-auto w-full max-w-[560px]" delay={0.1}>
            <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(closest-side,rgba(159,120,233,.22),transparent)]" aria-hidden />
            <div className="relative flex items-end justify-center">
              {f.phones.map((p, i) => (
                <div
                  key={p.key}
                  className={cn(
                    'relative',
                    f.phones.length === 1 && 'w-[58%]',
                    f.phones.length === 2 && (i === 0 ? 'z-10 w-[48%] -rotate-[3deg]' : '-ml-[10%] w-[44%] translate-y-[-8%] rotate-[4deg]'),
                    f.phones.length === 3 &&
                      (i === 1 ? 'z-10 w-[40%]' : cn('w-[34%] opacity-95', i === 0 ? '-mr-[6%] translate-y-[6%] -rotate-[5deg]' : '-ml-[6%] translate-y-[6%] rotate-[5deg]')),
                  )}
                >
                  <PhoneFrame screenKey={p.key} alt={p.alt} />
                </div>
              ))}
            </div>
            <div className={cn('absolute bottom-[-6%] w-[36%]', flip ? 'right-[-4%]' : 'left-[-4%]')}>
              <Mascot src={f.mascot.src} alt={f.mascot.alt} className="w-full" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

const MOODS = [
  { f: 'mood-1-very-low', l: '많이 힘들었어요' },
  { f: 'mood-2-low', l: '조금 힘들었어요' },
  { f: 'mood-3-neutral', l: '보통이에요' },
  { f: 'mood-4-good', l: '괜찮았어요' },
  { f: 'mood-5-great', l: '아주 좋았어요' },
];

const FEATURES: Feature[] = [
  {
    id: 'insight',
    n: '01',
    en: 'Insight',
    title: (
      <>
        내 사주에 담긴
        <br />
        성향과 강점을
        <br />
        지금의 언어로
      </>
    ),
    body: (
      <p>
        사주를 운세가 아니라 나를 이해하는 언어로 풀어요. 타고난 성향과 강점, 일하는 방식과 관계 방식까지. 살아온 환경과 경험에
        따라 다르게 표현될 수 있다는 것도 함께 알려드려요.
      </p>
    ),
    list: [
      { k: '성향·역량', t: '8가지 핵심 역량과 20가지 상세 역량' },
      { k: '16가지 성향 프로필', t: '사주로 읽은 나의 성향 유형' },
      { k: '라이프 인사이트', t: '일·관계·돈 태도·스트레스 등 8개 영역' },
      { k: '사주 분석 근거', t: '원국·오행 등 인사이트의 근거 확인' },
    ],
    mascot: { src: '/characters/hani-insight.webp', alt: '반짝이는 별을 올려다보는 하니 캐릭터' },
    phones: [
      { key: 'saju-insight-16', alt: 'HANI 앱 16가지 성향 프로필 화면' },
      { key: 'saju-insight', alt: 'HANI 앱 성향 요약 화면' },
      { key: 'saju-basis', alt: 'HANI 앱 사주 분석 근거 화면: 사주원국' },
    ],
    tint: 'bg-paper',
  },
  {
    id: 'chat',
    n: '02',
    en: 'Talk with Hanui',
    title: (
      <>
        나를 이해하고
        <br />
        상담하는 친구, 하늬
      </>
    ),
    body: (
      <p>
        내 성향을 바탕으로 지금의 고민을 함께 들여다봐요. 연애와 관계, 일과 돈, 공부와 건강까지. 가볍게 털어놓는 대화부터 깊이 있는
        대화까지, 하늬가 곁에서 이야기를 들어줘요.
      </p>
    ),
    extra: (
      <Reveal className="mt-10 max-w-lg" delay={0.1}>
        <div className="relative rounded-hani-lg border border-brand-subtle-hover bg-paper px-6 py-5 shadow-hani-card">
          <p className="text-[13px] font-bold text-brand">하늬</p>
          <p className="mt-2 text-[16px] leading-relaxed text-ink">안녕, 나는 하늬야. 네 성향을 바탕으로, 오늘은 어떤 이야기를 함께 들여다볼까?</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {['연애·애정', '돈·투자', '직업', '학업', '사업', '건강', '자유주제', '관계'].map((t) => (
            <span key={t} className="rounded-full bg-brand-subtle px-3.5 py-1.5 text-[13.5px] font-semibold text-brand">
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    ),
    mascot: { src: '/characters/hani-chat.webp', alt: '말풍선과 함께 이야기하는 하니 캐릭터' },
    phones: [{ key: 'saju-chat', alt: 'HANI 앱 하늬와 대화 화면' }],
    tint: 'bg-[linear-gradient(180deg,#faf8f3,#f1ecff)]',
  },
  {
    id: 'diary',
    n: '03',
    en: 'Diary',
    title: (
      <>
        하루를 남기면
        <br />
        내일의 카드가 열려요
      </>
    ),
    body: (
      <p>
        오늘의 마음을 고르고 짧게 기록해요. 저녁에 하루를 남기면 다음 날의 에너지 카드가 열리고, 한 주와 한 달의 감정 흐름을 리포트로
        돌아볼 수 있어요.
      </p>
    ),
    extra: (
      <Reveal className="mt-10" delay={0.1}>
        <p className="text-[13px] font-bold tracking-[0.12em] text-ink-muted">오늘, 어떤 마음인가요?</p>
        <ul className="mt-4 flex max-w-lg justify-between gap-2">
          {MOODS.map((m) => (
            <li key={m.f} className="group flex flex-1 flex-col items-center text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(`/moods/${m.f}.svg`)}
                alt=""
                aria-hidden
                width={64}
                height={64}
                className="size-12 transition-transform duration-500 ease-hani group-hover:-translate-y-1.5 sm:size-14"
              />
              <span className="mt-2 text-[11.5px] leading-tight text-ink-sub sm:text-[12.5px]">{m.l}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    ),
    mascot: { src: '/characters/hani-diary.webp', alt: '노트에 하루를 기록하는 하니 캐릭터' },
    phones: [
      { key: 'saju-diary-create', alt: 'HANI 다이어리 기록하기 화면' },
      { key: 'saju-diary-home', alt: 'HANI 다이어리 오늘 화면' },
      { key: 'saju-diary-card', alt: 'HANI 다이어리 오늘의 카드 화면' },
    ],
    tint: 'bg-paper',
  },
  {
    id: 'relation',
    n: '04',
    en: 'Relationship',
    title: (
      <>
        우리 두 사람의 결을
        <br />
        함께 들여다봐요
      </>
    ),
    body: (
      <p>
        상대방 정보를 입력해 두 사람의 관계 방식, 서로 끌리는 지점과 부딪히기 쉬운 부분을 함께 확인해요. 초대를 받았다면 QR이나
        입장코드로 함께 들어올 수 있어요.
      </p>
    ),
    mascot: { src: '/characters/hani-relation.webp', alt: '하트를 함께 안고 있는 두 하니 캐릭터' },
    phones: [
      { key: 'saju-relation', alt: 'HANI 앱 관계 인사이트 화면' },
      { key: 'saju-diary-report', alt: 'HANI 앱 나의 기록 리포트 화면' },
    ],
    tint: 'bg-[linear-gradient(180deg,#f1ecff,#faf8f3)]',
  },
];

export function Features() {
  return (
    <div id="features">
      {FEATURES.map((f, i) => (
        <FeatureBlock key={f.id} f={f} flip={i % 2 === 1} />
      ))}
    </div>
  );
}

/* ───────── 하니의 마음들 ───────── */
const EMOTIONS = [
  { f: 'emotion-calm', l: '편안해요' },
  { f: 'emotion-excited', l: '설레요' },
  { f: 'mood-5-great', l: '아주 좋았어요' },
  { f: 'mood-4-good', l: '괜찮았어요' },
  { f: 'mood-3-neutral', l: '보통이에요' },
  { f: 'emotion-tired', l: '지쳐요' },
  { f: 'emotion-anxious', l: '불안해요' },
  { f: 'emotion-angry', l: '화나요' },
  { f: 'mood-2-low', l: '조금 힘들었어요' },
  { f: 'mood-1-very-low', l: '많이 힘들었어요' },
];

export function Feelings() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <EditorialBar en="Meet HANI" ko="하니를 소개해요" />
        <div className="mt-12 grid items-center gap-14 md:mt-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(closest-side,rgba(159,120,233,.25),transparent)]" aria-hidden />
            <Mascot src="/characters/hani-hero.webp" alt="하니 캐릭터" className="relative w-full" />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.22] font-normal tracking-[-0.025em] text-ink">
                어떤 마음이든
                <br />
                그대로 괜찮아요
              </h2>
              <p className="mt-6 max-w-lg text-[17px] leading-[1.8] text-ink-sub">
                보라색 하트를 꼭 안은 하니는 오늘의 마음을 함께 기록하는 친구예요. 좋은 날도, 지친 날도 있는 그대로 남겨 두면 나를
                이해하는 단서가 돼요.
              </p>
            </Reveal>
            <Stagger className="mt-10 grid grid-cols-5 gap-x-2 gap-y-6">
              {EMOTIONS.map((e) => (
                <StaggerItem key={e.f} className="group flex flex-col items-center text-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-paper-subtle transition-[transform,background-color] duration-500 ease-hani group-hover:-translate-y-1 group-hover:bg-brand-subtle sm:size-20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset(`/moods/${e.f}.svg`)} alt="" aria-hidden width={64} height={64} className="size-12 sm:size-14" />
                  </span>
                  <span className="mt-2.5 text-[12px] text-ink-sub sm:text-[13px]">{e.l}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────── 예측이 아니라 이해 ───────── */
export function Philosophy() {
  return (
    <section data-header="night" className="relative overflow-hidden bg-brand-deep py-24 text-paper md:py-32">
      <div className="absolute -top-32 -right-32 size-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(197,176,247,.25),transparent)]" aria-hidden />
      <Container className="relative">
        <EditorialBar en="Not a prediction" ko="HANI가 사주를 쓰는 방법" tone="night" />
        <Reveal className="mt-12 md:mt-16">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.2] font-normal tracking-[-0.025em]">
            예측이 아니라
            <br />
            <span className="text-[var(--color-brand-accent-on-ink)]">이해를 위해</span>
          </h2>
          <p className="mt-7 max-w-2xl text-[17px] leading-[1.85] text-white/70 md:text-lg">
            HANI는 사주를 정해진 미래를 맞히는 도구가 아니라, 나의 성향과 강점, 관계 방식과 감정 패턴을 이해하는 언어로 사용합니다.
            선택은 언제나 나의 몫이에요.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────── 마무리 ───────── */
export function AppCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[radial-gradient(100%_100%_at_50%_0%,#f1ecff_0%,#faf8f3_70%)] py-24 md:py-32">
      <Container className="text-center">
        <Reveal className="mx-auto w-[46%] max-w-[260px]">
          <Mascot src="/characters/hani-relation.webp" alt="하트를 함께 안고 있는 두 하니 캐릭터" className="w-full" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-10 max-w-3xl font-display text-[clamp(2.1rem,4.8vw,4.2rem)] leading-[1.22] font-normal tracking-[-0.025em] text-ink">
            나를 이해하는
            <br />
            가장 다정한 방법
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[17px] leading-[1.8] text-ink-sub">HANI 앱의 새 소식과 제휴 문의는 메일로 받아요.</p>
        </Reveal>
        <Reveal delay={0.14} className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href={mailto('HANI 앱 소식 받기')} arrow size="lg">
            앱 소식 받기
          </Button>
          <Button href={mailto('HANI 앱 제휴 문의')} variant="outline" size="lg">
            제휴 문의
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
