export async function GET() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="14" fill="#E9F2F1"/>
    <path d="M10 36C20 16 44 12 54 24" stroke="#056DB6" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M12 44C24 34 40 34 52 44" stroke="#60C977" stroke-width="5" fill="none" stroke-linecap="round"/>
  </svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
