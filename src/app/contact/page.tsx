import { Button, Card, Container } from '@/components/ui/primitives';

export default function ContactPage() {
  return (
    <main className="py-14 sm:py-16">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Request a walkthrough</h1>
          <p className="mt-3 text-[17px] text-brand-muted">Share your programme scope and we will respond with a tailored rollout plan.</p>
        </div>
        <Card className="mt-8 max-w-2xl">
          <form action="/api/leads" method="post" className="grid gap-3">
            <input name="name" required className="rounded-xl border border-brand-surface/70 bg-white p-3" placeholder="Name" />
            <input name="email" required type="email" className="rounded-xl border border-brand-surface/70 bg-white p-3" placeholder="Work email" />
            <textarea name="message" className="rounded-xl border border-brand-surface/70 bg-white p-3" placeholder="Message" />
            <Button type="submit">Submit</Button>
          </form>
        </Card>
      </Container>
    </main>
  );
}
