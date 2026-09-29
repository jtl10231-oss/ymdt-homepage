import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Gateway from '@/components/sections/home/Gateway';
import { BRAND } from '@/lib/site';

// 첫 페이지 = 두 제품 중 하나를 골라 들어가는 갈림길. 제품 설명은 각 페이지에서.
export default function Home() {
  return (
    <>
      <Header tone="paper" solid />
      <main className="pt-16 md:pt-[72px]">
        <h1 className="sr-only">YMDT — {BRAND.slogan}</h1>
        <Gateway />
      </main>
      <Footer />
    </>
  );
}
