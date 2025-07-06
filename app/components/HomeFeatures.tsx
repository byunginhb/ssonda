export default function HomeFeatures() {
  return (
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
          <br />마케팅 효율 극대화
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
          <br />실시간 통계 제공
        </p>
      </div>
    </section>
  );
}
