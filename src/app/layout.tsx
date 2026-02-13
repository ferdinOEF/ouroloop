import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'OuroLoop – Coastal Stewardship & Resilience Finance',
  description: 'People first. Places mapped. Proof verified. Payments delivered.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen">
        <header className="sticky top-0 z-50 border-b bg-brand-bg/95 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-brand-text">OuroLoop</Link>
            <div className="flex gap-4 text-sm font-medium">
              <Link href="/public-map">Map</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/dashboard" className="rounded-full bg-brand-primary px-4 py-2 text-white">Platform</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
