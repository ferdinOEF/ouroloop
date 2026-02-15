import './globals.css';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { SiteHeader } from '@/components/layout/site-header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'OuroLoop – Coastal Stewardship & Resilience Finance',
  description: 'People first. Places mapped. Proof verified. Payments delivered.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="min-h-screen font-[var(--font-inter)] text-[16px] leading-relaxed">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
