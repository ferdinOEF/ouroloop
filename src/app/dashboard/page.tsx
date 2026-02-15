import Link from 'next/link';
import { Card, Section, Stat } from '@/components/ui/primitives';

const dashboardLinks = [
  { href: '/people', label: 'people' },
  { href: '/places', label: 'places' },
  { href: '/programmes', label: 'programmes' },
  { href: '/submissions', label: 'submissions' },
  { href: '/payments', label: 'payments' },
  { href: '/events', label: 'events' },
  { href: '/reports', label: 'reports' }
] as const;

export default function DashboardPage() {
  return (
    <Section title="Role dashboards" subtitle="Steward, verifier, admin, and funder views run on the same people-place registry and audit rails.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card><h3 className="font-semibold">Steward</h3><Stat label="My approved submissions" value="14" /></Card>
        <Card><h3 className="font-semibold">Verifier</h3><Stat label="Queue pending" value="9" /></Card>
        <Card><h3 className="font-semibold">Admin</h3><Stat label="Programmes live" value="3" /></Card>
        <Card><h3 className="font-semibold">Funder</h3><Stat label="Audit exports" value="6" /></Card>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm underline">
        {dashboardLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </div>
    </Section>
  );
}
