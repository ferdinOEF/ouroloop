import { cookies } from 'next/headers';
import type { Role } from './types';

export async function signIn(email: string, role: Role) {
  const store = await cookies();
  store.set('ouroloop_user', JSON.stringify({ email, role }), { httpOnly: true });
}

export async function getSession() {
  const store = await cookies();
  const raw = store.get('ouroloop_user')?.value;
  return raw ? JSON.parse(raw) as { email: string; role: Role } : null;
}
