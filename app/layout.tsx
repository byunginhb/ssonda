import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '쏜다: ssonda',
  description: '메시지 전송 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
