import { useState } from 'react';

type Props = {
  result: string | null;
};

export default function ResultCard({ result }: Props) {
  const [showDetail, setShowDetail] = useState(false);
  if (!result) return null;

  const lines = result.split('\n').filter(Boolean);
  const successCount = lines.filter((line) => /성공/.test(line)).length;
  const failCount = lines.length - successCount;

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center min-h-[64px] mt-2 fade-in-result w-full">
      <div className="text-orange-600 text-base font-medium text-center whitespace-pre-line">
        <div>
          성공: {successCount}건, 실패: {failCount}건
        </div>
        {lines.length > 10 && !showDetail && (
          <button
            className="mt-3 px-4 py-1 rounded-full border border-orange-400 text-orange-600 text-sm hover:bg-orange-50 transition"
            onClick={() => setShowDetail(true)}
          >
            자세히 보기
          </button>
        )}
        {(showDetail || lines.length <= 10) && (
          <div className="mt-3 max-h-60 overflow-y-auto w-full text-xs text-orange-700 bg-orange-50/30 rounded p-2">
            {lines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            {lines.length > 10 && (
              <button
                className="mt-2 px-3 py-1 rounded-full border border-gray-300 text-gray-500 text-xs hover:bg-gray-100 transition"
                onClick={() => setShowDetail(false)}
              >
                닫기
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
