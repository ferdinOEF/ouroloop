import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const formData = await req.formData();
  await prisma.lead.create({
    data: {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? '')
    }
  });
  return NextResponse.redirect(new URL('/contact?submitted=1', req.url));
}

export async function GET() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' }, take: 50 });
  return NextResponse.json({ count: leads.length, leads });
}
