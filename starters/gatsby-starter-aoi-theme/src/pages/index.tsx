import * as React from 'react';
import Typography from '@mui/material/Typography';
import {
  Layout,
  Article,
  ArticleTitle,
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
      <article>
        <header>
          <Jumbotron title="Gatsby Theme Aoi" />
        </header>
        <SectionDivider />
        <Section>
          <Article>
            <ArticleTitle>Features</ArticleTitle>
            <Typography component="ul" paragraph>
              <Typography component="li">TypeScript</Typography>
              <Typography component="li">MUI</Typography>
              <Typography component="li">
                Mobile friendlly responsive UI layout
              </Typography>
              <Typography component="li">
                MUI components composed with Gatsby routing
              </Typography>
              <Typography component="li">
                Holding global app state / Count: {count}
              </Typography>
              <Typography component="li">Dark mode</Typography>
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
            <AppLinkButton to="/catalogue/">Browse Catalogue</AppLinkButton>
          </Article>
        </Section>
      </article>
    </Layout>
  );
}

export default IndexPage;
