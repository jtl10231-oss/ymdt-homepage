import type { Metadata } from 'next';
import { SUPPORT_PATH, shareMeta } from '@/lib/site';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { SupportHero, BeforeYouWrite, FaqSection, OtherInquiries } from '@/components/sections/support/SupportSections';
import OpenOnHash from '@/components/sections/support/OpenOnHash';

const TITLE = 'HANI 앱 고객지원';
const DESCRIPTION =
  'HANI 앱 이용 중 궁금하거나 불편한 점은 hani@ymdt.io로 문의해 주세요. 로그인, 구독·결제, 계정 삭제 등 자주 묻는 질문도 안내해요.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SUPPORT_PATH },
  ...shareMeta(`${TITLE} · YMDT`, DESCRIPTION, '/og/app.jpg', 'HANI 앱 고객지원'),
};

export default function SupportPage() {
  return (
    <>
      <Header tone="paper" />
      <main>
        <SupportHero />
        <BeforeYouWrite />
        <FaqSection />
        <OtherInquiries />
      </main>
      <OpenOnHash />
      <Footer />
    </>
  );
}
