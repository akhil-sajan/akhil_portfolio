/** Solid-color duotone silhouette placeholder (data URI), for use before a real photo is added. */
export function duotonePlaceholder(bg = '#e5e5e5') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="480">
    <rect width="480" height="480" fill="${bg}" />
    <circle cx="240" cy="185" r="95" fill="#0a0a0a" />
    <path d="M60 480c0-130 80-210 180-210s180 80 180 210Z" fill="#0a0a0a" />
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/** Gradient avatar placeholder with initials (data URI), for use before a real photo is added. */
export function avatarPlaceholder(initials: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ff5a1f" />
        <stop offset="100%" stop-color="#1a1a1a" />
      </linearGradient>
    </defs>
    <rect width="480" height="600" fill="url(#g)" />
    <text x="50%" y="52%" font-family="system-ui, sans-serif" font-size="140" font-weight="800" fill="#ffffff" fill-opacity="0.9" text-anchor="middle" dominant-baseline="middle">${initials}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

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
