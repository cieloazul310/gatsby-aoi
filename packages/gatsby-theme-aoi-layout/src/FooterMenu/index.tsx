import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ListItemAppLink } from '@cieloazul310/gatsby-theme-aoi-components';
import menu, { Menu } from '../menu';

type FooterMenuItemProps = Menu;

function FooterMenuItem({ title, path, icon }: FooterMenuItemProps) {
  return (
    <Grid item xs={12} sm={6} md={3} xl={2}>
      <ListItemAppLink to={path} button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemAppLink>
    </Grid>
  );
}

function FooterMenu() {
  return (
    <Container maxWidth="md" disableGutters>
      <Grid container component="nav" alignItems="center">
        {menu.map(({ title, path, icon }) => (
          <FooterMenuItem key={path} path={path} title={title} icon={icon} />
        ))}
      </Grid>
    </Container>
  );
}

export default FooterMenu;
