import * as React from 'react';
import {
  Article,
  Section,
  SectionWrapper,
} from '@cieloazul310/gatsby-theme-aoi-components';
import type { ComponentMeta } from '@storybook/react';
import { LoremIpsum, LoremIpsumJa } from '../components/LoremIpsum';

export default {
  title: 'Article',
  component: Article,
  subcomponents: {
    Section,
    SectionWrapper,
  },
} as ComponentMeta<typeof Article>;

export function WithArticle() {
  return (
    <Article maxWidth="md">
      <LoremIpsum />
    </Article>
  );
}

export function WithArticleJa() {
  return (
    <Article maxWidth="md">
      <LoremIpsumJa />
    </Article>
  );
}

export function WithSection() {
  return (
    <Section>
      <Article>
        <LoremIpsum />
      </Article>
    </Section>
  );
}

export function WithSectionJa() {
  return (
    <Section>
      <Article>
        <LoremIpsumJa />
      </Article>
    </Section>
  );
}

export function WithWrapper() {
  return (
    <SectionWrapper component="article">
      <Section>
        <Article>
          <LoremIpsumJa />
        </Article>
      </Section>
      <Section>
        <Article>
          <LoremIpsumJa />
        </Article>
      </Section>
      <Section>
        <Article>
          <LoremIpsumJa />
        </Article>
      </Section>
    </SectionWrapper>
  );
}
