'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { MapContainer, Polygon, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { fallbackPlaces } from '@/lib/demo-data';
import { Badge, Card, Chip, StatRow } from '@/components/ui/primitives';
import type { PlaceGeo } from '@/lib/types';

type GeoFeature = { properties?: { name?: string }; geometry: PlaceGeo['geometry'] };

type PanelTab = 'summary' | 'proof' | 'payments';

function toPlaces(features: GeoFeature[], type: 'MANGROVE' | 'KHAZAN'): PlaceGeo[] {
  return features.map((f, i) => ({
    id: `${type}-${i}`,
    name: f.properties?.name ?? `${type} ${i + 1}`,
    placeType: type,
    linkedPeople: 8 + i,
    verifiedWork: 12 + i,
    payouts: 40000 + i * 5000,
    thumbnails: ['/sample/proof-1.svg', '/sample/proof-2.svg', '/sample/proof-3.svg'],
    geometry: f.geometry
  }));
}

export function GoaMap() {
  const [places, setPlaces] = useState<PlaceGeo[]>(fallbackPlaces);
  const [selected, setSelected] = useState<PlaceGeo>(fallbackPlaces[0]);
  const [activeLayers, setActiveLayers] = useState({ mangroves: true, khazans: true, active: true });
  const [panelTab, setPanelTab] = useState<PanelTab>('summary');

  useEffect(() => {
    async function load() {
      try {
        const [m, k] = await Promise.all([
          fetch('/data/goa_mangroves.geojson').then((r) => (r.ok ? r.json() : { features: [] })),
          fetch('/data/goa_khazans.geojson').then((r) => (r.ok ? r.json() : { features: [] }))
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

  const groups = useMemo(
    () => ({
      mangroves: places.filter((p) => p.placeType === 'MANGROVE'),
      khazans: places.filter((p) => p.placeType === 'KHAZAN'),
      active: places.slice(0, 3)
    }),
    [places]
  );

  const positions = (p: PlaceGeo) => p.geometry.coordinates[0].map(([lng, lat]) => [lat, lng]) as [number, number][];

  return (
    <div className="grid gap-4 lg:grid-cols-[1.8fr_1fr]">
      <Card className="p-3 sm:p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {[
            ['mangroves', 'Mangroves'],
            ['khazans', 'Khazans'],
            ['active', 'Active sites']
          ].map(([key, label]) => {
            const k = key as keyof typeof activeLayers;
            const on = activeLayers[k];
            return (
              <button key={key} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${on ? 'bg-brand-primary text-white' : 'bg-brand-surface/35 text-brand-text'}`} onClick={() => setActiveLayers((s) => ({ ...s, [k]: !s[k] }))}>
                {label}
              </button>
            );
          })}
        </div>

        <MapContainer center={[15.45, 73.85]} zoom={11} className="h-[440px] rounded-2xl ring-1 ring-brand-surface/60">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {activeLayers.mangroves && groups.mangroves.map((p) => <Polygon key={p.id} pathOptions={{ color: '#056DB6', fillOpacity: 0.16 }} positions={positions(p)} eventHandlers={{ click: () => setSelected(p) }} />)}
          {activeLayers.khazans && groups.khazans.map((p) => <Polygon key={p.id} pathOptions={{ color: '#60C977', fillOpacity: 0.16 }} positions={positions(p)} eventHandlers={{ click: () => setSelected(p) }} />)}
          {activeLayers.active && groups.active.map((p) => <Polygon key={`${p.id}-active`} pathOptions={{ color: '#222826', dashArray: '5', fillOpacity: 0 }} positions={positions(p)} eventHandlers={{ click: () => setSelected(p) }} />)}
        </MapContainer>
      </Card>

      <Card>
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold">{selected.name}</h3>
            <div className="mt-1"><Chip tone={selected.placeType === 'KHAZAN' ? 'success' : 'default'}>{selected.placeType}</Chip></div>
          </div>
          <Badge tone="success">Verified</Badge>
        </div>

        <div className="mt-4 flex gap-2">
          {(['summary', 'proof', 'payments'] as PanelTab[]).map((tab) => (
            <button key={tab} className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${panelTab === tab ? 'bg-brand-primary text-white' : 'bg-brand-surface/35 text-brand-text'}`} onClick={() => setPanelTab(tab)}>{tab}</button>
          ))}
        </div>

        <div className="mt-4">
          {panelTab === 'summary' && (
            <div className="space-y-1 text-sm">
              <StatRow label="Linked people" value={String(selected.linkedPeople)} />
              <StatRow label="Verified work" value={String(selected.verifiedWork)} />
              <StatRow label="Payouts total" value={`₹${selected.payouts.toLocaleString('en-IN')}`} />
            </div>
          )}

          {panelTab === 'proof' && (
            <div>
              <p className="mb-2 text-sm text-brand-muted">Latest proof thumbnails</p>
              <div className="grid grid-cols-3 gap-2">
                {selected.thumbnails.map((thumb, i) => <Image key={`${thumb}-${i}`} src={thumb} alt={`Proof ${i + 1}`} width={120} height={56} className="h-14 w-full rounded-lg object-cover" />)}
              </div>
            </div>
          )}

          {panelTab === 'payments' && (
            <div className="space-y-1 text-sm">
              <StatRow label="Recent payout" value="₹1,800" />
              <StatRow label="Pending approvals" value="4" />
              <StatRow label="Programme total" value={`₹${selected.payouts.toLocaleString('en-IN')}`} />
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
