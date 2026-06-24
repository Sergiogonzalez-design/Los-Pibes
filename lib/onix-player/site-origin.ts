export function getSiteOrigin(): string {
  return process.env.NEXT_PUBLIC_SITE_ORIGIN?.trim() || 'https://onixmedia.agency';
}

export function siteUrl(path: string): string {
  const origin = getSiteOrigin().replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${origin}${normalized}`;
}

export function publicAssetUrl(filename: string): string {
  return siteUrl(`/${encodeURI(filename).replace(/%2F/g, '/')}`);
}
