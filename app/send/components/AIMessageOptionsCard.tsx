import { useState } from 'react';

type Props = {
  onGenerate: (
    style: string,
    title: string,
    maxLength: number,
    description: string
  ) => Promise<void>;
};

const styles = [
  { name: '정중', emoji: '🙏' },
  { name: '친근', emoji: '😊' },
  { name: '장난', emoji: '😄' },
  { name: '명랑', emoji: '🌟' },
  { name: '공감', emoji: '💙' },
  { name: '겸손', emoji: '🙇' },
  { name: '전문적', emoji: '💼' },
  { name: '격려', emoji: '💪' },
];

const titles = [
  { name: '초대', emoji: '📅' },
  { name: '감사', emoji: '🙏' },
  { name: '조의', emoji: '😢' },
  { name: '답례', emoji: '🎁' },
  { name: '축하', emoji: '🎉' },
  { name: '사과', emoji: '🙇' },
  { name: '응원', emoji: '💪' },
  { name: '명절', emoji: '🎊' },
  { name: '사랑', emoji: '💕' },
  { name: '쾌유', emoji: '💊' },
  { name: '환영', emoji: '👋' },
  { name: '공지', emoji: '📢' },
  { name: '인사', emoji: '👋' },
  { name: '입학', emoji: '🎓' },
  { name: '출산', emoji: '👶' },
  { name: '졸업', emoji: '🎓' },
  { name: '약속', emoji: '🤝' },
  { name: '초청', emoji: '📩' },
  { name: '위로', emoji: '🤗' },
  { name: '회식', emoji: '🍻' },
  { name: '모임', emoji: '👥' },
  { name: '제안', emoji: '💡' },
  { name: '생일', emoji: '🎂' },
  { name: '결혼', emoji: '💒' },
];
const maxLengths = [
  { length: 50, emoji: '📝' },
  { length: 100, emoji: '📄' },
  { length: 200, emoji: '📋' },
];

export default function AIMessageOptionsCard({ onGenerate }: Props) {
  const [style, setStyle] = useState('');
  const [title, setTitle] = useState('');
  const [maxLength, setMaxLength] = useState(100);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!style || !title) {
      alert('스타일과 주제를 선택해주세요.');
      return;
    }
    setLoading(true);
    try {
      await onGenerate(style, title, maxLength, description || '');
    } catch (error) {
      console.error('메시지 생성 오류:', error);
      alert('메시지 생성 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 border-2 border-purple-100">
      <div className="flex items-center gap-2 mb-6">
        <svg
          className="w-6 h-6 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
        <h3 className="text-xl font-bold text-gray-900">AI 메시지 생성</h3>
      </div>

      <div className="space-y-6">
        {/* 스타일 선택 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            스타일 <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {styles.map((s) => (
              <button
                key={s.name}
                type="button"
                onClick={() => setStyle(s.name)}
                className={`flex items-center gap-2 shadow-lg px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                  style === s.name
                    ? 'bg-purple-600 text-white shadow-lg transform scale-105 bg-gradient-to-br from-purple-600 to-purple-400'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                <span className="text-lg">{s.emoji}</span>
                <span>{s.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 주제 선택 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            주제 <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {titles.map((t) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setTitle(t.name)}
                className={`flex items-center gap-2 shadow-lg px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                  title === t.name
                    ? 'bg-pink-600 text-white shadow-lg transform scale-105 bg-gradient-to-br from-pink-600 to-pink-400'
                    : 'bg-white text-gray-700 hover:bg-pink-50 border border-gray-200'
                }`}
              >
                <span className="text-lg">{t.emoji}</span>
                <span>{t.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 최대 길이 선택 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">최대 길이</label>
          <div className="flex gap-3">
            {maxLengths.map((item) => (
              <button
                key={item.length}
                type="button"
                onClick={() => setMaxLength(item.length)}
                className={`flex items-center gap-2 shadow-lg px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  maxLength === item.length
                    ? 'bg-amber-600 text-white shadow-md transform scale-105 bg-gradient-to-br from-amber-600 to-amber-400'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-200'
                }`}
              >
                <span className="text-lg">{item.emoji}</span>
                <span>{item.length}자</span>
              </button>
            ))}
          </div>
        </div>

        {/* 내용 입력 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            내용 <span className="text-gray-400 text-xs">(선택사항)</span>
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-400 transition-all resize-none min-h-[80px] text-gray-900 bg-white"
            placeholder="메시지에 포함할 내용을 입력해주세요 (선택사항)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </div>

        {/* 생성 버튼 */}
        <button
          type="button"
          onClick={handleGenerate}
          disabled={loading || !style || !title}
          className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
            loading || !style || !title
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              생성 중...
            </span>
          ) : (
            '✨ AI로 메시지 생성하기'
          )}
        </button>
      </div>
    </div>
  );
}
