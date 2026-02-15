'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BrandLink, Card } from '@/components/ui/primitives';

type Props = {
  heading: string;
  bullets: string[];
  cta: string;
  imageLeft?: boolean;
  visual: ReactNode;
};

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.45 }
};

export function FeatureSpotlight({ heading, bullets, cta, imageLeft = true, visual }: Props) {
  return (
    <motion.div {...reveal}>
      <Card className="overflow-hidden bg-gradient-to-br from-[#102235] via-[#132f49] to-[#193452] p-1.5 text-white shadow-[0_24px_60px_rgba(5,109,182,0.25)]">
        <div className={`grid gap-6 rounded-[14px] bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 lg:grid-cols-2 lg:items-center lg:p-8 ${imageLeft ? '' : 'lg:[&>*:first-child]:order-2'}`}>
          <div className="rounded-2xl border border-white/10 bg-[#0f2438] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
            {visual}
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-[1.75rem]">{heading}</h3>
            <ul className="mt-4 space-y-2 text-sm text-cyan-50/95 sm:text-base">
              {bullets.map((b, i) => (
                <motion.li key={b} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-success" />
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>
            <BrandLink href="/platform" className="mt-5 inline-flex text-cyan-100 hover:text-white">{cta}</BrandLink>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
