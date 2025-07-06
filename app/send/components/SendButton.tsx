import React from 'react';

type Props = {
  onClick: () => void;
  disabled: boolean;
  loading: boolean;
};

export default function SendButton({ onClick, disabled, loading }: Props) {
  return (
    <button
      className="w-full max-w-xs py-3 px-6 rounded-full bg-orange-600 text-white font-semibold text-lg shadow-md hover:bg-orange-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 disabled:opacity-60 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? '전송 중...' : '전송하기'}
    </button>
  );
}
