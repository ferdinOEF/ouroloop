import { readFileSync, writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const inIndex = args.indexOf('--in');
const outIndex = args.indexOf('--out');
if (inIndex === -1 || outIndex === -1) {
  console.error('Usage: pnpm convert:kml -- --in <file.kml> --out <file.geojson>');
  process.exit(1);
}
const input = readFileSync(args[inIndex + 1], 'utf8');
const placemarkMatches = [...input.matchAll(/<Placemark>[\s\S]*?<name>(.*?)<\/name>[\s\S]*?<coordinates>([\s\S]*?)<\/coordinates>[\s\S]*?<\/Placemark>/g)];
const features = placemarkMatches.map((m) => {
  const coords = m[2].trim().split(/\s+/).map((c) => c.split(',').slice(0, 2).map(Number));
  return { type: 'Feature', properties: { name: m[1] }, geometry: { type: 'Polygon', coordinates: [coords] } };
});
const geojson = { type: 'FeatureCollection', features };
writeFileSync(args[outIndex + 1], JSON.stringify(geojson, null, 2));
console.log(`Converted ${features.length} placemarks.`);
