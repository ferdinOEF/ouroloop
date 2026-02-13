import { cookies } from 'next/headers';
import type { Role } from './types';

export interface SessionUser {
  id: string;
  email: string;
  role: Role;
  name: string;
}

const COOKIE_NAME = 'ouroloop_user';

export async function setSession(user: SessionUser) {
  const store = await cookies();
  store.set(COOKIE_NAME, JSON.stringify(user), { httpOnly: true, sameSite: 'lax', path: '/' });
}

export async function clearSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function getSession() {
  const store = await cookies();
  const raw = store.get(COOKIE_NAME)?.value;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SessionUser;
  } catch {
    return null;
  }
}
