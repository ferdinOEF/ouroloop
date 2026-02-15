export type Role = 'STEWARD' | 'VERIFIER' | 'ADMIN' | 'FUNDER';
export type ProgrammeType = 'PES' | 'FINANCE' | 'DISASTER';

export interface StewardCard {
  id: string;
  name: string;
  role: string;
  place: string;
  action: string;
  paid: number;
}

export interface PlaceGeo {
  id: string;
  name: string;
  placeType: 'MANGROVE' | 'KHAZAN';
  linkedPeople: number;
  verifiedWork: number;
  payouts: number;
  thumbnails: string[];
  geometry: GeoJSON.Polygon;
}
