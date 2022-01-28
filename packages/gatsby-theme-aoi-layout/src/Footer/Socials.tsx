/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { useSiteMetadata } from '@cieloazul310/gatsby-theme-aoi-utils';
import { SocialLink } from '@cieloazul310/gatsby-theme-aoi-components';

function Socials() {
  const { social } = useSiteMetadata();
  return (
    <address>
      <Stack direction="row" spacing={1} justifyContent="center">
        {social.map(({ name, url }, index) => (
          <SocialLink key={index.toString()} name={name} url={url} />
        ))}
      </Stack>
    </address>
  );
}

export default Socials;
