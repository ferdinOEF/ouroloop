import type { ReactNode } from 'react';

export function Button({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={`rounded-full bg-brand-primary px-4 py-2 font-semibold text-white transition hover:opacity-90 ${className}`}>{children}</button>;
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border bg-brand-bg p-5 shadow-card ${className}`}>{children}</div>;
}

export function Badge({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'success' }) {
  const style = tone === 'success' ? 'bg-brand-success/20 text-brand-text border-brand-success' : 'bg-brand-surface/50 text-brand-text';
  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${style}`}>{children}</span>;
}

export function Stat({ label, value }: { label: string; value: string }) {
  return <div><p className="text-sm text-brand-muted">{label}</p><p className="text-2xl font-bold">{value}</p></div>;
}

export function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: ReactNode }) {
  return <section id={id} className="mx-auto max-w-7xl px-6 py-16"><h2 className="text-3xl font-bold">{title}</h2>{subtitle && <p className="mt-3 max-w-3xl text-brand-muted">{subtitle}</p>}<div className="mt-8">{children}</div></section>;
}

export function Tabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
  return <div className="grid gap-4 md:grid-cols-3">{tabs.map((t) => <Card key={t.label}><h3 className="font-semibold">{t.label}</h3><div className="mt-3 text-sm text-brand-muted">{t.content}</div></Card>)}</div>;
}

export function Modal({ title, children }: { title: string; children: ReactNode }) {
  return <Card><h3 className="font-semibold">{title}</h3><div className="mt-4">{children}</div></Card>;
}
