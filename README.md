# OuroLoop – Coastal Stewardship & Resilience Finance (Goa Pilot)

Production-oriented Next.js App Router MVP for people/place registry, verification, payments, disaster support, and audit exports.

## Repository shape
- This repository is a **single Next.js app in the root** (`src/app` App Router).
- No `pages/` router is used.

## Prerequisites
- Node.js 20+
- pnpm 9+
- PostgreSQL 14+

## Local PostgreSQL setup (Windows PowerShell)

### Option A — using `psql`
```powershell
# connect as postgres superuser
psql -U postgres

# inside psql
CREATE DATABASE ouroloop;
CREATE USER ouroloop_user WITH ENCRYPTED PASSWORD 'ouroloop_pass';
GRANT ALL PRIVILEGES ON DATABASE ouroloop TO ouroloop_user;
\q
```

### Option B — using pgAdmin
1. Create login/role: `ouroloop_user` with password `ouroloop_pass`.
2. Create database: `ouroloop` owned by `ouroloop_user`.
3. Ensure user has create/usage privileges on public schema.

## Environment
Create `.env` from `.env.example` and adjust values:
```dotenv
DATABASE_URL="postgresql://ouroloop_user:ouroloop_pass@localhost:5432/ouroloop?schema=public"
DIRECT_URL="postgresql://ouroloop_user:ouroloop_pass@localhost:5432/ouroloop?schema=public"
```

## Install + run
```powershell
pnpm install
pnpm prisma:generate
pnpm prisma:migrate
pnpm prisma db seed
pnpm dev
```

Open: `http://localhost:3000`

## Verification commands
```powershell
pnpm lint
pnpm build
pnpm prisma:generate
pnpm prisma:migrate
pnpm prisma db seed
```

## Health check
`GET /api/health` returns `{ ok: true, service: 'ouroloop-web', ... }`.

## Demo auth
Use seeded account:
- Email: `user8@ouroloop.demo`
- Password: `demo-hash`
- Role: Admin

## Known fixed routing issue
The previous runtime error (`invariant expected layout router to be mounted`) was addressed by keeping routing fully App Router based and isolating client-only map/motion code into client components with dynamic map import (`ssr: false`).

## Map data integration
Drop production files into:
- `public/data/goa_mangroves.geojson`
- `public/data/goa_khazans.geojson`
- `public/data/goa_active_sites.geojson`

If empty/missing, built-in fallback polygons are used.

## KML conversion utility
```powershell
pnpm convert:kml -- --in .\data\source.kml --out .\public\data\goa_mangroves.geojson
```

## Deploy (Vercel)
1. Import GitHub repository in Vercel.
2. Add env vars (`DATABASE_URL`, `DIRECT_URL`, upload vars if needed).
3. Run Prisma migration in CI/deploy hook.
4. Deploy.


## Vercel package manager note
If Vercel logs show `npm run build`, set Project Settings → Build & Development Settings:
- Install Command: `pnpm install`
- Build Command: `pnpm build`
- Output Directory: `.next` (default)

Using pnpm avoids lockfile/package manager mismatch during deploy.
