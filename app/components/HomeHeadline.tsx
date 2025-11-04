'use client';

import { useState, useEffect } from 'react';

export default function HomeHeadline({ onClickCTA }: { onClickCTA: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full max-w-5xl flex flex-col items-center justify-center py-16 sm:py-20 px-4 text-center relative overflow-hidden">
      {/* 배경 그라데이션 효과 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-orange-50/50 to-pink-100/50 blur-3xl -z-10" />
      
      {/* AI 배지 */}
      <div className={`mb-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg">
          <span className="text-xl">✨</span>
          <span className="font-bold text-sm">AI 기반 메시지 생성</span>
          <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">NEW</span>
        </div>
      </div>

      <h1 className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 transition-all duration-1000 delay-100 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
          AI로 만드는
        </span>
        <br />
        <span className="text-gray-900">메시지, 한 번에 쏜다</span>
      </h1>

      <p className={`text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 font-medium transition-all duration-1000 delay-200 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Gemini AI
        </span>
        {' '}가 자동으로 완벽한 메시지를 생성합니다
      </p>

      <p className={`text-sm sm:text-base text-gray-600 mb-8 max-w-2xl transition-all duration-1000 delay-300 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        정중한 인사부터 친근한 축하까지, 상황에 맞는 톤앤매너로 스타일과 주제를 선택하면 AI가 완벽한 메시지를 만들어드립니다
      </p>

      <div className={`flex flex-col sm:flex-row gap-4 items-center transition-all duration-1000 delay-400 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <button
          className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-200 flex items-center gap-2"
          onClick={onClickCTA}
        >
          <span>🚀</span>
          <span>AI 메시지 만들기</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
        <button
          className="px-8 py-4 rounded-full bg-white text-gray-700 font-semibold text-lg shadow-lg hover:bg-gray-50 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 flex items-center gap-2"
          onClick={() => {
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>📖</span>
          <span>더 알아보기</span>
        </button>
      </div>

      {/* 통계 배지 */}
      <div className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-500 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="flex flex-col items-center px-4 py-2 bg-white/80 backdrop-blur rounded-xl shadow-md">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">8가지</span>
          <span className="text-xs text-gray-600">메시지 스타일</span>
        </div>
        <div className="flex flex-col items-center px-4 py-2 bg-white/80 backdrop-blur rounded-xl shadow-md">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">24가지</span>
          <span className="text-xs text-gray-600">주제 선택</span>
        </div>
        <div className="flex flex-col items-center px-4 py-2 bg-white/80 backdrop-blur rounded-xl shadow-md">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">3초</span>
          <span className="text-xs text-gray-600">생성 시간</span>
        </div>
      </div>
    </section>
  );
}
