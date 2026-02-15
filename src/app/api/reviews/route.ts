import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function POST(req: Request) {
  const session = await getSession();
  if (!session || (session.role !== 'VERIFIER' && session.role !== 'ADMIN')) {
    return NextResponse.json({ ok: false, message: 'Unauthorised' }, { status: 403 });
  }
  const body = await req.json();
  const status = body.decision as 'APPROVED' | 'REJECTED' | 'CHANGES_REQUESTED';

  await prisma.submission.update({ where: { id: body.submissionId }, data: { status } });
  const review = await prisma.reviewLog.create({
    data: {
      submissionId: body.submissionId,
      verifierId: session.id,
      decision: status,
      note: body.note ?? ''
    }
  });

  return NextResponse.json({ ok: true, review });
}
