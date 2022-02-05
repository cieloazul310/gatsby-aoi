import * as React from 'react';
import { Helmet } from 'react-helmet';
import {
  useSiteMetadata,
  useBaseUrl,
} from '@cieloazul310/gatsby-theme-aoi-utils';

interface Props {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}

function SEO({ title, description, keywords, image }: Props) {
  const siteMetadata = useSiteMetadata();
  const baseUrl = useBaseUrl();
  console.log(baseUrl);
  if (image) {
    console.log([baseUrl, image].join('/'));
    console.log([siteMetadata.siteUrl, image].join('/'));
  }

  const images = image
    ? [
        {
          name: 'og:image',
          content: [siteMetadata.siteUrl, image].join('/'),
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

SEO.defaultProps = {
  title: undefined,
  description: undefined,
  keywords: undefined,
  image: undefined,
};

export default SEO;
