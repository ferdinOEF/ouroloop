import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function POST(req: Request) {
  const session = await getSession();
  if (!session || session.role !== 'ADMIN') {
    return NextResponse.json({ ok: false, message: 'Unauthorised' }, { status: 403 });
  }

  const body = await req.json();
  const payment = await prisma.payment.create({
    data: {
      programmeId: body.programmeId,
      personProfileId: body.personProfileId,
      amount: body.amount,
      submissionIds: body.submissionIds ?? [],
      eventId: body.eventId
    }
  });

  return NextResponse.json({ ok: true, payment });
}
