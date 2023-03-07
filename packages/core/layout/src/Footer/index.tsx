import * as React from 'react';
import { Section, Article } from '@cieloazul310/gatsby-theme-aoi-components';
import Socials from './Socials';
import Copyrights from './Copyrights';

function Footer() {
  return (
    <Section component="footer">
      <Article>
        <Socials />
        <Copyrights />
      </Article>
    </Section>
  );
}

export default Footer;
