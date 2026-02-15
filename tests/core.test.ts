import { describe, expect, it } from 'vitest';
import { canAccess, createSubmission, approveSubmission, recordPayment } from '@/lib/workflows';

describe('auth + workflow', () => {
  it('checks role auth', () => {
    expect(canAccess('STEWARD', 'submit')).toBe(true);
    expect(canAccess('STEWARD', 'pay')).toBe(false);
  });

  it('creates submission', () => {
    const sub = createSubmission({ photos: 2, notes: 'Mangrove maintenance' });
    expect(sub.status).toBe('PENDING');
  });

  it('approves submission', () => {
    const review = approveSubmission('sub-1', 'APPROVED');
    expect(review.decision).toBe('APPROVED');
  });

  it('records payment', () => {
    const pay = recordPayment(1200);
    expect(pay.amount).toBe(1200);
  });
});
