'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 py-10 animate-fade-in-pc">
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 소개 카드 */}
        <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col items-center justify-center gap-4">
          <Image
            src="/logo.png"
            alt="쏜다 로고"
            width={80}
            height={80}
            className="mb-2 drop-shadow-lg rounded-full"
          />
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text animate-gradient-move">
            쏜다: SSON-DA
          </h1>
          <p className="text-lg text-gray-800 text-center">
            전문가를 위한 심플한 메시지 전송 서비스
          </p>
        </div>
        {/* 액션 카드 */}
        <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col items-center justify-center gap-8">
          <span className="text-xl font-semibold text-orange-700">문자 보내기</span>
          <button
            className="w-full max-w-xs py-3 rounded-full bg-orange-600 text-white font-semibold text-lg shadow-lg hover:bg-orange-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 animate-bounce-in"
            onClick={() => router.push('/send')}
          >
            문자 보내기
          </button>
        </div>
      </div>
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
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 3s linear infinite alternate;
        }
        @keyframes bounce-in {
          0% {
            transform: scale(0.9);
          }
          60% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-bounce-in {
          animation: bounce-in 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
      `}</style>
    </div>
  );
}
