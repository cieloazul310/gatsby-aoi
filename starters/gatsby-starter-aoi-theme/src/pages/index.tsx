import * as React from 'react';
import Typography from '@mui/material/Typography';
import {
  Layout,
  Article,
  Jumbotron,
  Section,
  SectionDivider,
  H3,
  AppLink,
  AppLinkButton,
} from '@cieloazul310/gatsby-theme-aoi';
import { useAppState } from '../@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppStateContext';

function IndexPage() {
  const { count } = useAppState();
  return (
    <Layout>
      <Jumbotron title="Gatsby Theme Aoi" />
      <SectionDivider />
      <Section>
        <Article>
          <H3>Features</H3>
          <Typography component="ul" paragraph>
            <Typography component="li">TypeScript</Typography>
            <Typography component="li">Material-UI</Typography>
            <Typography component="li">
              Mobile friendlly responsive UI layout
            </Typography>
            <Typography component="li">
              Holding App State / Count: {count}
            </Typography>
            <Typography component="li">Dark Mode</Typography>
          </Typography>
          <H3>Layouts</H3>
          <Typography component="ul" paragraph>
            <Typography component="li">Simple with Drawer</Typography>
            <Typography component="li">
              Tab Layout <AppLink to="/tab-page/">Example</AppLink>
            </Typography>
            <Typography component="li">
              Jumbotron <AppLink to="/jumbotron/">Example</AppLink>
            </Typography>
            <Typography component="li">
              Full Width <AppLink to="/without-drawer/">Example</AppLink>
            </Typography>
          </Typography>
          <AppLinkButton to="/page-2/">Go to Page 2</AppLinkButton>
        </Article>
      </Section>
    </Layout>
  );
}

export default IndexPage;
