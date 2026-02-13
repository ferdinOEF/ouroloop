'use client';

import { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Polygon, LayersControl } from 'react-leaflet';
import { fallbackPlaces } from '@/lib/demo-data';
import { Card, Badge } from '@/components/ui/primitives';
import type { PlaceGeo } from '@/lib/types';

type GeoFeature = { properties?: { name?: string }; geometry: PlaceGeo['geometry'] };

function toPlaces(features: GeoFeature[], type: 'MANGROVE' | 'KHAZAN'): PlaceGeo[] {
  return features.map((f, i) => ({
    id: `${type}-${i}`,
    name: f.properties?.name ?? `${type} ${i + 1}`,
    placeType: type,
    linkedPeople: 8 + i,
    verifiedWork: 12 + i,
    payouts: 40000 + i * 5000,
    thumbnails: ['/sample/proof-1.svg'],
    geometry: f.geometry
  }));
}

export function GoaMap() {
  const [places, setPlaces] = useState<PlaceGeo[]>(fallbackPlaces);
  const [selected, setSelected] = useState<PlaceGeo>(fallbackPlaces[0]);

  useEffect(() => {
    async function load() {
      try {
        const [m, k] = await Promise.all([
          fetch('/data/goa_mangroves.geojson').then(r => r.ok ? r.json() : { features: [] }),
          fetch('/data/goa_khazans.geojson').then(r => r.ok ? r.json() : { features: [] })
        ]);
        const mapped = [...toPlaces(m.features ?? [], 'MANGROVE'), ...toPlaces(k.features ?? [], 'KHAZAN')];
        if (mapped.length) {
          setPlaces(mapped);
          setSelected(mapped[0]);
        }
      } catch {
        setPlaces(fallbackPlaces);
      }
    }
    load();
  }, []);

  const groups = useMemo(() => ({
    mangroves: places.filter(p => p.placeType === 'MANGROVE'),
    khazans: places.filter(p => p.placeType === 'KHAZAN'),
    active: places.slice(0, 3)
  }), [places]);

  const positions = (p: PlaceGeo) => p.geometry.coordinates[0].map(([lng, lat]) => [lat, lng]) as [number, number][];

  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      <MapContainer center={[15.45, 73.85]} zoom={11} className="h-[480px] rounded-2xl border">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LayersControl position="topright">
          <LayersControl.Overlay checked name="Mangroves">{<>{groups.mangroves.map((p) => <Polygon key={p.id} pathOptions={{ color: '#056DB6' }} positions={positions(p)} eventHandlers={{ click: () => setSelected(p) }} />)}</>}</LayersControl.Overlay>
          <LayersControl.Overlay checked name="Khazans">{<>{groups.khazans.map((p) => <Polygon key={p.id} pathOptions={{ color: '#60C977' }} positions={positions(p)} eventHandlers={{ click: () => setSelected(p) }} />)}</>}</LayersControl.Overlay>
          <LayersControl.Overlay checked name="Active Sites">{<>{groups.active.map((p) => <Polygon key={`${p.id}-a`} pathOptions={{ color: '#222826', dashArray: '4' }} positions={positions(p)} eventHandlers={{ click: () => setSelected(p) }} />)}</>}</LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
      <Card className="bg-brand-bg">
        <h3 className="text-xl font-semibold">{selected?.name}</h3>
        <p className="mt-1 text-sm text-brand-muted">{selected?.placeType}</p>
        <div className="mt-4 grid gap-3">
          <p>Linked people: <strong>{selected?.linkedPeople}</strong></p>
          <p>Verified work: <strong>{selected?.verifiedWork}</strong></p>
          <p>Payouts total: <strong>₹{selected?.payouts.toLocaleString('en-IN')}</strong></p>
          <Badge tone="success">Verified activity evidence available</Badge>
        </div>
      </Card>
    </div>
  );
}
