import { NextResponse } from 'next/server';
import { data } from '../../data/handoff.data';

export async function GET() {
  try {
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error(error);
  }
}

export async function POST(request) {
  try {
    const body = await request.body.json();
    console.log(body);
    const newData = {
      id: Date.now(),
      text: body.data,
    };
    data.push(newData);
    return NextResponse.json(newData);
  } catch (error) {
    return NextResponse.error(error);
  }
}
