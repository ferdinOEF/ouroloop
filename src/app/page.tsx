'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { GoaMapLazy } from '@/components/map/goa-map-lazy';
import { Badge, BrandLink, Button, Card, Chip, Container, ScreenPreviewCard, Section, Stat, StatRow, Tabs } from '@/components/ui/primitives';
import { stewardCards, reviewQueue } from '@/lib/demo-data';

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.45 }
};

export default function HomePage() {
  return (
    <main>
      <section className="pattern-coast overflow-hidden py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div {...fadeIn}>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-primary">Goa pilot · Coastal stewardship and resilience finance</p>
              <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight sm:text-[3.5rem]">Coastal resilience that pays people fairly.</h1>
              <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-brand-muted">A Goa pilot linking mangroves and khazans to verified stewardship and rapid support — built with research-grade mapping and clear proof.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="#goa-map"><Button>Explore the Goa Pilot Map</Button></Link>
                <Link href="#final-cta"><Button variant="secondary">Request a Walkthrough</Button></Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">{['People + Place Registry', 'Verified proof', 'Audit-ready reporting', 'Rapid support during disasters'].map((t) => <Chip key={t}>{t}</Chip>)}</div>
            </motion.div>

            <motion.div {...fadeIn} className="relative">
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
                    <div className="flex items-center gap-2"><Image src="/sample/proof-1.svg" alt="Proof 1" width={22} height={22} className="rounded" /><span>Bund repair · 17 Feb</span></div>
                    <div className="flex items-center gap-2"><Image src="/sample/proof-2.svg" alt="Proof 2" width={22} height={22} className="rounded" /><span>Mangrove clean-up · 16 Feb</span></div>
                  </div>
                </Card>
                <Card>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted">Payments delivered</p>
                  <div className="mt-3 space-y-1 text-sm">
                    <StatRow label="Asha M." value="₹1,200" />
                    <StatRow label="Ravi K." value="₹1,800" />
                    <StatRow label="Today total" value="₹42,600" />
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <Section title="People first stewardship" subtitle="Households closest to coastal risk should be recognised quickly, verified fairly, and paid on time.
      ">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-brand-primary">Why it matters</p>
        <motion.div {...fadeIn} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[['Community', 'Local stewards and households are registered with consent.'], ['Stewardship', 'Work logs, geo-pins, and photos are submitted from the field.'], ['Support', 'Verified records drive fair payments and rapid event support.']].map(([title, text]) => (
            <Card key={title} className="bg-brand-surface/26">
              <p className="text-sm font-semibold text-brand-primary">{title}</p>
              <p className="mt-2 text-sm text-brand-muted">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <div className="section-divider" />
      <Section id="goa-map" title="Goa map proof" subtitle="Exact place boundaries linked to people, proof, and payouts.">
        <GoaMapLazy />
      </Section>

      <Section title="How it works" subtitle="A clear four-step flow from registration to payment.">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Register', 'People and places are registered with consent and eligibility.'],
            ['Proof', 'Stewards submit photos, notes, activity date and location.'],
            ['Checks', 'Verifiers approve, request changes, or reject with decision logs.'],
            ['Payments + audit', 'Approved work and event triggers translate into payment and export-ready records.']
          ].map(([title, text], i) => (
            <Card key={title} className="relative">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-surface/55 text-sm font-semibold text-brand-primary">{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-brand-muted">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="What gets paid for">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-brand-primary">One registry. Three payment modes.</p>
        <Tabs tabs={[
          { label: 'PES', content: <ul className="list-disc space-y-1 pl-4"><li>Stewardship that protects ecosystems.</li><li>Work that supports livelihoods.</li><li>Transparent links to place records.</li></ul> },
          { label: 'Climate finance', content: <ul className="list-disc space-y-1 pl-4"><li>Verified activities and outcomes.</li><li>Programme-level tracking by place.</li><li>Buyer-ready reporting.</li></ul> },
          { label: 'Disaster support', content: <ul className="list-disc space-y-1 pl-4"><li>Manual or indicator-led event trigger.</li><li>Eligible list snapshots for fairness.</li><li>Rapid payout logging.</li></ul> }
        ]} />
      </Section>

      <Section title="Product credibility" subtitle="Practical screens teams can use day to day.">
        <div className="grid gap-4 lg:grid-cols-3">
          <ScreenPreviewCard title="Programme setup">
            <StatRow label="Type" value="Disaster programme" />
            <StatRow label="Buyer" value="Goa Coastal Fund" />
            <StatRow label="Rule" value="Fixed + milestone" />
          </ScreenPreviewCard>
          <ScreenPreviewCard title="Review queue">
            {reviewQueue.slice(0, 3).map((r) => <div key={r.id} className="mb-2 flex items-center justify-between rounded-xl bg-brand-surface/20 px-3 py-2 text-sm"><span>{r.steward}</span><Badge tone={r.status === 'APPROVED' ? 'success' : 'default'}>{r.status}</Badge></div>)}
          </ScreenPreviewCard>
          <ScreenPreviewCard title="Payment ledger">
            <Stat label="This month" value="₹4,72,000" />
            <div className="mt-3 space-y-1 text-sm"><StatRow label="Payouts logged" value="45" /><StatRow label="Pending" value="6" /></div>
          </ScreenPreviewCard>
        </div>
      </Section>

      <Section title="Audit pack" subtitle="Every programme run can be exported for due diligence.">
        <Card className="bg-brand-surface/20">
          <div className="grid gap-5 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-lg font-semibold">Export includes</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-muted">
                <li>Place summary PDF with map snapshot</li>
                <li>Approved submissions CSV</li>
                <li>Evidence folder and payment ledger CSV</li>
                <li>Decision log CSV and event snapshot</li>
              </ul>
            </div>
            <div className="self-end text-sm">
              <BrandLink href="/sample/audit-pack-sample.txt">Download sample audit pack index</BrandLink>
            </div>
          </div>
        </Card>
      </Section>

      <Section title="Goa pilot scope">
        <div className="grid gap-4 md:grid-cols-2">
          <Card><h3 className="text-xl font-semibold">Mangroves</h3><ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-muted"><li>Nursery care</li><li>Litter clearance</li><li>Biodiversity logging</li></ul></Card>
          <Card><h3 className="text-xl font-semibold">Khazans</h3><ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-muted"><li>Bund upkeep</li><li>Sluice operation</li><li>Water and soil management</li></ul></Card>
        </div>
        <Card className="mt-4 bg-brand-surface/22"><p className="font-semibold">Who benefits</p><p className="mt-1 text-sm text-brand-muted">Stewards, coastal households, local governance teams, and funders seeking credible impact.</p><p className="mt-3 text-sm"><strong>Roadmap:</strong> Pilot in priority clusters → Expand programmes → Scale statewide resilience finance rails.</p></Card>
      </Section>

      <Section title="DPI rails architecture" subtitle="Registry-centred rails for verification, payments, and reporting.">
        <Card>
          <Image src="/system-diagram.svg" alt="OuroLoop registry system diagram" className="w-full" width={1200} height={500} />
          <p className="mt-3 text-sm text-brand-muted">One trusted registry powering field work, decisions, payouts, and transparent exports.</p>
        </Card>
      </Section>

      <Section title="Founder credibility">
        <Card><p className="text-[17px] leading-relaxed text-brand-muted">I founded OuroLoop after years of doctoral and field research in coastal resilience, combining mapping science with a people-first mission. We keep workflows simple for communities and implementation teams while preserving credible records for buyers and funders. The aim is practical: make stewardship visible, verification fair, and finance dependable for Goa’s mangroves and khazans.</p></Card>
      </Section>

      <Section id="final-cta" title="Request a walkthrough">
        <form action="/api/leads" method="post" className="grid max-w-xl gap-3 rounded-2xl bg-white/75 p-5 shadow-[0_10px_30px_rgba(34,40,38,0.08)] ring-1 ring-brand-surface/40">
          <input name="name" required placeholder="Name" className="rounded-xl border border-brand-surface/70 bg-white p-3" />
          <input name="email" required type="email" placeholder="Work email" className="rounded-xl border border-brand-surface/70 bg-white p-3" />
          <textarea name="message" placeholder="What would you like to see in the walkthrough?" className="rounded-xl border border-brand-surface/70 bg-white p-3" />
          <Button type="submit">Send request</Button>
          <BrandLink href="/sample/concept-note.txt">Download concept note</BrandLink>
        </form>
      </Section>
    </main>
  );
}
