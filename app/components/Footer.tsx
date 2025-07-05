'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-white/80 backdrop-blur shadow-inner fixed bottom-0 left-0 z-20 animate-fade-in-footer">
      <div className="max-w-2xl mx-auto px-4 py-2 text-center text-sm text-gray-800">
        © {new Date().getFullYear()} 쏜다(sson-da). 모든 권리 보유. | 메시지 전송 서비스
      </div>
      <style jsx global>{`
        @keyframes fade-in-footer {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-footer {
          animation: fade-in-footer 0.7s ease;
        }
      `}</style>
    </footer>
  );
}
