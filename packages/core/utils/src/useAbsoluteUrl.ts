import { useSiteMetadata } from './graphql-hooks';

export default function useAbsoluteUrl(path?: string) {
  const { siteUrl } = useSiteMetadata();
  if (!path) return undefined;
  try {
    const absoluteUrl = new URL(path, siteUrl);
    return absoluteUrl.toString();
  } catch {
    return undefined;
  }
}
