/* eslint react/no-array-index-key: warn */
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { SocialIcon, SocialLink } from '../Socials';

export default {
  title: 'Socials',
  component: SocialIcon,
};

const data = [
  {
    name: 'twitter',
    url: 'https://twitter.com/cieloazul310',
  },
  {
    name: 'github',
    url: 'https://github.com/cieloazul310',
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/user/hollytube0310',
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/hollyhock.official',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/mito.hollyhock.official/',
  },
  {
    name: 'email',
    url: 'cieloazul310@gmail.com',
  },
  {
    name: 'note',
    url: 'https://note.com/mitohollyhock',
  },
];

function Container({ children }: React.PropsWithChildren<unknown>) {
  return (
    <Box p={4} bgcolor="background.paper">
      <Stack direction="row" spacing={1}>
        {children}
      </Stack>
    </Box>
  );
}

export function Basic() {
  return (
    <Container>
      {data.map(({ name }, index) => (
        <SocialIcon key={index.toString()} name={name} />
      ))}
    </Container>
  );
}

export function Links() {
  return (
    <Container>
      {data.map(({ name, url }, index) => (
        <SocialLink key={index.toString()} name={name} url={url} />
      ))}
    </Container>
  );
}

export function LinksLarge() {
  return (
    <Container>
      {data.map(({ name, url }, index) => (
        <SocialLink
          key={index.toString()}
          name={name}
          url={url}
          fontSize="large"
        />
      ))}
    </Container>
  );
}
