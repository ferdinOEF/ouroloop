import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { setSession } from '@/lib/auth';

export async function POST(req: Request) {
  const formData = await req.formData();
  const email = String(formData.get('email') ?? '');
  const password = String(formData.get('password') ?? '');

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || user.passwordHash !== password) {
    return NextResponse.json({ ok: false, message: 'Invalid credentials' }, { status: 401 });
  }

  await setSession({ id: user.id, email: user.email, role: user.role, name: user.name });
  return NextResponse.redirect(new URL('/dashboard', req.url));
}
