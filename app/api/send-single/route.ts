import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const destination = searchParams.get('destination');
    const source = searchParams.get('source');
    const text = searchParams.get('text');
    if (!destination || !source || !text) {
      return NextResponse.json({ error: '필수 값 누락' }, { status: 400 });
    }
    const url = `http://sms.xentz.net/API/SendSMS?username=SMSGW020&apiId=GJxv8dOj&json=True&destination=${encodeURIComponent(destination)}&source=${encodeURIComponent(source)}&text=${encodeURIComponent(text)}`;
    const res = await fetch(url);
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
