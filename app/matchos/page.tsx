import type { Metadata } from 'next';
import { shareMeta } from '@/lib/site';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Container from '@/components/site/Container';
import SectionHead from '@/components/site/SectionHead';
import MatchosHero from '@/components/sections/matchos/Hero';
import { Challenges, Solutions, UseCases, SajuChamber, Trust, Growth, Partnership } from '@/components/sections/matchos/Sections';
import Network from '@/components/sections/matchos/Network';
import HowItWorks from '@/components/sections/matchos/HowItWorks';
import FeatureStory from '@/components/sections/matchos/FeatureStory';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal, { Stagger, StaggerItem } from '@/components/motion/Reveal';
import { Settings, TrendingUp, Users } from 'lucide-react';

const TITLE = 'HANI MatchOS — 결혼정보업체 전용 CRM·매칭 플랫폼';
const DESCRIPTION =
  '운영은 하나로, 매칭풀은 더 크게. 회원관리 CRM, 파트너 업체와의 크로스매칭, 회원 전용 앱을 하나로 연결하는 결혼정보업체 전용 플랫폼입니다.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...shareMeta(TITLE, DESCRIPTION, '/og/matchos.jpg', 'HANI MatchOS — 운영은 하나로, 매칭풀은 더 크게'),
};

export default function MatchosPage() {
  return (
    <>
      <Header tone="paper" />
      <main>
        <MatchosHero />
        <Challenges />
        <Solutions />
        <Network />
        <UseCases />
        <HowItWorks />
        <section id="features" className="paper-grain bg-paper-subtle pt-24 md:pt-36">
          <Container>
            <SectionHead
              en="Inside HANI MatchOS"
              ko="제품 시연 화면"
              title={
                <>
                  회원 작성부터 소개까지
                  <br />
                  한 흐름으로 이어집니다
                </>
              }
              lead="실제 제품 화면으로 살펴보세요. 화면의 회원 정보는 시연용 가상 데이터입니다."
            />
            <div className="pb-16 md:pb-28">
              <FeatureStory />
            </div>
          </Container>
        </section>
        <SajuChamber />
        <Trust />
        <Growth />
        <Partnership />
        <ContactCTA
          eyebrow="Partner, not competitor"
          title={
            <>
              고객의 성장을 함께 만드는
              <br />
              <span className="text-[var(--color-champagne)]">파트너</span>
            </>
          }
          lead="운영은 돕고, 매칭풀은 넓히고, 향후에는 모객까지"
          subject="HANI MatchOS 도입 상담"
        >
          <Reveal className="mx-auto mt-14 max-w-3xl rounded-hani-lg border border-white/12 px-6 py-8 md:px-12">
            <p className="text-[15px] text-white/70">우리는 고객의 회원을 빼앗는 플랫폼이 아니라</p>
            <p className="mt-3 font-display text-[clamp(1.5rem,3.4vw,2.4rem)] text-[var(--color-champagne)]">고객의 성장을 돕는 인프라입니다</p>
          </Reveal>
          <Stagger className="mx-auto mt-6 grid max-w-5xl gap-4 text-left sm:grid-cols-3">
            {[
              { icon: Users, t: '운영 지원', d: '회원관리 · 소개 · 계약 · 일정 관리' },
              { icon: Settings, t: '매칭풀 확장', d: '자사 회원과 파트너 후보를 함께 검토' },
              { icon: TrendingUp, t: '향후 모객 지원', d: '마케팅과 신규 유입 지원으로 성장 보조' },
            ].map(({ icon: Icon, t, d }) => (
              <StaggerItem key={t}>
                <div className="h-full rounded-hani border border-white/12 bg-white/[.03] px-6 py-7 text-center">
                  <span className="mx-auto flex size-16 items-center justify-center rounded-full border border-white/15 bg-[#1d0839] text-paper">
                    <Icon size={28} strokeWidth={1.3} aria-hidden />
                  </span>
                  <p className="mt-5 font-display text-[22px] text-paper">{t}</p>
                  <span className="mx-auto mt-3 block h-px w-8 bg-white/30" aria-hidden />
                  <p className="mt-4 text-[14.5px] leading-relaxed text-white/60">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-14 flex items-center justify-center gap-5">
            <span className="hidden h-px w-12 bg-white/25 sm:block" aria-hidden />
            <p className="font-display text-[clamp(1.3rem,3vw,2.2rem)] text-[var(--color-champagne)]">고객의 성공이 곧 HANI의 성공입니다</p>
            <span className="hidden h-px w-12 bg-white/25 sm:block" aria-hidden />
          </Reveal>
        </ContactCTA>
      </main>
      <Footer />
    </>
  );
}
