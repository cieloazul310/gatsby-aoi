import urljoin from 'url-join';
import { useSiteMetadata } from './graphql-hooks';

export default function useAbsoluteUrl(path?: string) {
  const { siteUrl } = useSiteMetadata();
  if (!path) return undefined;
  const absoluteUrl = urljoin(siteUrl, path);

  return absoluteUrl;
}
