import { Section, Card } from '@/components/ui/primitives';

export default function LoginPage() {
  return (
    <Section title="Sign in" subtitle="Use seeded demo credentials to access role-specific workflows.">
      <Card>
        <form action="/api/auth/login" method="post" className="grid max-w-md gap-3">
          <input name="email" placeholder="Email" type="email" className="rounded-xl border bg-white p-3" required />
          <input name="password" placeholder="Password" type="password" className="rounded-xl border bg-white p-3" required />
          <button className="rounded-full bg-brand-primary px-5 py-2 text-white">Sign in</button>
        </form>
        <p className="mt-4 text-sm text-brand-muted">Demo: <code>user8@ouroloop.demo</code> / <code>demo-hash</code> (Admin)</p>
      </Card>
    </Section>
  );
}
