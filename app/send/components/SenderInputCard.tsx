type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function SenderInputCard({ value, onChange }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-2">
      <label className="block text-base font-semibold text-gray-900 mb-2">보내는 사람 번호</label>
      <input
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 transition-all text-gray-900 bg-gray-50"
        placeholder="발신번호 입력"
        value="123456"
        type="number"
        readOnly
        onChange={() => {}}
      />
    </div>
  );
}
