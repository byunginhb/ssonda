import Image from 'next/image';

export default function HomeTrustSection() {
  return (
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
        <span className="text-lg font-semibold text-gray-700 mb-2">앞서나가는 브랜드들이 선택한 <span className="text-orange-600">쏜다</span></span>
        <div className="flex gap-2 flex-wrap justify-center">
          <Image src="/logo.png" alt="쏜다 로고" width={32} height={32} className="rounded-full border border-gray-200" />
        </div>
      </div>
    </section>
  );
}
