'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white/90 backdrop-blur shadow-inner border-t border-gray-200 mt-8">
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        {/* 로고 및 서비스 설명 */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="쏜다 로고"
              width={32}
              height={32}
              className="rounded-full border border-gray-200"
            />
            <span className="text-lg font-extrabold text-orange-700 tracking-tight">
              쏜다: SSON-DA
            </span>
          </div>
          <span className="text-xs text-gray-500">가장 심플한 문자 발송 서비스</span>
        </div>
        {/* 네비게이션 */}
        <nav className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
          <Link href="/" className="text-xs text-gray-700 hover:text-orange-600 transition">
            메인페이지
          </Link>
          <Link href="/send" className="text-xs text-gray-700 hover:text-orange-600 transition">
            문자 보내기
          </Link>
        </nav>
        {/* 연락처/저작권/소셜 */}
        <div className="flex flex-col items-center sm:items-end gap-1 text-xs text-gray-500">
          <span>
            문의:{' '}
            <a href="mailto:help@ssonda.com" className="underline hover:text-orange-600">
              help@ssonda.com
            </a>
          </span>
          <span>© {new Date().getFullYear()} 쏜다(sson-da). All rights reserved.</span>
          <div className="flex gap-2 mt-1">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              className="hover:text-orange-600"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
            </a>
            {/* 추가 소셜 아이콘 필요시 여기에 */}
          </div>
        </div>
      </div>
    </footer>
  );
}
