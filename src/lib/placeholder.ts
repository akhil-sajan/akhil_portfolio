/** Pure black/white placeholder image (data URI), for use before real assets are ready. */
export function monoPlaceholder(label: string, invert = false) {
  const fill = invert ? '#000000' : '#ffffff';
  const ink = invert ? '#ffffff' : '#000000';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="480">
    <rect x="1" y="1" width="478" height="478" fill="${fill}" stroke="${ink}" stroke-opacity="0.15" stroke-width="2" />
    <text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="48" fill="${ink}" fill-opacity="0.4" text-anchor="middle" dominant-baseline="middle">${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
