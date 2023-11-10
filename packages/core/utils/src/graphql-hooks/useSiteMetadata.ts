import { useStaticQuery, graphql } from "gatsby";

export type UseSiteMetadataQuery = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      keywords: string[];
      lang: string;
      siteUrl: string;
      social: {
        name: string;
        url: string;
      }[];
    };
  };
};

export function useSiteMetadata(): UseSiteMetadataQuery["site"]["siteMetadata"] {
  const { site } = useStaticQuery<UseSiteMetadataQuery>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          lang
          siteUrl
          social {
            name
            url
          }
        }
      }
    }
  `);
  return site.siteMetadata;
}
