import * as React from 'react';
import { Article, Section } from '@cieloazul310/gatsby-theme-aoi-components';
import { LoremIpsum, LoremIpsumJa } from '../components/LoremIpsum';

export default {
  title: 'Article',
};

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
