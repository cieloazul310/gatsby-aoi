// ex. src/pages/examples/page-04.tsx
import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import {
  Layout,
  Section,
  SectionDivider,
  Jumbotron,
  Article,
  Paragraph,
  AppLink,
} from '@cieloazul310/gatsby-theme-aoi';

function Page() {
  return (
    <Layout title="AppLink Example">
      <Jumbotron title="AppLink Example" maxWidth="md" />
      <SectionDivider />
      <Section>
        <Article maxWidth="md">
          <Paragraph>Some paragraph...</Paragraph>
          <Stack spacing={2} direction="column">
            <GatsbyLink to="/posts/2022/01/gatsby-theme-aoi-using-components">
              Gatsby Link
            </GatsbyLink>
            <MuiLink href="../posts/2022/01/gatsby-theme-aoi-using-components">
              MUI Link
            </MuiLink>
            <AppLink to="/posts/2022/01/gatsby-theme-aoi-using-components">
              AppLink
            </AppLink>
          </Stack>
        </Article>
      </Section>
    </Layout>
  );
}

export default Page;
