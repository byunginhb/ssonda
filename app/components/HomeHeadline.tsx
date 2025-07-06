export default function HomeHeadline({ onClickCTA }: { onClickCTA: () => void }) {
  return (
    <section className="w-full max-w-3xl flex flex-col items-center justify-center py-12 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-orange-700 mb-4 drop-shadow-sm">
        모든 메시지, 한 번에 <span className="bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text">쏜다</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-6 font-medium">
        <span className="font-bold text-orange-600">가장 심플한</span> 문자 발송 서비스
      </p>
      <button
        className="px-8 py-3 rounded-full bg-orange-600 text-white font-bold text-lg shadow-lg hover:bg-orange-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 mb-2"
        onClick={onClickCTA}
      >
        문자 보내기 시작하기
      </button>
    </section>
  );
}
