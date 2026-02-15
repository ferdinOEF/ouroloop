import type { Role } from './types';

export function canAccess(role: Role, action: 'submit' | 'review' | 'pay') {
  if (action === 'submit') return role === 'STEWARD' || role === 'ADMIN';
  if (action === 'review') return role === 'VERIFIER' || role === 'ADMIN';
  return role === 'ADMIN';
}

export function createSubmission(input: { photos: number; notes: string }) {
  if (input.photos < 1 || input.photos > 5) throw new Error('Photos must be between 1 and 5');
  return { id: 'sub-1', status: 'PENDING', ...input };
}

export function approveSubmission(submissionId: string, decision: 'APPROVED' | 'REJECTED' | 'CHANGES_REQUESTED') {
  return { submissionId, decision, at: new Date().toISOString() };
}

export function recordPayment(amount: number) {
  if (amount <= 0) throw new Error('Amount must be positive');
  return { id: 'pay-1', amount };
}
