import * as React from 'react';
// import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useSiteMetadata } from '@cieloazul310/gatsby-theme-aoi-utils';
import {
  SocialLink,
  Article,
  SubParagraph,
} from '@cieloazul310/gatsby-theme-aoi-components';

function DrawerFooter() {
  const { title, description, author, social } = useSiteMetadata();
  return (
    <Article>
      <Typography variant="subtitle2" color="textSecondary" my={2}>
        {title}
      </Typography>
      <SubParagraph>{description}</SubParagraph>
      <SubParagraph>Author: {author}</SubParagraph>
      <Typography variant="body2" color="textSecondary" component="div" my={2}>
        <address>
          <Stack direction="row" justifyContent="center" spacing={1}>
            {social.map(({ name, url }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SocialLink key={index.toString()} name={name} url={url} />
            ))}
          </Stack>
        </address>
      </Typography>
    </Article>
  );
}
export default DrawerFooter;
