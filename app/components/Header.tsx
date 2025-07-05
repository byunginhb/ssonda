'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full bg-white/90 backdrop-blur shadow-md fixed top-0 left-0 z-30 animate-fade-in-header border-b border-gray-200">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="쏜다 로고"
            width={36}
            height={36}
            className="rounded-full border border-gray-200 group-hover:scale-110 transition-transform"
          />
          <span className="text-2xl font-extrabold text-orange-700 tracking-tight drop-shadow-sm">
            쏜다: SSON-DA
          </span>
        </Link>
        <nav className="flex gap-2 md:gap-4 items-center bg-gray-100 rounded-full px-3 py-1 shadow-inner border border-gray-200">
          <Link
            href="/"
            className={`flex items-center gap-1 px-4 py-2 rounded-full font-semibold transition-all text-base border-2 ${
              pathname === '/'
                ? 'bg-orange-500 text-white border-orange-600 shadow-md'
                : 'text-gray-900 hover:bg-orange-50 hover:text-orange-600 border-transparent'
            }`}
          >
            <span className="text-lg">🏠</span> 메인페이지
          </Link>
          <span className="w-px h-6 bg-gray-300 mx-1 hidden md:inline-block" />
          <Link
            href="/send"
            className={`flex items-center gap-1 px-4 py-2 rounded-full font-semibold transition-all text-base border-2 ${
              pathname.startsWith('/send')
                ? 'bg-orange-500 text-white border-orange-600 shadow-md'
                : 'text-gray-900 hover:bg-orange-50 hover:text-orange-600 border-transparent'
            }`}
          >
            <span className="text-lg">✉️</span> 문자 보내기
          </Link>
        </nav>
      </div>
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
