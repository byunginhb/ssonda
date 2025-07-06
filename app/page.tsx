'use client';
import { useRouter } from 'next/navigation';
import HomeHeadline from './components/HomeHeadline';
import HomeFeatures from './components/HomeFeatures';
import HomeTrustSection from './components/HomeTrustSection';
import './custom.css';

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center bg-gradient-to-br from-orange-50 to-gray-100 fade-in-pc">
      <HomeHeadline onClickCTA={() => router.push('/send')} />
      <HomeFeatures />
      <HomeTrustSection />
    </div>
  );
}
