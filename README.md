# OuroLoop – Coastal Stewardship & Resilience Finance (Goa Pilot)

Next.js App Router MVP implementing a people + place registry for PES, climate finance, and disaster support workflows.

## Stack
- Next.js + TypeScript + Tailwind
- Framer Motion + React Leaflet
- Prisma + Postgres
- pnpm

## Setup
```bash
cp .env.example .env
docker compose up -d
pnpm install
pnpm prisma:generate
pnpm prisma:migrate
pnpm prisma:seed
pnpm dev
```

## Required routes
- `/` landing page with story scroll
- `/public-map` simplified map
- `/contact` contact + lead form
- `/dashboard` and role workflow pages
- `/api/health`

## Map data
Drop production Goa files here:
- `public/data/goa_mangroves.geojson`
- `public/data/goa_khazans.geojson`
- `public/data/goa_active_sites.geojson`

Fallback demo polygons are used automatically when files are empty/missing.

## KML conversion
```bash
pnpm convert:kml -- --in data/source.kml --out public/data/goa_mangroves.geojson
```

## Uploads
- Local dev: place files in `/public/sample`.
- Production optional S3-compatible config via env vars in `.env.example`.

## Exports
- Audit pack sample index: `/public/sample/audit-pack-sample.txt`
- Decision log CSV endpoint: `/api/export-audit`

## Tests and checks
```bash
pnpm lint
pnpm build
pnpm test
```

## Vercel deploy
1. Push repository to GitHub.
2. Import project in Vercel.
3. Set env vars (`DATABASE_URL`, upload settings).
4. Run migrations in deploy hook or CI.
5. Deploy.

## Docker
`docker-compose.yml` provides local Postgres 16 on `localhost:5432`.
