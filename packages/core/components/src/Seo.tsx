import * as React from "react";
import {
  useSiteMetadata,
  useAssetUrl,
} from "@cieloazul310/gatsby-theme-aoi-utils";

export type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
};

function Seo({ title, description, image, children = null }: SeoProps) {
  const siteMetadata = useSiteMetadata();
  const imageUrl = useAssetUrl(image);

  return (
    <>
      <title>
        {title ? `${title} | ${siteMetadata.title}` : siteMetadata.title}
      </title>
      <meta
        name="description"
        content={description ?? siteMetadata.description}
      />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={title ?? siteMetadata.title} />
      <meta
        name="og:description"
        content={description ?? siteMetadata.description}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={siteMetadata.title} />
      <meta
        name="twitter:title"
        content={
          title ? `${title} | ${siteMetadata.title}` : siteMetadata.title
        }
      />
      <meta
        name="twitter:description"
        content={description ?? siteMetadata.description}
      />
      {imageUrl && (
        <>
          <meta name="image" content={imageUrl} />
          <meta name="og:image" content={imageUrl} />
          <meta name="twitter:image" content={imageUrl} />
        </>
      )}
      {children}
    </>
  );
}

Seo.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
  children: null,
};

export default Seo;
