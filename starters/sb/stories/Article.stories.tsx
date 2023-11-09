import * as React from "react";
import {
  Article,
  Section,
  SectionWrapper,
  Paragraph,
} from "@cieloazul310/gatsby-theme-aoi-components";
import type { ComponentMeta } from "@storybook/react";
import { LoremIpsum, LoremIpsumJa } from "../components/LoremIpsum";

export default {
  title: "Article",
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
          <Paragraph>
            茶は薬用として始まり後飲料となる。シナにおいては八世紀に高雅な遊びの一つとして詩歌の域に達した。十五世紀に至り日本はこれを高めて一種の審美的宗教、すなわち茶道にまで進めた。
          </Paragraph>
        </Article>
      </Section>
      <Section>
        <Article py={2}>
          <Paragraph>
            茶は薬用として始まり後飲料となる。シナにおいては八世紀に高雅な遊びの一つとして詩歌の域に達した。十五世紀に至り日本はこれを高めて一種の審美的宗教、すなわち茶道にまで進めた。
          </Paragraph>
        </Article>
      </Section>
      <Section>
        <Article py={8}>
          <Paragraph>
            茶は薬用として始まり後飲料となる。シナにおいては八世紀に高雅な遊びの一つとして詩歌の域に達した。十五世紀に至り日本はこれを高めて一種の審美的宗教、すなわち茶道にまで進めた。
          </Paragraph>
        </Article>
      </Section>
      <Section>
        <Article>
          <Paragraph>
            茶は薬用として始まり後飲料となる。シナにおいては八世紀に高雅な遊びの一つとして詩歌の域に達した。十五世紀に至り日本はこれを高めて一種の審美的宗教、すなわち茶道にまで進めた。
          </Paragraph>
        </Article>
      </Section>
    </SectionWrapper>
  );
}
