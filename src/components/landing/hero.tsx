'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge, Button, Card } from '@/components/ui/primitives';

export function Hero() {
  return (
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
          <svg viewBox="0 0 480 280" className="w-full rounded-3xl border bg-white p-4"><path d="M10 90 C130 20 280 150 470 70" stroke="#056DB6" strokeWidth="4" fill="none" /><path d="M30 130 C150 70 260 210 450 120" stroke="#B4D4D1" strokeWidth="5" fill="none" /><path d="M60 210 C130 120 210 220 260 170 C300 130 340 250 430 160" stroke="#222826" strokeWidth="3" fill="none" /></svg>
          <div className="grid gap-3 sm:grid-cols-3">{['Registry snapshot', 'Latest verified work', 'Payments delivered'].map((c) => <Card key={c}><p className="text-sm">{c}</p><p className="text-xl font-bold">Live</p></Card>)}</div>
        </div>
      </div>
    </section>
  );
}
