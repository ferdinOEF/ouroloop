'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FeatureSpotlight } from '@/components/landing/feature-spotlight';
import { Badge, BrandLink, ButtonLink, Card, Chip, Container, Section, StatRow } from '@/components/ui/primitives';
import { stewardCards } from '@/lib/demo-data';

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45 }
};

const spotlights = [
  {
    heading: 'People + Place Registry',
    bullets: [
      'Register stewards, verifiers, and programme roles with consent',
      'Map mangroves and khazans as exact boundaries linked to people'
    ],
    cta: 'Explore registry in the Platform Demo →'
  },
  {
    heading: 'Proof + Verification',
    bullets: [
      'Capture photo proof, notes, and location (GPS or pin)',
      'Review workflow: Pending → Changes → Approved / Rejected (with decision log)'
    ],
    cta: 'See proof workflow in the Platform Demo →'
  },
  {
    heading: 'Payments + Reporting',
    bullets: [
      'Record PES, programme payments, and rapid support payouts',
      'Export audit-ready packs: evidence, ledgers, logs, and summaries'
    ],
    cta: 'See payouts and exports in the Platform Demo →'
  },
  {
    heading: 'Disaster Support Payments',
    bullets: [
      'Trigger rapid support when events hit — with clear eligibility snapshots',
      'Generate payout lists from registered people linked to affected places'
    ],
    cta: 'Explore disaster support mode →'
  }
];

