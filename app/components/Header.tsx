'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white/90 backdrop-blur shadow-md fixed top-0 left-0 z-30 animate-fade-in-header border-b border-gray-200">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
          <Image
            src="/logo.png"
            alt="쏜다 로고"
            width={32}
            height={32}
            className="rounded-full border border-gray-200 group-hover:scale-110 transition-transform min-w-[32px] min-h-[32px]"
          />
          <span className="text-lg sm:text-2xl font-extrabold text-orange-700 tracking-tight drop-shadow-sm truncate">
            쏜다: SSON-DA
          </span>
        </Link>
        {/* 햄버거 버튼 (모바일) */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 ml-2"
          aria-label="메뉴 열기"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
          ></span>
        </button>
        {/* 네비게이션 (PC/Tablet) */}
        <nav className="hidden sm:flex gap-2 md:gap-4 items-center bg-gray-100 rounded-full px-2 sm:px-3 py-1 shadow-inner border border-gray-200">
          <Link
            href="/"
            className={`flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full font-semibold transition-all text-sm sm:text-base border-2 ${
              pathname === '/'
                ? 'bg-orange-500 text-white border-orange-600 shadow-md'
                : 'text-gray-900 hover:bg-orange-50 hover:text-orange-600 border-transparent'
            }`}
          >
            <span className="text-lg">🏠</span> <span className=" xs:inline">메인페이지</span>
          </Link>
          <span className="w-px h-6 bg-gray-300 mx-1 hidden md:inline-block" />
          <Link
            href="/send"
            className={`flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full font-semibold transition-all text-sm sm:text-base border-2 ${
              pathname.startsWith('/send')
                ? 'bg-orange-500 text-white border-orange-600 shadow-md'
                : 'text-gray-900 hover:bg-orange-50 hover:text-orange-600 border-transparent'
            }`}
          >
            <span className="text-lg">✉️</span> <span className=" xs:inline">문자 보내기</span>
          </Link>
        </nav>
      </div>
      {/* 모바일 메뉴 드롭다운 */}
      {menuOpen && (
        <nav className="sm:hidden w-full bg-white/95 border-t border-b border-gray-200 shadow-md animate-fade-in-header">
          <div className="flex flex-col gap-1 px-4 py-2">
            <Link
              href="/"
              className={`flex items-center gap-2 px-3 py-3 rounded-lg font-semibold transition-all text-base border-2 ${
                pathname === '/'
                  ? 'bg-orange-500 text-white border-orange-600 shadow-md'
                  : 'text-gray-900 hover:bg-orange-50 hover:text-orange-600 border-transparent'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-lg">🏠</span> 메인페이지
            </Link>
            <Link
              href="/send"
              className={`flex items-center gap-2 px-3 py-3 rounded-lg font-semibold transition-all text-base border-2 ${
                pathname.startsWith('/send')
                  ? 'bg-orange-500 text-white border-orange-600 shadow-md'
                  : 'text-gray-900 hover:bg-orange-50 hover:text-orange-600 border-transparent'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-lg">✉️</span> 문자 보내기
            </Link>
          </div>
        </nav>
      )}
      <style jsx global>{`
        @keyframes fade-in-header {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-header {
          animation: fade-in-header 0.7s ease;
        }
      `}</style>
    </header>
  );
}
