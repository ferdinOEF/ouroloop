'use client';

import { useState } from 'react';
import { Section, Card } from '@/components/ui/primitives';

export default function Page() {
  const [result, setResult] = useState('');

  async function approveSubmission(formData: FormData) {
    const payload = {
      submissionId: formData.get('submissionId'),
      decision: formData.get('decision'),
      note: formData.get('note')
    };
    const res = await fetch('/api/reviews', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
    const json = await res.json();
    setResult(json.ok ? `Decision logged: ${json.review.decision}` : json.message);
  }

  return (
    <Section title="Reviews & event decisions" subtitle="Verifiers/admins can approve, reject, or request changes; decisions are logged.">
      <Card>
        <form action={approveSubmission} className="grid gap-3">
          <input name="submissionId" placeholder="Submission ID" className="rounded border p-2" required />
          <select name="decision" className="rounded border p-2">
            <option value="APPROVED">Approved</option>
            <option value="CHANGES_REQUESTED">Changes Requested</option>
            <option value="REJECTED">Rejected</option>
          </select>
          <textarea name="note" placeholder="Decision note" className="rounded border p-2" />
          <button className="rounded-full bg-brand-primary px-4 py-2 text-white">Log decision</button>
        </form>
        {result && <p className="mt-3 text-sm">{result}</p>}
      </Card>
    </Section>
  );
}
