import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
/*
import {
  faCreativeCommons,
  faReact,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
*/
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
                <AppLink to="/tab-page/">Example</AppLink>
              </Paragraph>
              <H3>Jumbotron Layout</H3>
              <Paragraph>
                Gatsby Theme Aoi Jumbotron Layout
                <br />
                <AppLink to="/jumbotron/">Example</AppLink>
              </Paragraph>
              <H3>Full Width Layout</H3>
              <Paragraph>
                Gatsby Theme Aoi Full Width Layout
                <br />
                <AppLink to="/without-drawer/">Example</AppLink>
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
              <Paragraph>
                Gatsby Link composed to MuiLink
                <br />
                <Stack spacing={2} direction="row">
                  <AppLink to="/">This is AppLink</AppLink>
                  <AppLink to="/" color="primary">
                    App Link Color Primary
                  </AppLink>
                </Stack>
              </Paragraph>
              <H3>AppLinkButton</H3>
              <Paragraph>
                Gatsby Link composed to MuiButton
                <br />
                <Stack spacing={2} direction="row">
                  <AppLinkButton to="/">This is AppLinkButton</AppLinkButton>
                  <AppLinkButton to="/" color="primary">
                    AppLinkButton Color Primary
                  </AppLinkButton>
                  <AppLinkButton variant="contained" to="/">
                    AppLinkButton Contained
                  </AppLinkButton>
                </Stack>
              </Paragraph>
              {/*
          <ArticleSection>
            <H3>FabIcon</H3>
            <Paragraph>
              Enable to use{' '}
              <MuiLink
                href="https://fontawesome.com/"
                color="secondary"
                target="blank"
                rel="noopener noreferrer"
              >
                Font-Awasome
              </MuiLink>{' '}
              Icons as a Material Icon Component.
            </Paragraph>
            <Paragraph>
              <AutoMargin>
                <FabIcon icon={faReact} />
              </AutoMargin>
              <AutoMargin>
                <FabIcon icon={faNodeJs} color="primary" />
              </AutoMargin>
              <AutoMargin>
                <FabIcon icon={faCreativeCommons} color="secondary" />
              </AutoMargin>
            </Paragraph>
          </ArticleSection>
*/}
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
              <Paragraph>
                Returns dispatch of App State.
                <br />
                <Button variant="contained" onClick={increment}>
                  Increment
                </Button>
              </Paragraph>
              <H3>useThemeContextState</H3>
              <Paragraph>
                Returns theme Context State.
                <br />
                darkMode: {`${darkMode}`}
                <br />
                useSystemTheme: {`${useSystemTheme}`}
              </Paragraph>
              <H3>useToggleDark</H3>
              <Paragraph>
                Returns callback to toggle lightmode / darkmode state.
                <br />
                <Button variant="contained" onClick={toggleDark}>
                  Toggle Dark
                </Button>
              </Paragraph>
              <H3>useToggleUseSystem</H3>
              <Paragraph>
                Returns callback to toggle useSystemTheme (enable auto dark
                mode) state.
                <br />
                <Button variant="contained" onClick={toggleUseSystem}>
                  Toggle Use System Theme
                </Button>
              </Paragraph>
            </Article>
          </Section>
        </section>
      </article>
    </Layout>
  );
}

export default Catalogue;
