import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { SocialLink, AppLink } from '@cieloazul310/gatsby-theme-aoi-components';
import type { AuthorBrowser } from '@cieloazul310/gatsby-theme-aoi-blog-types';
import { AuthorIcon } from '../icons';

type AuthorBoxProps = {
  author: Pick<
    AuthorBrowser,
    | 'avatar'
    | 'name'
    | 'description'
    | 'website'
    | 'websiteURL'
    | 'socials'
    | 'slug'
  > & {
    posts?: Pick<NonNullable<AuthorBrowser['posts']>, 'totalCount'>;
  };
};

function AuthorBox({ author }: AuthorBoxProps) {
  const avatar = (
    <Avatar
      sx={{ width: 112, height: 112 }}
      src={author.avatar?.childImageSharp.gatsbyImageData.images.fallback?.src}
      srcSet={
        author.avatar?.childImageSharp.gatsbyImageData.images.fallback?.srcSet
      }
      sizes={
        author.avatar?.childImageSharp.gatsbyImageData.images.fallback?.sizes
      }
      alt={author.name}
    >
      <AuthorIcon sx={{ fontSize: 100 }} />
    </Avatar>
  );
  return (
    <Box display="flex" flexDirection="row">
      <Box display="flex" alignItems="center" justifyContent="center">
        {author.slug ? <AppLink href={author.slug}>{avatar}</AppLink> : avatar}
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
            {author.name}
          </Typography>
          <Typography variant="body2">{author.description}</Typography>
          {author.websiteURL ? (
            <Typography variant="body2">
              Website:{' '}
              <AppLink href={author.websiteURL}>{author.website}</AppLink>
            </Typography>
          ) : null}
        </Box>
        <Box py={1}>
          <Stack spacing={1} direction="row">
            {author.socials?.map(({ name, url }) => (
              <SocialLink key={name} name={name} url={url} />
            ))}
          </Stack>
          <Box textAlign={{ xs: 'right', sm: 'left' }}>
            {author.slug ? (
              <AppLink href={author.slug}>
                {author.name}の記事一覧 ({author.posts?.totalCount})
              </AppLink>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AuthorBox;
