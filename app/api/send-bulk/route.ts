import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { source, destination, text } = await req.json();
    if (!source || !Array.isArray(destination) || destination.length === 0 || !text) {
      return NextResponse.json({ error: '필수 값 누락' }, { status: 400 });
    }
    const res = await fetch('http://sms.xentz.net/API/SendBulkSMS', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic NzA6NWhMbWp1Vlk=',
      },
      body: JSON.stringify({ source, destination, text }),
    });
    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        { error: data?.error || '전송 실패', code: res.status },
        { status: 500 }
      );
    }
    return NextResponse.json(data);
  } catch (e) {
    let message = '서버 오류';
    if (e instanceof Error) message = e.message;
    return NextResponse.json({ error: '서버 오류', code: 'UNKNOWN', message }, { status: 500 });
  }
}
