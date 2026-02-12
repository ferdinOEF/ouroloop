import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Card, Section, Stat } from '@/components/ui/primitives';
import { getSession } from '@/lib/auth';

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect('/auth/login');

  return (
    <Section title={`Welcome, ${session.name}`} subtitle={`Signed in as ${session.role}. Registry, verification, payments, and reporting are available from one dashboard.`}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card><h3 className="font-semibold">Steward</h3><Stat label="My approved submissions" value="14" /></Card>
        <Card><h3 className="font-semibold">Verifier</h3><Stat label="Queue pending" value="9" /></Card>
        <Card><h3 className="font-semibold">Admin</h3><Stat label="Programmes live" value="3" /></Card>
        <Card><h3 className="font-semibold">Funder</h3><Stat label="Audit exports" value="6" /></Card>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm underline">
        {['people', 'places', 'programmes', 'submissions', 'payments', 'events', 'reports'].map((p) => <Link key={p} href={`/${p}`}>{p}</Link>)}
      </div>
      <form action="/api/auth/logout" method="post" className="mt-6">
        <button className="rounded-full border px-4 py-2">Sign out</button>
      </form>
    </Section>
  );
}
