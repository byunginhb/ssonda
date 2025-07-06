import { useState } from 'react';
import RecipientInputCard from './RecipientInputCard';
import SenderInputCard from './SenderInputCard';
import MessageInputCard from './MessageInputCard';
import SendButton from './SendButton';
import ResultCard from './ResultCard';
import '../../custom.css';

function parseNumbers(input: string): string[] {
  return input
    .split(/[\,\n]/)
    .map((n) => n.trim())
    .filter((n) => n.length > 0);
}

export default function SendForm() {
  const [destInput, setDestInput] = useState('');
  const [source, setSource] = useState('123456');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSend = async () => {
    setLoading(true);
    setResult(null);
    const destination = parseNumbers(destInput);
    try {
      let allResults: string[] = [];
      for (let i = 0; i < destination.length; i += 30) {
        const chunk = destination.slice(i, i + 30);
        const chunkResults = await Promise.all(
          chunk.map(async (number) => {
            try {
              const params = new URLSearchParams({
                source,
                destination: number,
                text,
              });
              const res = await fetch(`/api/send-single?${params.toString()}`);
              const data = await res.json();
              if (res.ok) return `${number}: 성공`;
              else if (data.code === -8) return `${number}: 등록되지 않는 발신 번호`;
              else
                return `${number}: 실패 (${data.error || '오류'}${data.code ? ` code:${data.code}` : ''})`;
            } catch (e) {
              console.error(e);
              return `${number}: 전송 중 오류`;
            }
          })
        );
        allResults = allResults.concat(chunkResults);
        if (i + 30 < destination.length) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
      setResult(allResults.join('\n'));
    } catch (error) {
      console.error(error);
      setResult('전송 중 오류 발생');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="w-full min-h-[70vh] flex flex-col items-center bg-gradient-to-br from-orange-50 to-gray-100 fade-in-pc py-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleSend();
      }}
    >
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <RecipientInputCard value={destInput} onChange={setDestInput} />
        <div className="flex flex-col gap-8">
          <SenderInputCard value={source} onChange={setSource} />
          <MessageInputCard value={text} onChange={setText} />
        </div>
      </div>
      <div className="w-full max-w-4xl flex flex-col items-center gap-6 mt-10">
        <div className="flex justify-center w-full">
          <SendButton
            onClick={handleSend}
            disabled={loading || !destInput || !text}
            loading={loading}
          />
        </div>
        <ResultCard result={result} />
      </div>
    </form>
  );
}
