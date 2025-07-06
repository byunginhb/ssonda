type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function RecipientInputCard({ value, onChange }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-2">
      <label className="block text-base font-semibold text-gray-900 mb-2">받는 사람 번호</label>
      <textarea
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 transition-all resize-none min-h-[64px] text-gray-900 bg-gray-50"
        placeholder="01012345678, 01098765432 또는 엔터로 구분"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
      />
      <span className="text-xs text-gray-500 mt-1">여러 개 입력 시 쉼표(,) 또는 엔터로 구분</span>
    </div>
  );
}
