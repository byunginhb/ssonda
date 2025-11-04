'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CTASection() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 py-20 px-4 relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            AI가 만드는 완벽한 메시지로 더 스마트한 소통을 시작하세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push('/send')}
              className="group px-10 py-5 rounded-full bg-white text-purple-600 font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>✨</span>
              <span>무료로 시작하기</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-5 rounded-full bg-white/10 backdrop-blur text-white font-semibold text-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              더 알아보기
            </button>
          </div>

          {/* 통계 */}
          <div className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">25,000+</div>
              <div className="text-white/80 text-sm">사용자</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-white/80 text-sm">만족도</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">3초</div>
              <div className="text-white/80 text-sm">평균 생성 시간</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

