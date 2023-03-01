import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { ListItemAppLink } from '@cieloazul310/gatsby-theme-aoi-components';
import {
  useSiteMetadata,
  useSocialShare,
} from '@cieloazul310/gatsby-theme-aoi-utils';

type DrawerSharerProps = {
  title?: string;
};

function DrawerSharer({ title }: DrawerSharerProps) {
  const { lang } = useSiteMetadata();
  const twitterUrl = useSocialShare('twitter', title);
  const fbUrl = useSocialShare('facebook');
  return (
    <List subheader={<ListSubheader>Share</ListSubheader>}>
      <ListItemAppLink href={twitterUrl}>
        <ListItemIcon>
          <TwitterIcon />
        </ListItemIcon>
        <ListItemText
          primary={lang === 'ja' ? 'Twitterでシェア' : 'Share on Twitter'}
        />
      </ListItemAppLink>
      <ListItemAppLink href={fbUrl}>
        <ListItemIcon>
          <FacebookIcon />
        </ListItemIcon>
        <ListItemText
          primary={lang === 'ja' ? 'Facebookでシェア' : 'Share on Facebook'}
        />
      </ListItemAppLink>
    </List>
  );
}

DrawerSharer.defaultProps = {
  title: undefined,
};

export default DrawerSharer;
