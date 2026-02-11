import { NextResponse } from 'next/server';

const leads: Array<Record<string, string>> = [];

export async function POST(req: Request) {
  const formData = await req.formData();
  const payload = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    message: String(formData.get('message') ?? ''),
    createdAt: new Date().toISOString()
  };
  leads.push(payload);
  return NextResponse.redirect(new URL('/contact?submitted=1', req.url));
}

export async function GET() {
  return NextResponse.json({ count: leads.length, leads });
}
