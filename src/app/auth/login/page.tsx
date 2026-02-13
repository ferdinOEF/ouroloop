import { Section, Card } from '@/components/ui/primitives';

export default function LoginPage() {
  return (
    <Section title="Sign in" subtitle="Email/password authentication scaffold with role-based access control hooks.">
      <Card>
        <form className="grid max-w-md gap-3">
          <input placeholder="Email" type="email" className="rounded-xl border bg-white p-3" />
          <input placeholder="Password" type="password" className="rounded-xl border bg-white p-3" />
          <button className="rounded-full bg-brand-primary px-5 py-2 text-white">Sign in</button>
        </form>
      </Card>
    </Section>
  );
}
