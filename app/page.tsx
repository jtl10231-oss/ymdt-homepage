import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import HomeHero from '@/components/sections/home/HomeHero';
import { ProductDuo, Principles, MatchosTeaser, AppTeaser } from '@/components/sections/home/Sections';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Header tone="night" />
      <main>
        <HomeHero />
        <ProductDuo />
        <Principles />
        <MatchosTeaser />
        <AppTeaser />
        <ContactCTA
          eyebrow="Let's talk"
          title={
            <>
              좋은 인연을 만드는 일,
              <br />
              <span className="text-[var(--color-champagne)]">함께 이야기해요</span>
            </>
          }
          lead="도입 상담과 제품 시연, 제휴 문의 모두 환영합니다."
          subject="YMDT 문의"
        />
      </main>
      <Footer />
    </>
  );
}
