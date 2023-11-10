import * as React from "react";
import { Section, Article } from "@cieloazul310/gatsby-theme-aoi-components";
import Socials from "./Socials";
import Copyrights from "./Copyrights";

type FooterProps = Record<string, unknown>;

function Footer(props: FooterProps) {
  return (
    <Section component="footer">
      <Article>
        <Socials {...props} />
        <Copyrights {...props} />
      </Article>
    </Section>
  );
}

export default Footer;
