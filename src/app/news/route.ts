import { NextResponse } from 'next/server';
import { getNewsFromUrl } from '../../../api/apiRequests';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url: string = searchParams.get('url')!;
  const data = await getNewsFromUrl(url);
  return NextResponse.json(data);
}
