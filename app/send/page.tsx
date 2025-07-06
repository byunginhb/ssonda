'use client';
import { useState } from 'react';

function parseNumbers(input: string): string[] {
  return input
    .split(/[\,\n]/)
    .map((n) => n.trim())
    .filter((n) => n.length > 0);
}

export default function SendPage() {
  const [destInput, setDestInput] = useState('');
  const [source, setSource] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSend = async () => {
    setLoading(true);
    setResult(null);
    const destination = parseNumbers(destInput);
    try {
      let res, data;
      if (destination.length === 1) {
        // 싱글 전송
        const params = new URLSearchParams({
          source,
          destination: destination[0],
          text,
        });
        res = await fetch(`/api/send-single?${params.toString()}`);
        data = await res.json();
      } else {
        // 벌크 전송
        res = await fetch('/api/send-bulk', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ source, destination, text }),
        });
        data = await res.json();
      }
      if (res.ok) setResult('메시지 전송 성공!');
      else if (data.code === -8) setResult('등록되지 않는 발신 번호 입니다.');
      else setResult((data.error || '전송 실패') + (data.code ? ` (code: ${data.code})` : ''));
    } catch (error) {
      console.error(error);
      setResult('전송 중 오류 발생');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 py-10 animate-fade-in-pc">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 받는 사람 카드 */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-2">
          <label className="block text-base font-semibold text-gray-900 mb-2">받는 사람 번호</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 transition-all resize-none min-h-[64px] text-gray-900 bg-gray-50"
            placeholder="01012345678, 01098765432 또는 엔터로 구분"
            value={destInput}
            onChange={(e) => setDestInput(e.target.value)}
            rows={5}
          />
          <span className="text-xs text-gray-500 mt-1">
            여러 개 입력 시 쉼표(,) 또는 엔터로 구분
          </span>
        </div>
        {/* 보내는 사람/메시지 카드 */}
        <div className="flex flex-col gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-2">
            <label className="block text-base font-semibold text-gray-900 mb-2">
              보내는 사람 번호
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 transition-all text-gray-900 bg-gray-50"
              placeholder="발신번호 입력"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-2">
            <label className="block text-base font-semibold text-gray-900 mb-2">메시지 내용</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 transition-all resize-none min-h-[80px] text-gray-900 bg-gray-50"
              placeholder="메시지 내용을 입력하세요"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={6}
            />
          </div>
        </div>
      </div>
      {/* 전송 버튼/결과 카드 */}
      <div className="w-full max-w-4xl mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center">
          <button
            className="w-full max-w-xs py-3 rounded-full bg-orange-600 text-white font-semibold text-lg shadow-md hover:bg-orange-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={handleSend}
            disabled={loading || !source || !destInput || !text}
          >
            {loading ? '전송 중...' : '전송하기'}
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center min-h-[64px]">
          {result && (
            <div className="text-center text-base font-medium animate-fade-in-result text-orange-700">
              {result}
            </div>
          )}
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
        @keyframes fade-in-result {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in-result {
          animation: fade-in-result 0.7s ease;
        }
      `}</style>
    </div>
  );
}
