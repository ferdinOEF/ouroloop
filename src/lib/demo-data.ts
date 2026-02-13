import type { PlaceGeo, StewardCard } from './types';

export const stewardCards: StewardCard[] = [
  { id: '1', name: 'Asha Naik', role: 'Steward', place: 'Chorao North Mangrove', action: 'Mangrove litter clearance verified', paid: 7400 },
  { id: '2', name: 'Ravi Dessai', role: 'Steward', place: 'Cortalim Khazan Belt', action: 'Sluice gate maintenance logged', paid: 6800 },
  { id: '3', name: 'Maria Fernandes', role: 'Steward', place: 'Mandovi Fringe Mangrove', action: 'Nursery patch care approved', paid: 7200 },
  { id: '4', name: 'Lata Kamat', role: 'Steward', place: 'Divar Khazan South', action: 'Soil salinity mitigation tracked', paid: 6100 },
  { id: '5', name: 'Nikhil Velip', role: 'Steward', place: 'Zuari Estuary Mangrove', action: 'Tidal channel inspection complete', paid: 7900 },
  { id: '6', name: 'Pooja Sardesai', role: 'Steward', place: 'Tiswadi Khazan West', action: 'Bund reinforcement evidence approved', paid: 6400 }
];

export const fallbackPlaces: PlaceGeo[] = [
  { id: 'm1', name: 'Chorao North Mangrove', placeType: 'MANGROVE', linkedPeople: 18, verifiedWork: 42, payouts: 189000, thumbnails: ['/sample/proof-1.svg'], geometry: { type:'Polygon', coordinates:[[[73.84,15.53],[73.86,15.53],[73.86,15.55],[73.84,15.55],[73.84,15.53]]] } },
  { id: 'm2', name: 'Mandovi Fringe Mangrove', placeType: 'MANGROVE', linkedPeople: 12, verifiedWork: 33, payouts: 144000, thumbnails: ['/sample/proof-2.svg'], geometry: { type:'Polygon', coordinates:[[[73.79,15.48],[73.81,15.48],[73.81,15.50],[73.79,15.50],[73.79,15.48]]] } },
  { id: 'm3', name: 'Zuari Estuary Mangrove', placeType: 'MANGROVE', linkedPeople: 16, verifiedWork: 37, payouts: 166000, thumbnails: ['/sample/proof-3.svg'], geometry: { type:'Polygon', coordinates:[[[73.92,15.40],[73.94,15.40],[73.94,15.42],[73.92,15.42],[73.92,15.40]]] } },
  { id: 'k1', name: 'Cortalim Khazan Belt', placeType: 'KHAZAN', linkedPeople: 11, verifiedWork: 24, payouts: 99000, thumbnails: ['/sample/proof-1.svg'], geometry: { type:'Polygon', coordinates:[[[73.89,15.40],[73.91,15.40],[73.91,15.41],[73.89,15.41],[73.89,15.40]]] } },
  { id: 'k2', name: 'Divar Khazan South', placeType: 'KHAZAN', linkedPeople: 10, verifiedWork: 20, payouts: 85000, thumbnails: ['/sample/proof-2.svg'], geometry: { type:'Polygon', coordinates:[[[73.85,15.47],[73.87,15.47],[73.87,15.48],[73.85,15.48],[73.85,15.47]]] } },
  { id: 'k3', name: 'Tiswadi Khazan West', placeType: 'KHAZAN', linkedPeople: 9, verifiedWork: 19, payouts: 82000, thumbnails: ['/sample/proof-3.svg'], geometry: { type:'Polygon', coordinates:[[[73.80,15.45],[73.82,15.45],[73.82,15.46],[73.80,15.46],[73.80,15.45]]] } }
];

export const reviewQueue = [
  { id:'S-1001', steward:'Asha Naik', activity:'Mangrove clean-up', status:'Pending' },
  { id:'S-1002', steward:'Ravi Dessai', activity:'Khazan sluice desilting', status:'Changes Requested' },
  { id:'S-1003', steward:'Maria Fernandes', activity:'Nursery maintenance', status:'Approved' }
];
