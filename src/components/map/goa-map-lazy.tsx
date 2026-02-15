'use client';

import dynamic from 'next/dynamic';

export const GoaMapLazy = dynamic(() => import('@/components/map/goa-map').then((m) => m.GoaMap), {
  ssr: false,
  loading: () => <div className="h-[480px] animate-pulse rounded-2xl border bg-brand-surface" />
});
