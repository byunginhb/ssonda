'use client';
import { useRouter } from 'next/navigation';
import HomeHeadline from './components/HomeHeadline';
import HomeFeatures from './components/HomeFeatures';
import AIShowcase from './components/AIShowcase';
import UseCases from './components/UseCases';
import Benefits from './components/Benefits';
import HomeTrustSection from './components/HomeTrustSection';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import './custom.css';

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-br from-orange-50 via-purple-50 to-gray-100">
      <HomeHeadline onClickCTA={() => router.push('/send')} />
      <HomeFeatures />
      <AIShowcase />
      <UseCases />
      <Benefits />
      <HomeTrustSection />
      <FAQ />
      <CTASection />
    </div>
  );
}
