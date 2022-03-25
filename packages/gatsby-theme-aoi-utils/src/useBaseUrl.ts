import { useSiteMetadata } from './graphql-hooks';

export default function useBaseUrl(): string {
  const { siteUrl } = useSiteMetadata();
  const url = new URL(siteUrl);

  return url.origin;
}
