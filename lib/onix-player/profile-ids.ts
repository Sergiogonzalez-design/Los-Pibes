import profileIdsJson from './profile-ids.json';

export type ProfileIdMap = Record<string, string>;

const profileIds = profileIdsJson as ProfileIdMap;

export function getStoredProfileIds(): ProfileIdMap {
  return { ...profileIds };
}

export function getStoredProfileId(slug: string): string | undefined {
  const id = profileIds[slug.trim().toLowerCase()];
  return id?.trim() || undefined;
}
