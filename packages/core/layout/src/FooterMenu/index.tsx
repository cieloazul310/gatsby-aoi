import * as React from 'react';
import { Section } from '@cieloazul310/gatsby-theme-aoi-components';
import menu from '../menu';
import FooterMenuContainer from './Container';
import FooterMenuItem from './Item';

export type FooterMenuProps<T extends object = Record<string, unknown>> = T;

function FooterMenu<T extends object = Record<string, unknown>>(
  props: FooterMenuProps<T>
) {
  return (
    <Section component="nav">
      <FooterMenuContainer {...props}>
        {menu.map(({ title, path, icon }) => (
          <FooterMenuItem
            key={title}
            {...props}
            title={title}
            icon={icon}
            path={path}
          />
        ))}
      </FooterMenuContainer>
    </Section>
  );
}

export default FooterMenu;
