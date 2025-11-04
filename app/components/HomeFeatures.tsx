'use client';

import { useState, useEffect } from 'react';

interface Feature {
  emoji: string;
  title: string;
  description: string;
  highlight?: boolean;
  gradient: string;
}

const features: Feature[] = [
  {
    emoji: '✨',
    title: 'AI 메시지 생성',
    description: 'Gemini AI가 상황에 맞는 완벽한 메시지를 자동 생성',
    highlight: true,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    emoji: '⚡️',
    title: '즉시 전송',
    description: '빠르고 안정적인 문자/알림톡 발송',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    emoji: '🎯',
    title: '맞춤형 스타일',
    description: '8가지 스타일과 24가지 주제로 원하는 톤앤매너 선택',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    emoji: '📊',
    title: '대량 발송',
    description: '최대 30건 동시 처리, 초당 30건의 빠른 전송',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    emoji: '🔒',
    title: '안전한 관리',
    description: '보안 인증 및 안전한 데이터 관리',
    gradient: 'from-gray-500 to-slate-500',
  },
  {
    emoji: '📈',
    title: '실시간 통계',
    description: '발송 결과를 실시간으로 확인하고 분석',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export default function HomeFeatures() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="features" className="w-full max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          왜 <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">쏜다</span>를 선택해야 할까요?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          AI 기술과 편리한 기능으로 메시지 발송을 더 스마트하게
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`group relative bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3 border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
              feature.highlight
                ? 'border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50'
                : 'border-gray-100 hover:border-purple-200'
            } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {feature.highlight && (
              <div className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full">
                AI
              </div>
            )}
            <div className={`text-4xl mb-2 bg-gradient-to-r ${feature.gradient} text-transparent bg-clip-text`}>
              {feature.emoji}
            </div>
            <h3 className="font-bold text-xl text-gray-900">{feature.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            <div className={`mt-auto h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} transition-all duration-300 rounded-full`} />
          </div>
        ))}
      </div>
    </section>
  );
}
