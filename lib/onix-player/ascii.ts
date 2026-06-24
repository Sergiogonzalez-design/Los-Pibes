/** Strip accents and fancy dashes for onix-player sync payloads. */
export function toAscii(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[–—′'’]/g, (ch) => {
      if (ch === '–' || ch === '—') return '-';
      if (ch === '′' || ch === "'" || ch === '’') return "'";
      return ch;
    });
}