function visualMock(title: string) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.08em] text-cyan-200/80">{title}</p>
      <div className="mt-3 space-y-2">
        <div className="h-8 rounded-lg bg-cyan-100/10" />
        <div className="h-8 rounded-lg bg-cyan-100/10" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-16 rounded-lg bg-brand-primary/30" />
          <div className="h-16 rounded-lg bg-white/10" />
          <div className="h-16 rounded-lg bg-brand-success/30" />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="pattern-coast overflow-hidden py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div {...reveal}>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-primary">People-first coastal resilience finance</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight text-brand-text sm:text-[3.7rem]">Coastal resilience that pays people fairly.</h1>
              <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-brand-muted">A Goa pilot linking mangroves and khazans to verified stewardship and rapid support — built with research-grade mapping and clear proof.</p>
              <ul className="mt-6 space-y-2 text-sm text-brand-text sm:text-base">
                <li>• Register people and places with consent and audit trails</li>
                <li>• Turn field proof into verified, trackable work</li>
                <li>• Deliver PES, climate finance, and disaster support payments</li>
                <li>• Export audit packs buyers and governments can trust</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/platform">See the Platform Demo</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">Request a walkthrough</ButtonLink>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['People + Place Registry', 'Verified proof', 'Payment ledger', 'Audit pack export'].map((chip) => <Chip key={chip}>{chip}</Chip>)}
              </div>
            </motion.div>

            <motion.div {...reveal} className="relative">
              <Card className="overflow-hidden p-0">
                <div className="bg-gradient-to-br from-brand-surface/45 via-white to-brand-bg p-6">
                  <svg viewBox="0 0 520 290" className="w-full">
                    <path d="M12 94C116 26 215 171 342 102C404 70 449 53 510 66" stroke="#056DB6" strokeWidth="4" fill="none" />
                    <path d="M18 143C127 86 241 219 389 154C438 132 465 131 503 139" stroke="#9ac7c3" strokeWidth="4" fill="none" />
                    <path d="M66 253C112 165 184 253 227 199C269 147 312 237 370 194C402 170 447 184 492 168" stroke="#222826" strokeWidth="3" fill="none" />
                    <path d="M42 46H189M219 46H278M307 46H408" stroke="#60C977" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </Card>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:-mt-10 lg:px-4">
                <Card>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted">Registry snapshot</p>
                  <div className="mt-3 space-y-1 text-sm">
                    <StatRow label="People" value="412" />
                    <StatRow label="Places" value="38" />
                    <StatRow label="Programmes" value="7" />
                  </div>
                </Card>
                <Card>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted">Latest verified work</p>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center gap-2"><Image src="/sample/proof-1.svg" alt="Bund repair evidence" width={24} height={24} className="rounded" /><span>Bund repair · 17 Feb</span></div>
                    <div className="flex items-center gap-2"><Image src="/sample/proof-2.svg" alt="Mangrove clean-up evidence" width={24} height={24} className="rounded" /><span>Mangrove clean-up · 16 Feb</span></div>
                    <div className="flex items-center gap-2"><Image src="/sample/proof-3.svg" alt="Nursery care evidence" width={24} height={24} className="rounded" /><span>Nursery care · 15 Feb</span></div>
                  </div>
                </Card>
                <Card>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted">Payments delivered</p>
                  <div className="mt-3 space-y-1 text-sm">
                    <StatRow label="Asha M." value="₹1,200" />
                    <StatRow label="Ravi K." value="₹1,800" />
                    <StatRow label="Maria F." value="₹1,500" />
                    <StatRow label="Total paid" value="₹42,600" />
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <Section title="The people closest to risk should be seen — and supported first.">
        <div className="max-w-3xl space-y-4 text-[17px] text-brand-muted">
          <p>Coastal households protect critical ecosystems every day, yet their work is often invisible, underfunded, and hard to verify. When disasters hit, support can arrive late or miss the people who need it most.</p>
          <p>OuroLoop makes stewardship visible and payments accountable — by linking people, mapped places, verified proof, and payout logs in one simple system.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card><p className="text-sm text-brand-muted">Recognition</p><p className="mt-2 text-lg font-semibold">Stewardship becomes visible and valued</p></Card>
          <Card><p className="text-sm text-brand-muted">Reliability</p><p className="mt-2 text-lg font-semibold">Proof and decisions are consistent and reviewable</p></Card>
          <Card><p className="text-sm text-brand-muted">Speed</p><p className="mt-2 text-lg font-semibold">Support can be triggered when events hit</p></Card>
        </div>
      </Section>

      <Section title="People first" subtitle="Steward records stay central in every programme.">
        <motion.div {...reveal} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stewardCards.map((s, idx) => (
            <Card key={s.id}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <p className="mt-0.5 text-sm text-brand-muted">{s.role} · {s.place}</p>
                </div>
                <Badge tone="success">Verified</Badge>
              </div>
              <div className="mt-4 space-y-1 text-sm">
                <StatRow label="Last action" value={s.action} />
                <StatRow label="Last verified" value={`${12 - (idx % 4)} Feb 2026`} />
                <StatRow label="Total paid" value={`₹${s.paid.toLocaleString('en-IN')}`} />
              </div>
            </Card>
          ))}
        </motion.div>
      </Section>

      <Section id="use-cases" title="Platform capabilities for programmes that must deliver">
        <div className="space-y-6">
          {spotlights.map((spotlight, idx) => (
            <FeatureSpotlight
              key={spotlight.heading}
              heading={spotlight.heading}
              bullets={spotlight.bullets}
              cta={spotlight.cta}
              imageLeft={idx % 2 === 0}
              visual={visualMock(spotlight.heading)}
            />
          ))}
        </div>
      </Section>

      <Section title="How it works" subtitle="Register → Log proof → Checks → Payments + audit pack.">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Register', 'People and places are linked with consent and eligibility.'],
            ['Log proof', 'Field teams submit photos, notes, and location evidence.'],
            ['Checks', 'Verifiers review and record clear decision logs.'],
            ['Payments + audit pack', 'Approved work turns into payouts and export files.']
          ].map(([title, text], i) => (
            <Card key={title}>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-surface/65 text-sm font-semibold text-brand-primary">{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-brand-muted">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="What gets paid for">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-brand-primary">One registry. Three payment modes.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <Card><h3 className="text-xl font-semibold">PES</h3><ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-muted"><li>Stewardship that protects ecosystems and livelihoods.</li><li>Clear links between work, place, and people.</li><li>Repeatable rules for fair payouts.</li></ul></Card>
          <Card><h3 className="text-xl font-semibold">Climate finance</h3><ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-muted"><li>Fund verified activities and outcomes.</li><li>Track progress by place and programme.</li><li>Share trusted reports with funders.</li></ul></Card>
          <Card><h3 className="text-xl font-semibold">Disaster support</h3><ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-muted"><li>Trigger rapid support when events hit.</li><li>Snapshot eligibility for transparency.</li><li>Log and reconcile post-event payouts.</li></ul></Card>
        </div>
      </Section>

      <Section title="Product credibility" subtitle="Screens operators can run every day.">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card><p className="text-xs uppercase tracking-[0.08em] text-brand-muted">Programme setup</p><div className="mt-3 space-y-2 text-sm"><StatRow label="Type" value="Disaster programme" /><StatRow label="Buyer" value="Goa Coastal Fund" /><StatRow label="Rule" value="Fixed + milestone" /></div></Card>
          <Card><p className="text-xs uppercase tracking-[0.08em] text-brand-muted">Review queue</p><div className="mt-3 space-y-2"><div className="flex items-center justify-between rounded-xl bg-brand-surface/22 px-3 py-2 text-sm"><span>Asha Naik</span><Badge>Pending</Badge></div><div className="flex items-center justify-between rounded-xl bg-brand-surface/22 px-3 py-2 text-sm"><span>Ravi Dessai</span><Badge>Changes</Badge></div><div className="flex items-center justify-between rounded-xl bg-brand-surface/22 px-3 py-2 text-sm"><span>Maria Fernandes</span><Badge tone="success">Approved</Badge></div></div></Card>
          <Card><p className="text-xs uppercase tracking-[0.08em] text-brand-muted">Payment ledger</p><div className="mt-3 space-y-2 text-sm"><StatRow label="This month" value="₹4,72,000" /><StatRow label="Payouts logged" value="45" /><StatRow label="Pending" value="6" /></div></Card>
        </div>
      </Section>

      <Section title="Audit-ready by design" subtitle="Every payout ties back to verified proof.">
        <Card className="bg-brand-surface/20">
          <div className="grid gap-5 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-lg font-semibold">Audit Pack Preview</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-muted">
                <li>Place summary PDF</li>
                <li>Evidence bundle (photos + notes)</li>
                <li>Decision log (who approved what, and why)</li>
                <li>Payment ledger CSV</li>
              </ul>
            </div>
            <div className="self-end text-sm">
              <BrandLink href="/sample/audit-pack-sample.txt">Download sample audit pack</BrandLink>
            </div>
          </div>
        </Card>
      </Section>

      <Section title="Goa pilot scope: Mangroves + Khazans">
        <div className="grid gap-4 md:grid-cols-2">
          <Card><h3 className="text-xl font-semibold">Mangroves</h3><ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-muted"><li>Nursery care and monitoring</li><li>Litter clearance and channel checks</li><li>Biodiversity and site observations</li></ul></Card>
          <Card><h3 className="text-xl font-semibold">Khazans</h3><ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-muted"><li>Bund upkeep and reinforcement</li><li>Sluice operation and maintenance logs</li><li>Water and soil management checks</li></ul></Card>
        </div>
        <Card className="mt-4 bg-brand-surface/22"><p className="font-semibold">Who benefits: stewards, coastal households, local governance, and funders seeking credible outcomes.</p><p className="mt-3 text-sm text-brand-muted">Pilot in priority clusters → Expand programmes → Scale statewide resilience finance rails.</p></Card>
      </Section>

      <Section id="about" title="DPI rails architecture" subtitle="Registry is the spine; programmes plug in.">
        <Card>
          <Image src="/system-diagram.svg" alt="OuroLoop registry system diagram" className="w-full" width={1200} height={500} />
          <p className="mt-3 text-sm text-brand-muted">People and place records anchor verification, payouts, and reporting across PES, climate finance, and disaster response programmes.</p>
        </Card>
      </Section>

      <Section id="final-cta" title="Ready to run a people-first resilience pilot?" subtitle="If you fund climate outcomes, manage a public programme, or need credible proof for payments — OuroLoop can be your operating layer.">
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Request a walkthrough</ButtonLink>
          <ButtonLink href="/platform" variant="secondary">See the Platform Demo</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
