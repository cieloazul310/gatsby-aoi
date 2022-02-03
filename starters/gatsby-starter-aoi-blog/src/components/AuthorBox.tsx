import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import {
  SocialLink,
  AppLink,
  ExternalLink,
} from '@cieloazul310/gatsby-theme-aoi';
import PersonIcon from '@mui/icons-material/Person';
import { AuthorBrowser } from '../../types';

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
    | 'posts'
  >;
};

function AuthorBox({ author }: AuthorBoxProps) {
  return (
    <Box display="flex" flexDirection="row">
      <Box display="flex" alignItems="center" justifyContent="center">
        <Avatar
          sx={{ width: 112, height: 112 }}
          src={
            author.avatar?.childImageSharp.gatsbyImageData.images.fallback?.src
          }
          srcSet={
            author.avatar?.childImageSharp.gatsbyImageData.images.fallback
              ?.srcSet
          }
          sizes={
            author.avatar?.childImageSharp.gatsbyImageData.images.fallback
              ?.sizes
          }
          alt={author.name}
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
            {author.name}
          </Typography>
          <Typography variant="body2">{author.description}</Typography>
          {author.websiteURL ? (
            <Typography variant="body2">
              <ExternalLink href={author.websiteURL}>
                {author.website}
              </ExternalLink>
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
              <AppLink to={author.slug} variant="body2">
                {author.name}の記事一覧 ({author.posts.length})
              </AppLink>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AuthorBox;
