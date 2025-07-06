import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { source, destination, text } = await req.json();
    console.log('Request body:', { source, destination, text });
    if (!source || !Array.isArray(destination) || destination.length === 0 || !text) {
      console.log('필수 값 누락');
      return NextResponse.json({ error: '필수 값 누락' }, { status: 400 });
    }
    const url = 'https://sms.xentz.net/API/SendBulkSMS';
    // const username = '70';
    // const password = '5hLmjuVY';
    // const encoded = Buffer.from(`${username}:${password}`).toString('base64');
    // console.log('Authorization encoded:', encoded);
    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: `Basic NzA6NWhMbWp1Vlk=`,
      },
      body: JSON.stringify({ source, destination, text }),
    };
    console.log('Fetch options:', fetchOptions);
    const res = await fetch(url, fetchOptions);
    console.log('Fetch response status:', res.status);
    let data;
    try {
      data = await res.json();
      console.log('Response JSON:', data);
    } catch (jsonErr) {
      console.log('JSON parse error:', jsonErr);
      data = null;
    }
    // ErrorCode 체크 (배열 또는 객체)
    let errorCode, description;
    if (Array.isArray(data)) {
      errorCode = data[0]?.ErrorCode;
      description = data[0]?.Description;
    } else {
      errorCode = data?.ErrorCode;
      description = data?.Description;
    }
    if (typeof errorCode !== 'undefined' && errorCode !== 0) {
      console.log('Bulk Error:', { errorCode, description, data });
      return NextResponse.json(
        { error: description || '전송 실패', code: errorCode, detail: data },
        { status: 400 }
      );
    }
    if (!res.ok) {
      console.log('HTTP Error:', res.status, data);
      return NextResponse.json(
        { error: data?.error || '전송 실패', code: res.status },
        { status: 500 }
      );
    }
    return NextResponse.json(data);
  } catch (e) {
    let message = '서버 오류';
    if (e instanceof Error) message = e.message;
    console.log('Catch error:', e);
    return NextResponse.json({ error: '서버 오류', code: 'UNKNOWN', message }, { status: 500 });
  }
}
