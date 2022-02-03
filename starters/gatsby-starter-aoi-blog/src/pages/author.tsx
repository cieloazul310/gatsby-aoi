import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import {
  Jumbotron,
  Section,
  SectionDivider,
  Article,
  SocialLink,
  AppLink,
} from '@cieloazul310/gatsby-theme-aoi';
import PersonIcon from '@mui/icons-material/Person';
import Layout from '../layout';
import { AuthorBrowser } from '../../types';

type PageData = {
  allAuthor: {
    edges: {
      node: AuthorBrowser;
    }[];
  };
};

function AuthorPage({ data }: PageProps<PageData>) {
  const { edges } = data.allAuthor;
  return (
    <Layout title="Authors">
      <article>
        <header>
          <Jumbotron title="Authors" maxWidth="md" />
        </header>
        <SectionDivider />
        {edges.map(({ node }, index) => (
          <React.Fragment key={node.name}>
            <Section>
              <article>
                <Article maxWidth="md">
                  <Box display="flex" flexDirection="row">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Avatar
                        sx={{ width: 112, height: 112 }}
                        src={
                          node.avatar?.childImageSharp.gatsbyImageData.images
                            .fallback?.src
                        }
                        srcSet={
                          node.avatar?.childImageSharp.gatsbyImageData.images
                            .fallback?.srcSet
                        }
                        sizes={
                          node.avatar?.childImageSharp.gatsbyImageData.images
                            .fallback?.sizes
                        }
                        alt={node.name}
                      >
                        <PersonIcon />
                      </Avatar>
                    </Box>
                    <Box
                      flexGrow={1}
                      display="flex"
                      flexDirection="column"
                      pl={{ xs: 2, sm: 4 }}
                      justifyContent="space-between"
                    >
                      <Box py={1}>
                        <Typography
                          component="h3"
                          variant="h6"
                          fontWeight="bold"
                          gutterBottom
                        >
                          {node.name}
                        </Typography>
                        <Typography variant="body2">
                          {node.description}
                        </Typography>
                        {node.website ? (
                          <Typography variant="body2">
                            <MuiLink href={node.website} color="secondary.dark">
                              Webサイト
                            </MuiLink>
                          </Typography>
                        ) : null}
                      </Box>
                      <Box py={1}>
                        <Stack spacing={1} direction="row">
                          {node.socials?.map(({ name, url }) => (
                            <SocialLink key={name} name={name} url={url} />
                          ))}
                        </Stack>
                        <Box textAlign={{ xs: 'right', sm: 'left' }}>
                          <AppLink to={node.slug ?? '#'} variant="body2">
                            {node.name}の記事一覧 ({node.posts.length})
                          </AppLink>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Article>
              </article>
            </Section>
            {index !== edges.length - 1 ? <SectionDivider /> : null}
          </React.Fragment>
        ))}
      </article>
    </Layout>
  );
}

export default AuthorPage;

export const query = graphql`
  query {
    allAuthor {
      edges {
        node {
          name
          slug
          description
          website
          avatar {
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
          socials {
            name
            url
          }
          posts {
            id
          }
        }
      }
    }
  }
`;
