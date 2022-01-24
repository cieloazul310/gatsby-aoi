import * as React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import {
  useSiteMetadata,
  useSocialShare,
} from '@cieloazul310/gatsby-theme-aoi-utils';

interface Props {
  title?: string;
}

function DrawerSharer({ title }: Props): JSX.Element {
  const { lang } = useSiteMetadata();
  const twitterUrl = useSocialShare('twitter', title);
  const fbUrl = useSocialShare('facebook');
  return (
    <List subheader={<ListSubheader>Share</ListSubheader>}>
      <ListItem
        component="a"
        button
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemIcon>
          <TwitterIcon />
        </ListItemIcon>
        <ListItemText
          primary={lang === 'ja' ? 'Twitterでシェア' : 'Share on Twitter'}
        />
      </ListItem>
      <ListItem
        button
        component="a"
        href={fbUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemIcon>
          <FacebookIcon />
        </ListItemIcon>
        <ListItemText
          primary={lang === 'ja' ? 'Facebookでシェア' : 'Share on Facebook'}
        />
      </ListItem>
    </List>
  );
}

DrawerSharer.defaultProps = {
  title: undefined,
};

export default DrawerSharer;
