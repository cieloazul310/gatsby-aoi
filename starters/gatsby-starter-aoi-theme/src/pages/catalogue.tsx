import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {
  Layout,
  Jumbotron,
  Section,
  Article,
  H2,
  H3,
  Ul,
  Li,
  Paragraph,
  AppLink,
  AppLinkButton,
  PanelLink,
  Seo,
  useToggleDark,
  useToggleUseSystem,
  useThemeContextState,
} from '@cieloazul310/gatsby-theme-aoi';

import {
  useAppState,
  useDispatch,
} from '../@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppStateContext';
import type { AppState } from '../@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppState';

function Catalogue() {
  const { count, appBarPosition } = useAppState();
  const dispatch = useDispatch();
  const { darkMode, useSystemTheme } = useThemeContextState();
  const toggleDark = useToggleDark();
  const toggleUseSystem = useToggleUseSystem();
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const onButtonClick = (newValue: AppState['appBarPosition']) => () => {
    dispatch({ type: 'SET_APPBAR_POSITION', appBarPosition: newValue });
  };
  return (
    <Layout title="Catalogue" appBarPosition={appBarPosition}>
      <Jumbotron component="header" title="Catalogue" />
      <Section component="article">
        <Article>
          <H2>Layouts</H2>
          <H3>Default Layout</H3>
          <Paragraph>
            Gatsby Theme Aoi Basic Layout. Easy to customize.
          </Paragraph>
          <H3>Tab Page Layout</H3>
          <Paragraph>Gatsby Theme Aoi Tab Page Layout</Paragraph>
          <PanelLink href="/tab-page/">Example</PanelLink>
          <H3>Jumbotron Layout</H3>
          <Paragraph>Gatsby Theme Aoi Jumbotron Layout</Paragraph>
          <PanelLink href="/jumbotron/">Example</PanelLink>
          <H3>Full Width Layout</H3>
          <Paragraph>Gatsby Theme Aoi Full Width Layout</Paragraph>
          <PanelLink href="/without-drawer/">Example</PanelLink>
        </Article>
      </Section>
      <Section component="article">
        <Article>
          <H2>Components</H2>
          <H3>AppLink</H3>
          <Paragraph>Gatsby Link composed to MuiLink</Paragraph>
          <Stack spacing={2} direction="row">
            <AppLink href="/">This is AppLink</AppLink>
            <AppLink href="/" color="primary">
              App Link Color Primary
            </AppLink>
          </Stack>
          <H3>AppLinkButton</H3>
          <Paragraph>Gatsby Link composed to MuiButton</Paragraph>
          <Stack spacing={2} direction="column" maxWidth={300}>
            <AppLinkButton href="/">This is AppLinkButton</AppLinkButton>
            <AppLinkButton href="/" color="primary">
              Primary
            </AppLinkButton>
            <AppLinkButton variant="contained" href="/">
              Contained
            </AppLinkButton>
          </Stack>
          <H3>PanelLink</H3>
          <Paragraph>
            Gatsby Link and external link component styled with Button Panel
          </Paragraph>
          <Stack spacing={2} direction="column">
            <PanelLink href="/">Back to Top Page</PanelLink>
            <PanelLink href="https://cieloazul310.github.io">
              External Link
            </PanelLink>
            <PanelLink href="https://www.mito-hollyhock.net" disableBorder>
              Disable Border
            </PanelLink>
          </Stack>
        </Article>
      </Section>
      <Section component="article">
        <Article>
          <H2>Custom Hooks</H2>
          <H3>useSiteMetadata</H3>
          <Paragraph>Easy to use site metadata. Gatsby Static Query</Paragraph>
          <H3>useSocialShare</H3>
          <Paragraph>
            Easy to use Social Share Url for Twitter, Facebook and Line.
          </Paragraph>
          <H3>useAppState</H3>
          <Paragraph>Returns current App State.</Paragraph>
          <Ul>
            <Li>Count: {count}</Li>
            <Li>AppBar position: {appBarPosition}</Li>
          </Ul>
          <H3>useDispatch</H3>
          <Paragraph>Returns dispatch of App State.</Paragraph>
          <Stack spacing={2}>
            <Button variant="contained" onClick={increment}>
              Increment
            </Button>
            <ButtonGroup>
              {(
                [
                  'sticky',
                  'fixed',
                  'relative',
                  'static',
                ] as AppState['appBarPosition'][]
              ).map((value) => (
                <Button key={value} onClick={onButtonClick(value)}>
                  {value}
                </Button>
              ))}
            </ButtonGroup>
          </Stack>
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
            Returns callback to toggle useSystemTheme (enable auto dark mode)
            state.
          </Paragraph>
          <Button variant="contained" onClick={toggleUseSystem}>
            Toggle Use System Theme
          </Button>
        </Article>
      </Section>
    </Layout>
  );
}

export default Catalogue;

export function Head() {
  return <Seo title="Catalogue" />;
}
