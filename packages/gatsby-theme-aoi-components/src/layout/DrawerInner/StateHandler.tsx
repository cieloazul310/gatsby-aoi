import * as React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { useSiteMetadata } from '@cieloazul310/gatsby-theme-aoi-utils';
import ListItemToggleDarkMode, {
  ListItemToggleUseSystemTheme,
} from '../../components/ListItemToggleDarkMode';

function StateHandler() {
  const { lang } = useSiteMetadata();
  return (
    <List subheader={<ListSubheader>State Handler</ListSubheader>}>
      <ListItemToggleDarkMode
        label={lang === 'ja' ? 'ダークモード' : 'Dark Mode'}
      />
      <ListItemToggleUseSystemTheme
        label={lang === 'ja' ? '自動ダークモード' : 'Auto Dark Mode'}
      />
    </List>
  );
}

export default StateHandler;
