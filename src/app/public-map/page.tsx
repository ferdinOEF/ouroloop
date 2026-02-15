import { redirect } from 'next/navigation';

export default function PublicMapRedirect() {
  redirect('/platform');
}
