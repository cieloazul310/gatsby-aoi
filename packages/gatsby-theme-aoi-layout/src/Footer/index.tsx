import * as React from 'react';
import { Article } from '@cieloazul310/gatsby-theme-aoi-components';
import Socials from './Socials';
import Copyrights from './Copyrights';

function Footer() {
  return (
    <footer>
      <Article>
        <Socials />
        <Copyrights />
      </Article>
    </footer>
  );
}

export default Footer;
