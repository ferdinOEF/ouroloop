import type { ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Button({ children, variant = 'primary', className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }) {
  const style = variant === 'primary'
    ? 'bg-brand-primary text-white shadow-sm hover:bg-[#055f9f]'
    : 'border border-brand-primary/30 bg-white/70 text-brand-primary hover:bg-white';
  return <button {...props} className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-brand-primary/60 ${style} ${className}`}>{children}</button>;
}

export function BrandLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} className={`text-brand-primary decoration-transparent underline-offset-4 transition hover:underline hover:decoration-brand-primary ${className}`}>{children}</a>;
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl bg-white/75 p-5 shadow-[0_10px_30px_rgba(34,40,38,0.08)] ring-1 ring-[#b4d4d133] ${className}`}>{children}</div>;
}

export function Chip({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'success' }) {
  const style = tone === 'success' ? 'bg-brand-success/20 text-[#1f4f2b]' : 'bg-brand-surface/45 text-brand-text';
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${style}`}>{children}</span>;
}

export function Badge({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'success' }) {
  const style = tone === 'success' ? 'border-brand-success/50 bg-brand-success/15 text-[#1f4f2b]' : 'border-brand-primary/20 bg-white/80 text-brand-text';
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${style}`}>{children}</span>;
}

export function StatRow({ label, value }: { label: string; value: string }) {
  return <div className="flex items-center justify-between border-b border-brand-surface/50 py-2 text-sm last:border-0"><span className="text-brand-muted">{label}</span><span className="font-semibold text-brand-text">{value}</span></div>;
}

export function Stat({ label, value }: { label: string; value: string }) {
  return <div><p className="text-xs uppercase tracking-[0.08em] text-brand-muted">{label}</p><p className="text-2xl font-semibold">{value}</p></div>;
}

export function ScreenPreviewCard({ title, children }: { title: string; children: ReactNode }) {
  return <Card className="overflow-hidden p-0"><div className="flex items-center gap-2 border-b border-brand-surface/60 bg-brand-surface/30 px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-[#ed6a5e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" /><span className="h-2.5 w-2.5 rounded-full bg-[#61c655]" /><p className="ml-2 text-xs font-semibold text-brand-muted">{title}</p></div><div className="p-4">{children}</div></Card>;
}

export function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-[2.3rem]">{title}</h2>
          {subtitle && <p className="mt-3 text-[17px] leading-relaxed text-brand-muted">{subtitle}</p>}
        </div>
        <div className="mt-8 sm:mt-10">{children}</div>
      </Container>
    </section>
  );
}

export function Tabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
  return <div className="grid gap-4 md:grid-cols-3">{tabs.map((t) => <Card key={t.label}><h3 className="text-lg font-semibold">{t.label}</h3><div className="mt-3 text-sm leading-relaxed text-brand-muted">{t.content}</div></Card>)}</div>;
}

export function Modal({ title, children }: { title: string; children: ReactNode }) {
  return <Card><h3 className="text-lg font-semibold">{title}</h3><div className="mt-4">{children}</div></Card>;
}
