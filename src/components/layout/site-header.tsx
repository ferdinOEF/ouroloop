'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Container, Button } from '@/components/ui/primitives';

const navLinks = [
  { href: '/public-map', label: 'Map' },
  { href: '/contact', label: 'Contact' },
  { href: '/dashboard', label: 'Platform' }
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-surface/40 bg-brand-bg/85 backdrop-blur-lg">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-[1.35rem] font-semibold tracking-tight">OuroLoop</Link>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-brand-muted transition hover:text-brand-text">{link.label}</Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/dashboard"><Button className="px-4 py-2">Open Platform</Button></Link>
          </div>

          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-surface/70 bg-white/70 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            <span className="text-lg">☰</span>
          </button>
        </div>

        {open && (
          <div className="mt-3 grid gap-2 rounded-2xl bg-white/85 p-3 shadow-[0_10px_24px_rgba(34,40,38,0.08)] md:hidden">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm text-brand-text hover:bg-brand-surface/35">{link.label}</Link>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}
