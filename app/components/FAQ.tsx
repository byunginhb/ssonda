'use client';

import { useState, useEffect } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'AI 메시지 생성은 어떻게 작동하나요?',
    answer: '스타일과 주제를 선택하고 원하는 내용을 입력하면, Gemini AI가 상황에 맞는 완벽한 메시지를 자동으로 생성합니다. 3초 이내에 완성됩니다.',
  },
  {
    question: '생성된 메시지를 수정할 수 있나요?',
    answer: '네, 생성된 메시지는 언제든지 수정할 수 있습니다. AI가 생성한 메시지를 기반으로 원하는 대로 편집하실 수 있습니다.',
  },
  {
    question: '어떤 스타일과 주제를 선택할 수 있나요?',
    answer: '정중, 친근, 장난 등 8가지 스타일과 초대, 감사, 축하 등 24가지 주제 중에서 선택할 수 있습니다. 상황에 맞는 조합을 선택하세요.',
  },
  {
    question: '한 번에 몇 개까지 발송할 수 있나요?',
    answer: '최대 30건까지 동시에 발송할 수 있으며, 더 많은 수량의 경우 자동으로 배치 처리됩니다. 초당 30건의 빠른 전송 속도를 제공합니다.',
  },
  {
    question: '발송 결과를 확인할 수 있나요?',
    answer: '네, 발송 즉시 각 번호별 성공/실패 여부를 실시간으로 확인할 수 있습니다. 발송 결과는 상세히 표시됩니다.',
  },
  {
    question: '무료로 사용할 수 있나요?',
    answer: '기본 기능은 무료로 사용할 수 있으며, 대량 발송이나 고급 기능은 별도 요금제가 있습니다. 자세한 내용은 문의해주세요.',
  },
];

export default function FAQ() {
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            자주 묻는 <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">질문</span>
          </h2>
          <p className={`text-lg text-gray-600 transition-all duration-1000 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            궁금한 점이 있으신가요? 여기서 답을 찾아보세요
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border-2 border-gray-200 overflow-hidden transition-all duration-500 hover:border-purple-300 hover:shadow-lg ${
                mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                <span className={`text-2xl text-purple-600 transition-transform flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
      `}</style>
    </section>
  );
}

