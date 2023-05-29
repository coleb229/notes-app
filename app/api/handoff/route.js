import { NextResponse } from 'next/server';
import { data } from '../../../data/handoff.data';

// make sure when you go through next docs you have 'using app router' selected
// https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export async function GET() {
  try {
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error(error);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newRecord = {
      id: Date.now(),
      text: body.text,
    };
    data.push(newRecord);
    return NextResponse.json(newRecord);
  } catch (error) {
    return NextResponse.error(error);
  }
}
