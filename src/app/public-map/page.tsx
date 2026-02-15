import { Section } from '@/components/ui/primitives';
import { GoaMapLazy } from '@/components/map/goa-map-lazy';

export default function PublicMapPage() {
  return <Section title="Public Goa pilot map" subtitle="A simplified public view of mapped pilot places and active stewardship proof."><GoaMapLazy /></Section>;
}
