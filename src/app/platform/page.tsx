import { GoaMapLazy } from '@/components/map/goa-map-lazy';
import { Badge, Card, Container, Section, StatRow } from '@/components/ui/primitives';

export default function PlatformPage() {
  return (
    <main>
      <section className="py-14 sm:py-16">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Platform Demo</h1>
              <p className="mt-3 max-w-2xl text-[17px] text-brand-muted">Explore the Goa pilot map, people-place registry links, verified proof, and payout trails.</p>
            </div>
            <Badge>Demo data</Badge>
          </div>
          <div className="mt-8">
            <GoaMapLazy />
          </div>
        </Container>
      </section>

      <Section title="Registry and workflow snapshots">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card>
            <p className="text-xs uppercase tracking-[0.08em] text-brand-muted">People-place registry</p>
            <div className="mt-3 space-y-2 text-sm">
              <StatRow label="Registered people" value="412" />
              <StatRow label="Mapped places" value="38" />
              <StatRow label="Active assignments" value="266" />
            </div>
          </Card>
          <Card>
            <p className="text-xs uppercase tracking-[0.08em] text-brand-muted">Verification queue</p>
            <div className="mt-3 space-y-2 text-sm">
              <StatRow label="Pending" value="18" />
              <StatRow label="Changes requested" value="6" />
              <StatRow label="Approved this week" value="42" />
            </div>
          </Card>
          <Card>
            <p className="text-xs uppercase tracking-[0.08em] text-brand-muted">Payment ledger</p>
            <div className="mt-3 space-y-2 text-sm">
              <StatRow label="Logged payouts" value="₹4,72,000" />
              <StatRow label="Disaster support run" value="1 active event" />
              <StatRow label="Audit exports" value="12 generated" />
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
