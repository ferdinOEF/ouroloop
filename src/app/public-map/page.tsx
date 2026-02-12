import dynamic from 'next/dynamic';
import { Section } from '@/components/ui/primitives';

const GoaMap = dynamic(() => import('@/components/map/goa-map').then((m) => m.GoaMap), { ssr: false });

export default function PublicMapPage() {
  return <Section title="Public Goa pilot map" subtitle="A simplified public view of mapped pilot places and active stewardship proof."><GoaMap /></Section>;
}
