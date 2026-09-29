import Container from '@/components/site/Container';
import SectionHead, { EditorialBar } from '@/components/site/SectionHead';
import Reveal from '@/components/motion/Reveal';
import Constellation from './Constellation';
import PoolChart from './PoolChart';

export default function Network() {
  return (
    <section id="network" data-header="night" className="bg-night-sky relative overflow-hidden py-24 md:py-36">
      <Container>
        <SectionHead
          tone="night"
          en="Cross-Matching Network"
          ko="핵심 가치 01"
          title={
            <>
              우리 회원만으로
              <br />
              찾던 매칭을 넘어서
            </>
          }
          lead={
            <>
              파트너 업체가 연결될수록
              <br />
              소개를 검토할 수 있는 후보군도 넓어집니다
            </>
          }
        />
        <Reveal className="mt-8">
          <span className="inline-flex rounded-full bg-[#1f0a36] px-4 py-2 text-[13.5px] font-bold text-[var(--color-champagne)]">매칭풀 확장</span>
        </Reveal>
        <Constellation className="mt-6 md:mt-0" />
        <Reveal className="mt-4 md:mt-0">
          <p className="text-[clamp(1.2rem,2.2vw,1.7rem)] font-bold text-paper">담당 매니저는 그대로</p>
          <p className="mt-2 text-[clamp(1.5rem,3vw,2.4rem)] font-bold tracking-[-0.02em] text-[var(--color-champagne)]">소개를 검토할 범위는 더 넓게</p>
        </Reveal>

        <div className="mt-32 md:mt-44">
          <EditorialBar tone="night" en="The Power of a Wider Pool" ko="매칭풀 확장 시나리오" />
          <Reveal className="mt-12 md:mt-16">
            <h3 className="font-display text-[clamp(2.1rem,4.6vw,4rem)] leading-[1.2] font-normal tracking-[-0.02em] text-paper">
              200명에서
              <br />
              4,000명 규모의 네트워크로
            </h3>
            <p className="mt-6 text-[17px] text-white/65">회원 200명씩 보유한 업체가 연결된다면</p>
          </Reveal>
          <div className="mt-14 md:mt-20">
            <PoolChart />
          </div>
          <Reveal className="mt-16 rounded-hani-lg bg-[#1d0833] px-7 py-9 md:px-12 md:py-12">
            <p className="text-[clamp(1.1rem,2vw,1.5rem)] font-bold text-paper">연결되는 업체가 많아질수록</p>
            <p className="mt-2 text-[clamp(1.5rem,3vw,2.3rem)] font-bold tracking-[-0.02em] text-[var(--color-champagne)]">매칭풀은 더 넓어집니다</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
