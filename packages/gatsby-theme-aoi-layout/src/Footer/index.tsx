import * as React from 'react';
import {
  Section,
  SectionDivider,
  Article,
} from '@cieloazul310/gatsby-theme-aoi-components';
import Socials from './Socials';
import Copyrights from './Copyrights';

function Footer(): JSX.Element {
  return (
    <footer>
      <SectionDivider />
      <Section>
        <Article>
          <Socials />
          <Copyrights />
        </Article>
      </Section>
    </footer>
  );
}

export default Footer;
