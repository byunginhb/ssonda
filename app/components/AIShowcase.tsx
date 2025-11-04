'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AIShowcase() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const steps = [
    {
      step: '1',
      emoji: '🎯',
      title: '스타일 선택',
      description: '정중, 친근, 장난 등 8가지 스타일 중 선택',
      color: 'purple',
    },
    {
      step: '2',
      emoji: '📝',
      title: '주제 선택',
      description: '축하, 감사, 초대 등 24가지 주제 중 선택',
      color: 'pink',
    },
    {
      step: '3',
      emoji: '✨',
      title: 'AI 생성',
      description: 'Gemini AI가 상황에 맞는 메시지 자동 생성',
      color: 'purple',
    },
    {
      step: '4',
      emoji: '🚀',
      title: '즉시 발송',
      description: '생성된 메시지를 바로 발송',
      color: 'orange',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg mb-6 transition-all duration-1000 ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <span className="text-xl">🤖</span>
            <span className="font-bold">AI 기반 메시지 생성</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 transition-all duration-1000 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              3단계
            </span>
            로 완성하는 완벽한 메시지
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            복잡한 고민 없이 스타일과 주제만 선택하면 AI가 나머지를 해결합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`relative bg-white rounded-2xl shadow-xl p-6 border-2 border-transparent hover:border-purple-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {item.step}
              </div>
              <div className="text-5xl mb-4 mt-4">{item.emoji}</div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-500 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={() => router.push('/send')}
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <span>✨</span>
            <span>지금 바로 AI 메시지 만들기</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

