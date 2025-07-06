type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function MessageInputCard({ value, onChange }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-2">
      <label className="block text-base font-semibold text-gray-900 mb-2">메시지 내용</label>
      <textarea
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 transition-all resize-none min-h-[80px] text-gray-900 bg-gray-50"
        placeholder="메시지 내용을 입력하세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={6}
      />
    </div>
  );
}
