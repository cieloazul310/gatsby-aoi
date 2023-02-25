import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useSiteMetadata } from '@cieloazul310/gatsby-theme-aoi-utils';
import { SocialLink } from '@cieloazul310/gatsby-theme-aoi-components';

function ContentWapper({ children }: { children: React.ReactNode }) {
  return (
    <Box py={1} px={2}>
      {children}
    </Box>
  );
}

function DrawerFooter() {
  const { title, description, author, social } = useSiteMetadata();
  return (
    <Box py={2}>
      <Box pb={2} px={2}>
        <Typography variant="subtitle2" color="textSecondary">
          {title}
        </Typography>
      </Box>
      <ContentWapper>
        <Typography variant="body2" paragraph>
          {description}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Author: {author}
        </Typography>
      </ContentWapper>
      <ContentWapper>
        <Typography variant="body2" color="textSecondary" component="div">
          <address>
            <Stack direction="row" justifyContent="center" spacing={1}>
              {social.map(({ name, url }, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <SocialLink key={index.toString()} name={name} url={url} />
              ))}
            </Stack>
          </address>
        </Typography>
      </ContentWapper>
    </Box>
  );
}
export default DrawerFooter;
