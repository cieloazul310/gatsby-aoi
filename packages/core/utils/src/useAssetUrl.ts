import useBaseUrl from './useBaseUrl';

/**
 * example usage
 *
 * ```
 * import { useAssetUrl } from '@cieloazul310/gatsby-theme-aoi';
 * import image from '../asset/ogImage.png'
 *
 * function Seo() {
 *   const assetPath = useAssetUrl(image);
 * }
 * ```
 */
export default function useAssetUrl(assetPath?: string) {
  const baseUrl = useBaseUrl();
  if (!assetPath) return undefined;
  try {
    const assetUrl = new URL(assetPath, baseUrl);
    return assetUrl.toString();
  } catch {
    return undefined;
  }
}
