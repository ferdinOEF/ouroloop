'use client';

import { useState } from 'react';
import { Section, Card } from '@/components/ui/primitives';

export default function Page() {
  const [result, setResult] = useState('');

  async function createSubmission(formData: FormData) {
    const payload = {
      personProfileId: formData.get('personProfileId'),
      placeId: formData.get('placeId'),
      activity: formData.get('activity'),
      notes: formData.get('notes'),
      date: new Date().toISOString(),
      location: { lat: 15.5, lng: 73.8 }
    };
    const res = await fetch('/api/submissions', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
    const json = await res.json();
    setResult(json.ok ? `Created submission ${json.submission.id}` : json.message);
  }

  return (
    <Section title="Submissions" subtitle="Stewards can create evidence submissions (1–5 photos, GPS/manual pin supported in API model).">
      <Card>
        <form action={createSubmission} className="grid gap-3">
          <input name="personProfileId" placeholder="Person profile ID" className="rounded border p-2" required />
          <input name="placeId" placeholder="Place ID" className="rounded border p-2" required />
          <input name="activity" placeholder="Activity" className="rounded border p-2" required />
          <textarea name="notes" placeholder="Notes" className="rounded border p-2" />
          <button className="rounded-full bg-brand-primary px-4 py-2 text-white">Create submission</button>
        </form>
        {result && <p className="mt-3 text-sm">{result}</p>}
      </Card>
    </Section>
  );
}
