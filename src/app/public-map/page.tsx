import { Section } from '@/components/ui/primitives';
import { GoaMap } from '@/components/map/goa-map';

export default function PublicMapPage() {
  return <Section title="Public Goa pilot map" subtitle="A simplified public view of mapped pilot places and active stewardship proof."><GoaMap /></Section>;
}
