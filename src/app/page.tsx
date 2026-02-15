'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { GoaMapLazy } from '@/components/map/goa-map-lazy';
import { Section, Card, Badge, Button, Tabs, Stat } from '@/components/ui/primitives';
import { stewardCards, reviewQueue } from '@/lib/demo-data';

export default function HomePage() {
  return (
    <main>
      <section className="pattern-coast relative flex min-h-[90vh] items-center">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-bold leading-tight">Coastal resilience that pays people fairly.</h1>
            <p className="mt-5 text-lg text-brand-muted">A Goa pilot linking mangroves and khazans to verified stewardship and rapid support — built with research-grade mapping and clear proof.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#goa-map"><Button>Explore the Goa Pilot Map</Button></Link>
              <Link href="#final-cta" className="rounded-full border px-5 py-2">Request a Walkthrough</Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">{['People + Place Registry', 'Verified proof', 'Audit-ready reporting', 'Rapid support during disasters'].map(t => <Badge key={t}>{t}</Badge>)}</div>
          </motion.div>
          <div className="space-y-4">
            <svg viewBox="0 0 480 280" className="w-full rounded-3xl border bg-white p-4"><path d="M10 90 C130 20 280 150 470 70" stroke="#056DB6" strokeWidth="4" fill="none"/><path d="M30 130 C150 70 260 210 450 120" stroke="#B4D4D1" strokeWidth="5" fill="none"/><path d="M60 210 C130 120 210 220 260 170 C300 130 340 250 430 160" stroke="#222826" strokeWidth="3" fill="none"/></svg>
            <div className="grid gap-3 sm:grid-cols-3">{['Registry snapshot', 'Latest verified work', 'Payments delivered'].map((c) => <Card key={c}><p className="text-sm">{c}</p><p className="text-xl font-bold">Live</p></Card>)}</div>
          </div>
        </div>
      </section>

      <Section title="People first stewardship" subtitle="Why it matters: households closest to coastal risk should be recognised, verified, and paid quickly. OuroLoop keeps their contributions visible from field evidence to payout logs.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{stewardCards.map((s) => <Card key={s.id}><div className="flex justify-between"><h3 className="font-semibold">{s.name}</h3><Badge tone="success">Verified</Badge></div><p className="text-sm text-brand-muted">{s.role} · {s.place}</p><p className="mt-3 text-sm">Last action: {s.action}</p><p className="mt-2 font-bold">Total paid: ₹{s.paid.toLocaleString('en-IN')}</p></Card>)}</div>
        <svg viewBox="0 0 640 140" className="mt-8 w-full"><circle cx="90" cy="70" r="38" fill="#B4D4D1"/><circle cx="320" cy="70" r="38" fill="#056DB6"/><circle cx="550" cy="70" r="38" fill="#60C977"/><path d="M130 70 L280 70 M360 70 L510 70" stroke="#222826" strokeWidth="4"/><text x="48" y="125" fill="#222826">Community</text><text x="268" y="125" fill="#222826">Stewardship</text><text x="528" y="125" fill="#222826">Support</text></svg>
      </Section>

      <Section id="goa-map" title="Goa map proof" subtitle="Exact boundaries for mangroves and khazans, linked to people, work verification, and payouts.">
        <GoaMapLazy />
      </Section>

      <Section title="How it works" subtitle="Register people and places, verify proof, deliver payments and support fairly.">
        <div className="grid gap-4 md:grid-cols-4">{['Register people + places','Log proof','Checks','Payments'].map((step, i) => <Card key={step}><svg viewBox="0 0 48 48" className="h-10 w-10"><rect x="6" y="6" width="36" height="36" rx="8" fill={["#B4D4D1", "#056DB6", "#222826", "#60C977"][i]} /></svg><p className="mt-3 font-semibold">{step}</p></Card>)}</div>
      </Section>

      <Section title="What gets paid for">
        <Tabs tabs={[{ label: 'PES', content: 'Pay for stewardship work that protects ecosystems and livelihoods.' }, { label: 'Climate finance', content: 'Fund verified activities and outcomes across mapped places.' }, { label: 'Disaster support', content: 'Trigger rapid support when events hit, with transparent eligibility snapshots.' }]} />
      </Section>

      <Section title="Product credibility">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card><h3 className="font-semibold">Programme setup</h3><p className="text-sm text-brand-muted">Type: Disaster Programme · Buyer: Goa Coastal Fund · Rule: Fixed payout + milestone.</p></Card>
          <Card><h3 className="font-semibold">Review queue</h3>{reviewQueue.map(r => <p key={r.id} className="mt-2 text-sm">{r.id} · {r.steward} · {r.status}</p>)}</Card>
          <Card><h3 className="font-semibold">Payment ledger</h3><Stat label="This month disbursed" value="₹4,72,000" /><p className="text-sm">45 verified payouts logged</p></Card>
        </div>
      </Section>

      <Section title="Audit pack" subtitle="Buyer confidence with export-ready records for due diligence and programme assurance.">
        <Card><p>Includes place summary PDF, approved submissions CSV, evidence folder, payment ledger CSV, decision log CSV, and disaster event snapshot where applicable.</p><a href="/sample/audit-pack-sample.txt" download className="mt-4 inline-block text-brand-primary underline">Download sample audit pack index</a></Card>
      </Section>

      <Section title="Goa pilot scope">
        <div className="grid gap-4 md:grid-cols-2">
          <Card><h3 className="font-semibold">Mangroves</h3><p>Nursery care, litter clearance, channel monitoring, biodiversity logging.</p></Card>
          <Card><h3 className="font-semibold">Khazans</h3><p>Bund upkeep, sluice operation, water and soil management, community reporting.</p></Card>
        </div>
        <Card className="mt-4"><p>Who benefits: stewards, coastal households, local governance, and funders requiring credible climate outcomes.</p><p className="mt-3"><strong>Roadmap:</strong> Pilot in priority clusters → Expand with additional programmes → Scale to statewide resilience finance rails.</p></Card>
      </Section>


      <Section title="DPI rails architecture" subtitle="A modular system with registry at the centre for compliance, verification, payments, and reporting.">
        <Card><Image src="/system-diagram.svg" alt="OuroLoop registry system diagram" className="w-full" width={1200} height={500} /></Card>
      </Section>

      <Section title="Founder credibility">
        <Card><p>I founded OuroLoop after years of doctoral and field research in coastal resilience, combining mapping science with people-centred programme design. Our mission is practical: make stewardship visible, verification fair, and finance dependable for communities managing Goa’s mangroves and khazans. We pair rigorous geospatial boundaries with simple workflows so implementers, verifiers, and funders can work from one trusted record. By connecting ecosystem care, climate finance, and disaster support, we help coastal programmes move from fragmented paperwork to transparent action that communities can trust.</p></Card>
      </Section>

      <Section id="final-cta" title="Request a walkthrough">
        <form action="/api/leads" method="post" className="grid max-w-xl gap-3">
          <input name="name" required placeholder="Name" className="rounded-xl border bg-white p-3" />
          <input name="email" required type="email" placeholder="Work email" className="rounded-xl border bg-white p-3" />
          <textarea name="message" placeholder="What would you like to see in the walkthrough?" className="rounded-xl border bg-white p-3" />
          <Button type="submit">Send request</Button>
          <a href="/sample/concept-note.txt" download className="text-brand-primary underline">Download concept note</a>
        </form>
      </Section>
    </main>
  );
}
