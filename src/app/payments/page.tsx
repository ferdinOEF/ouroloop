'use client';

import { useState } from 'react';
import { Section, Card } from '@/components/ui/primitives';

export default function Page() {
  const [result, setResult] = useState('');

  async function createPayment(formData: FormData) {
    const payload = {
      programmeId: formData.get('programmeId'),
      personProfileId: formData.get('personProfileId'),
      amount: Number(formData.get('amount')),
      submissionIds: []
    };
    const res = await fetch('/api/payments', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
    const json = await res.json();
    setResult(json.ok ? `Payment ${json.payment.id} recorded` : json.message);
  }

  return (
    <Section title="Payments" subtitle="Manual v1 payment recording with auditable programme links.">
      <Card>
        <form action={createPayment} className="grid gap-3">
          <input name="programmeId" placeholder="Programme ID" className="rounded border p-2" required />
          <input name="personProfileId" placeholder="Person profile ID" className="rounded border p-2" required />
          <input name="amount" type="number" min="1" placeholder="Amount" className="rounded border p-2" required />
          <button className="rounded-full bg-brand-primary px-4 py-2 text-white">Record payment</button>
        </form>
        {result && <p className="mt-3 text-sm">{result}</p>}
      </Card>
    </Section>
  );
}
