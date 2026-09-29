import type { Metadata } from 'next';
import { shareMeta } from '@/lib/site';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { AppHero, PromiseBand, Features, Feelings, Philosophy, AppCTA } from '@/components/sections/app/AppSections';

const TITLE = 'HANI 앱 — 사주로 나를 읽고, 대화로 나를 이해하다';
const DESCRIPTION =
  '성향과 강점, 관계 방식과 감정 패턴을 지금의 언어로. 나를 이해하는 친구 하늬와의 대화, 다이어리, 관계 인사이트까지 담은 자기이해 앱 HANI.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...shareMeta(TITLE, DESCRIPTION, '/og/app.jpg', 'HANI 앱 — 사주로 나를 읽고, 대화로 나를 이해하다'),
};

export default function HaniAppPage() {
  return (
    <>
      <Header tone="paper" />
      <main>
        <AppHero />
        <PromiseBand />
        <Features />
        <Feelings />
        <Philosophy />
        <AppCTA />
      </main>
      <Footer />
    </>
  );
}
