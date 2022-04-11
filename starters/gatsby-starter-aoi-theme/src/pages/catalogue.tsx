import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
  Layout,
  Jumbotron,
  Section,
  SectionDivider,
  Article,
  ArticleTitle,
  H3,
  Paragraph,
  AppLink,
  AppLinkButton,
  PanelLink,
  useToggleDark,
  useToggleUseSystem,
  useThemeContextState,
} from '@cieloazul310/gatsby-theme-aoi';

import {
  useAppState,
  useDispatch,
} from '../@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppStateContext';

function Catalogue() {
  const { count } = useAppState();
  const dispatch = useDispatch();
  const { darkMode, useSystemTheme } = useThemeContextState();
  const toggleDark = useToggleDark();
  const toggleUseSystem = useToggleUseSystem();
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };
  return (
    <Layout title="Catalogue">
      <article>
        <header>
          <Jumbotron title="Catalogue" />
        </header>
        <SectionDivider />
        <section>
          <Section>
            <Article>
              <ArticleTitle>Layouts</ArticleTitle>
              <H3>Default Layout</H3>
              <Paragraph>
                Gatsby Theme Aoi Basic Layout. Easy to customize.
              </Paragraph>
              <H3>Tab Page Layout</H3>
              <Paragraph>
                Gatsby Theme Aoi Tab Page Layout
                <br />
                <PanelLink to="/tab-page/">Example</PanelLink>
              </Paragraph>
              <H3>Jumbotron Layout</H3>
              <Paragraph>
                Gatsby Theme Aoi Jumbotron Layout
                <br />
                <PanelLink to="/jumbotron/">Example</PanelLink>
              </Paragraph>
              <H3>Full Width Layout</H3>
              <Paragraph>
                Gatsby Theme Aoi Full Width Layout
                <br />
                <PanelLink to="/without-drawer/">Example</PanelLink>
              </Paragraph>
            </Article>
          </Section>
        </section>
        <SectionDivider />
        <section>
          <Section>
            <Article>
              <ArticleTitle>Components</ArticleTitle>
              <H3>AppLink</H3>
              <Paragraph>Gatsby Link composed to MuiLink</Paragraph>
              <Stack spacing={2} direction="row">
                <AppLink to="/">This is AppLink</AppLink>
                <AppLink to="/" color="primary">
                  App Link Color Primary
                </AppLink>
              </Stack>
              <H3>AppLinkButton</H3>
              <Paragraph>Gatsby Link composed to MuiButton</Paragraph>
              <Stack spacing={2} direction="column" maxWidth={300}>
                <AppLinkButton to="/">This is AppLinkButton</AppLinkButton>
                <AppLinkButton to="/" color="primary">
                  Primary
                </AppLinkButton>
                <AppLinkButton variant="contained" to="/">
                  Contained
                </AppLinkButton>
              </Stack>
              <H3>PanelLink</H3>
              <Paragraph>
                Gatsby Link and external link component styled with Button Panel
              </Paragraph>
              <Stack spacing={2} direction="column">
                <PanelLink to="/">Back to Top Page</PanelLink>
                <PanelLink to="https://cieloazul310.github.io">
                  External Link
                </PanelLink>
                <PanelLink to="https://www.mito-hollyhock.net" disableBorder>
                  Disable Border
                </PanelLink>
              </Stack>
            </Article>
          </Section>
        </section>
        <SectionDivider />
        <section>
          <Section>
            <Article>
              <ArticleTitle>Custom Hooks</ArticleTitle>
              <H3>useSiteMetadata</H3>
              <Paragraph>
                Easy to use site metadata. Gatsby Static Query
              </Paragraph>
              <H3>useSocialShare</H3>
              <Paragraph>
                Easy to use Social Share Url for Twitter, Facebook and Line.
              </Paragraph>
              <H3>useAppState</H3>
              <Paragraph>
                Returns current App State.
                <br />
                Count: {count}
              </Paragraph>
              <H3>useDispatch</H3>
              <Paragraph>Returns dispatch of App State.</Paragraph>
              <Button variant="contained" onClick={increment}>
                Increment
              </Button>
              <H3>useThemeContextState</H3>
              <Paragraph>Returns theme Context State.</Paragraph>
              <Paragraph>
                darkMode: {`${darkMode}`}
                <br />
                useSystemTheme: {`${useSystemTheme}`}
              </Paragraph>
              <H3>useToggleDark</H3>
              <Paragraph>
                Returns callback to toggle lightmode / darkmode state.
              </Paragraph>
              <Button variant="contained" onClick={toggleDark}>
                Toggle Dark
              </Button>
              <H3>useToggleUseSystem</H3>
              <Paragraph>
                Returns callback to toggle useSystemTheme (enable auto dark
                mode) state.
              </Paragraph>
              <Button variant="contained" onClick={toggleUseSystem}>
                Toggle Use System Theme
              </Button>
            </Article>
          </Section>
        </section>
      </article>
    </Layout>
  );
}

export default Catalogue;
