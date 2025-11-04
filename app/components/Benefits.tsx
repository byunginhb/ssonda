'use client';

import { useState, useEffect } from 'react';

interface Benefit {
  icon: string;
  title: string;
  description: string;
  highlight?: string;
}

const benefits: Benefit[] = [
  {
    icon: '⏱️',
    title: '시간 절약',
    description: '메시지 작성 시간을 90% 절약',
    highlight: '90%',
  },
  {
    icon: '💡',
    title: '창의적 아이디어',
    description: 'AI가 다양한 표현으로 메시지 생성',
  },
  {
    icon: '📱',
    title: '대량 발송',
    description: '최대 30건 동시 처리로 효율 극대화',
  },
  {
    icon: '🎯',
    title: '맞춤 메시지',
    description: '상황과 대상에 맞는 완벽한 톤앤매너',
  },
  {
    icon: '💰',
    title: '비용 절감',
    description: '외주 없이 내부에서 빠르게 처리',
  },
  {
    icon: '✅',
    title: '품질 보장',
    description: '일관된 품질의 전문적인 메시지',
  },
];

export default function Benefits() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-5xl font-extrabold mb-4 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              쏜다
            </span>
            가 주는 가치
          </h2>
          <p className={`text-lg text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            AI 기술로 더 스마트하고 효율적인 메시지 발송을 경험하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-500 hover:bg-white/20 hover:-translate-y-2 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                {benefit.title}
                {benefit.highlight && (
                  <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
                    {benefit.highlight}
                  </span>
                )}
              </h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

