import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function POST(req: Request) {
  const session = await getSession();
  if (!session || (session.role !== 'STEWARD' && session.role !== 'ADMIN')) {
    return NextResponse.json({ ok: false, message: 'Unauthorised' }, { status: 403 });
  }

  const body = await req.json();
  const submission = await prisma.submission.create({
    data: {
      personProfileId: body.personProfileId,
      placeId: body.placeId,
      activity: body.activity,
      date: new Date(body.date ?? new Date()),
      notes: body.notes,
      location: body.location ?? {}
    }
  });

  return NextResponse.json({ ok: true, submission });
}
