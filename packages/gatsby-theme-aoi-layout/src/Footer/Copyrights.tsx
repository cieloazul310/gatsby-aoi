import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import MuiLink from '@mui/material/Link';
import { ExternalLink } from '@cieloazul310/gatsby-theme-aoi-components';
import { useSiteMetadata } from '@cieloazul310/gatsby-theme-aoi-utils';

function CopyrightsContent({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        padding: 1,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
}

function Copyrights() {
  const { title, author } = useSiteMetadata();
  return (
    <div>
      <CopyrightsContent>
        <Typography variant="body1">{title}</Typography>
      </CopyrightsContent>
      <CopyrightsContent>
        <Typography variant="body2" component="small">
          © {new Date().getFullYear()} {author} All rights reserved. Built with
          {` `}
          <ExternalLink href="https://www.gatsbyjs.org">Gatsby</ExternalLink>
        </Typography>
      </CopyrightsContent>
    </div>
  );
}

export default Copyrights;
