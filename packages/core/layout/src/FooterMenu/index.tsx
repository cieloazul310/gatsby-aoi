import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  Section,
  ListItemAppLink,
} from '@cieloazul310/gatsby-theme-aoi-components';
import menu, { type Menu } from '../menu';

type FooterMenuItemProps = Menu;

function FooterMenuItem({ title, path, icon }: FooterMenuItemProps) {
  return (
    <Grid item xs={12} sm={6} md={3} xl={2}>
      <ListItemAppLink href={path}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemAppLink>
    </Grid>
  );
}

function FooterMenu() {
  return (
    <Section component="nav">
      <Container maxWidth="md" disableGutters>
        <Grid container alignItems="center">
          {menu.map(({ title, path, icon }) => (
            <FooterMenuItem key={title} path={path} title={title} icon={icon} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default FooterMenu;
