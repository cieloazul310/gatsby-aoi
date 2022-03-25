import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  useSiteMetadata,
  useAssetUrl,
} from '@cieloazul310/gatsby-theme-aoi-utils';

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
};

function Seo({ title, description, keywords, image }: SeoProps) {
  const siteMetadata = useSiteMetadata();
  const imageUrl = useAssetUrl(image);

  const images = imageUrl
    ? [
        {
          name: 'og:image',
          content: imageUrl,
        },
      ]
    : [];
  return (
    <Helmet
      htmlAttributes={{ lang: siteMetadata.lang ?? 'en' }}
      title={title || siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: description ?? siteMetadata.description,
        },
        {
          name: 'keywords',
          content: keywords
            ? [...keywords, ...siteMetadata.keywords].join(', ')
            : siteMetadata.keywords.join(', '),
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:title',
          content: title ?? siteMetadata.title,
        },
        {
          name: 'og:description',
          content: description ?? siteMetadata.description,
        },
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: siteMetadata.title,
        },
        {
          name: 'twitter:title',
          content: title
            ? `${title} | ${siteMetadata.title}`
            : siteMetadata.title,
        },
        {
          name: 'twitter:description',
          content: description ?? siteMetadata.description,
        },
        ...images,
      ]}
    />
  );
}

Seo.defaultProps = {
  title: undefined,
  description: undefined,
  keywords: undefined,
  image: undefined,
};

export default Seo;
