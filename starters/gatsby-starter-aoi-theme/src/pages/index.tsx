import * as React from 'react';
import {
  Layout,
  Article,
  ArticleTitle,
  Jumbotron,
  Section,
  SectionDivider,
  H3,
  Ul,
  Li,
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
            <Ul>
              <Li>TypeScript</Li>
              <Li>MUI</Li>
              <Li>Mobile friendlly responsive UI layout</Li>
              <Li>MUI components composed with Gatsby routing</Li>
              <Li>Holding global app state / Count: {count}</Li>
              <Li>Dark mode</Li>
            </Ul>
            <H3>Layouts</H3>
            <Ul>
              <Li>Simple with Drawer</Li>
              <Li>
                Tab Layout <AppLink to="/tab-page/">Example</AppLink>
              </Li>
              <Li>
                Jumbotron <AppLink to="/jumbotron/">Example</AppLink>
              </Li>
              <Li>
                Full Width <AppLink to="/without-drawer/">Example</AppLink>
              </Li>
            </Ul>
            <AppLinkButton to="/catalogue/">Browse Catalogue</AppLinkButton>
          </Article>
        </Section>
      </article>
    </Layout>
  );
}

export default IndexPage;
