'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center bg-gradient-to-br from-orange-50 to-gray-100 animate-fade-in-pc">
      {/* 헤드라인 & CTA */}
      <section className="w-full max-w-3xl flex flex-col items-center justify-center py-12 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-orange-700 mb-4 drop-shadow-sm">
          모든 메시지, 한 번에{' '}
          <span className="bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text">
            쏜다
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 font-medium">
          <span className="font-bold text-orange-600">가장 심플한</span> 문자 발송 서비스
          <br />
        </p>
        <button
          className="px-8 py-3 rounded-full bg-orange-600 text-white font-bold text-lg shadow-lg hover:bg-orange-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 mb-2"
          onClick={() => router.push('/send')}
        >
          문자 보내기 시작하기
        </button>
      </section>

      {/* 서비스 특징 카드 */}
      <section className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 py-8">
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-3 border border-orange-100">
          <span className="text-3xl">⚡️</span>
          <h3 className="font-bold text-orange-700 text-lg">즉시 전송</h3>
          <p className="text-sm text-gray-700 text-center">
            빠르고 안정적인
            <br /> 문자/알림톡 발송
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-3 border border-orange-100">
          <span className="text-3xl">🤖</span>
          <h3 className="font-bold text-orange-700 text-lg">자동화 지원</h3>
          <p className="text-sm text-gray-700 text-center">
            예약 발송
            <br />
            마케팅 효율 극대화
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-3 border border-orange-100">
          <span className="text-3xl">🔒</span>
          <h3 className="font-bold text-orange-700 text-lg">안전한 관리</h3>
          <p className="text-sm text-gray-700 text-center">안전한 데이터 관리</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-3 border border-orange-100">
          <span className="text-3xl">📈</span>
          <h3 className="font-bold text-orange-700 text-lg">통계 & 리포트</h3>
          <p className="text-sm text-gray-700 text-center">
            발송 결과
            <br />
            실시간 통계 제공
          </p>
        </div>
      </section>

      {/* 신뢰 강조/슬로건/통계 */}
      <section className="w-full max-w-3xl flex flex-col items-center justify-center py-8 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-orange-700">25,000+</span>
            <span className="text-xs text-gray-500">개인/기업 사용</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-300" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-orange-700">99.9%</span>
            <span className="text-xs text-gray-500">전송 성공률</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-300" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-orange-700">초당 30건</span>
            <span className="text-xs text-gray-500">평균 전송 속도</span>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <span className="text-lg font-semibold text-gray-700 mb-2">
            앞서나가는 브랜드들이 선택한 <span className="text-orange-600">쏜다</span>
          </span>
          <div className="flex gap-2 flex-wrap justify-center">
            <Image
              src="/logo.png"
              alt="쏜다 로고"
              width={32}
              height={32}
              className="rounded-full border border-gray-200"
            />
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fade-in-pc {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-pc {
          animation: fade-in-pc 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
      `}</style>
    </div>
  );
}
