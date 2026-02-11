import { NextResponse } from 'next/server';

export async function GET() {
  const csv = 'submission_id,status\nS-1001,Approved\nS-1002,Changes Requested';
  return new NextResponse(csv, { headers: { 'content-type': 'text/csv', 'content-disposition': 'attachment; filename="decision-log.csv"' } });
}
