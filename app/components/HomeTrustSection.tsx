'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HomeTrustSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { value: '25,000+', label: '개인/기업 사용', icon: '👥' },
    { value: '99.9%', label: '전송 성공률', icon: '✅' },
    { value: '초당 30건', label: '평균 전송 속도', icon: '⚡️' },
    { value: '3초', label: 'AI 생성 시간', icon: '✨' },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            신뢰받는 <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">서비스</span>
          </h2>
          <p className="text-gray-600 text-lg">
            수많은 사용자들이 선택한 검증된 플랫폼
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-2 border-gray-100 hover:border-purple-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-gray-500 text-center">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border-2 border-purple-100 transition-all duration-1000 delay-300 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="text-center mb-8">
            <span className="text-lg font-semibold text-gray-700 mb-2 block">
              앞서나가는 브랜드들이 선택한{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text font-bold">
                쏜다
              </span>
            </span>
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                <Image src="/logo.png" alt="쏜다 로고" width={48} height={48} className="rounded-full" />
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                <Image src="/logo.png" alt="쏜다 로고" width={48} height={48} className="rounded-full" />
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                <Image src="/logo.png" alt="쏜다 로고" width={48} height={48} className="rounded-full" />
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                <Image src="/logo.png" alt="쏜다 로고" width={48} height={48} className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
