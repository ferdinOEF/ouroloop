import { PrismaClient, ProgrammeType, Role, SubmissionStatus, EventTriggerType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.auditExport.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.event.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.reviewLog.deleteMany();
  await prisma.submissionMedia.deleteMany();
  await prisma.submission.deleteMany();
  await prisma.assignment.deleteMany();
  await prisma.place.deleteMany();
  await prisma.personProfile.deleteMany();
  await prisma.user.deleteMany();
  await prisma.programme.deleteMany();

  const users = await Promise.all(Array.from({ length: 10 }).map((_, i) => prisma.user.create({
    data: {
      email: `user${i + 1}@ouroloop.demo`,
      passwordHash: 'demo-hash',
      name: ['Asha','Ravi','Maria','Lata','Nikhil','Pooja','Vikram','Anita','Jonas','Meera'][i],
      role: [Role.STEWARD, Role.STEWARD, Role.STEWARD, Role.STEWARD, Role.STEWARD, Role.STEWARD, Role.VERIFIER, Role.ADMIN, Role.FUNDER, Role.VERIFIER][i]
    }
  })));

  const profiles = await Promise.all(users.slice(0, 6).map((u) => prisma.personProfile.create({ data: { userId: u.id, consentGiven: true, consentDate: new Date(), auditTrail: { createdBy: 'seed' } } })));

  const placeData = [
    ['Chorao North Mangrove','MANGROVE'],['Mandovi Fringe Mangrove','MANGROVE'],['Zuari Estuary Mangrove','MANGROVE'],
    ['Cortalim Khazan Belt','KHAZAN'],['Divar Khazan South','KHAZAN'],['Tiswadi Khazan West','KHAZAN']
  ] as const;

  const places = await Promise.all(placeData.map(([name, type]) => prisma.place.create({ data: { name, type, geometry: { type:'Polygon', coordinates: [] }, metadata: { source: 'demo' } } })));

  await Promise.all(profiles.map((p, i) => prisma.assignment.create({ data: { personProfileId: p.id, placeId: places[i % places.length].id, eligibility: { active: true } } })));

  const programmes = await Promise.all([
    prisma.programme.create({ data: { name: 'Goa PES 2026', type: ProgrammeType.PES, funderName: 'Coastal Livelihood Fund', startDate: new Date('2026-01-01'), endDate: new Date('2026-12-31'), tags: ['coastal protection'], ruleConfig: { rule: 'fixed_per_submission', amount: 1200 } } }),
    prisma.programme.create({ data: { name: 'Goa Climate Finance Core', type: ProgrammeType.FINANCE, funderName: 'Blue Climate Facility', startDate: new Date('2026-01-01'), endDate: new Date('2026-12-31'), tags: ['biodiversity','carbon'], ruleConfig: { rule: 'milestone', milestones: [25,50,100] } } }),
    prisma.programme.create({ data: { name: 'Goa Disaster Support', type: ProgrammeType.DISASTER, funderName: 'Resilience Trust', startDate: new Date('2026-01-01'), endDate: new Date('2026-12-31'), tags: ['livelihoods'], ruleConfig: { trigger: 'manual_or_csv' } } })
  ]);

  const sub = await prisma.submission.create({ data: { personProfileId: profiles[0].id, placeId: places[0].id, activity: 'Mangrove clean-up', date: new Date(), notes: 'Two channels cleaned and geotagged.', location: { lat: 15.53, lng: 73.85 }, status: SubmissionStatus.APPROVED } });
  await prisma.submissionMedia.createMany({ data: [{ submissionId: sub.id, path: '/sample/proof-1.svg' }, { submissionId: sub.id, path: '/sample/proof-2.svg' }] });
  await prisma.reviewLog.create({ data: { submissionId: sub.id, verifierId: users[6].id, decision: SubmissionStatus.APPROVED, note: 'Verified with spot check.' } });
  await prisma.payment.create({ data: { programmeId: programmes[0].id, personProfileId: profiles[0].id, amount: 1200, submissionIds: [sub.id] } });
  await prisma.event.create({ data: { programmeId: programmes[2].id, triggerType: EventTriggerType.MANUAL, affectedPlaces: { placeIds: places.slice(0,2).map(p => p.id) }, eligibleSnapshot: { personProfileIds: profiles.slice(0,3).map(p => p.id), reason: 'High tide alert' } } });

  console.log('Seed completed');
}

main().finally(() => prisma.$disconnect());
