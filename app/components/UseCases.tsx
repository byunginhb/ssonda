'use client';

import { useState, useEffect } from 'react';

interface UseCase {
  emoji: string;
  title: string;
  description: string;
  examples: string[];
  gradient: string;
}

const useCases: UseCase[] = [
  {
    emoji: '💼',
    title: '비즈니스',
    description: '고객 관리와 마케팅에 활용',
    examples: ['고객 초대', '감사 인사', '공지사항'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    emoji: '🎉',
    title: '축하 & 인사',
    description: '특별한 순간을 전달',
    examples: ['생일 축하', '결혼 축하', '입학 축하'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    emoji: '💝',
    title: '관계 형성',
    description: '따뜻한 마음을 전달',
    examples: ['사랑 고백', '위로 메시지', '명절 인사'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    emoji: '🤝',
    title: '소통',
    description: '일상의 소통을 더 쉽게',
    examples: ['약속 잡기', '모임 초대', '회식 안내'],
    gradient: 'from-orange-500 to-amber-500',
  },
];

export default function UseCases() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            어떤 상황에서 <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">활용</span>할 수 있나요?
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            다양한 상황에 맞는 메시지를 AI가 자동으로 생성해드립니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-purple-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`text-6xl mb-6 bg-gradient-to-r ${useCase.gradient} text-transparent bg-clip-text`}>
                {useCase.emoji}
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">{useCase.title}</h3>
              <p className="text-gray-600 mb-6">{useCase.description}</p>
              <div className="space-y-2">
                {useCase.examples.map((example, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-700 bg-white rounded-lg px-3 py-2 shadow-sm"
                  >
                    <span className="text-purple-600">✓</span>
                    <span>{example}</span>
                  </div>
                ))}
              </div>
              <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${useCase.gradient} transition-all duration-300 rounded-full`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

