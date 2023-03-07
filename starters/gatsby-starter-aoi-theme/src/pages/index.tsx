import * as React from 'react';
import {
  Layout,
  Article,
  Jumbotron,
  Section,
  SectionWrapper,
  H3,
  Ul,
  Li,
  AppLink,
  PanelLink,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi';
import { useAppState } from '../@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppStateContext';

function IndexPage() {
  const { count } = useAppState();
  return (
    <Layout>
      <SectionWrapper>
        <header>
          <Jumbotron title="Gatsby Theme Aoi" />
        </header>
        <Section>
          <Article>
            <H3>Features</H3>
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
                Tab Layout <AppLink href="/tab-page/">Example</AppLink>
              </Li>
              <Li>
                Jumbotron <AppLink href="/jumbotron/">Example</AppLink>
              </Li>
              <Li>
                Full Width <AppLink href="/without-drawer/">Example</AppLink>
              </Li>
            </Ul>
            <PanelLink href="/catalogue/">Browse Catalogue</PanelLink>
          </Article>
        </Section>
      </SectionWrapper>
    </Layout>
  );
}

export default IndexPage;

export function Head() {
  return <Seo />;
}
