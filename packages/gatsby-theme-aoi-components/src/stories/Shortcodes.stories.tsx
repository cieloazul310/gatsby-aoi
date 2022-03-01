import * as React from 'react';
import Article, {
  H3,
  Paragraph,
  SubParagraph,
  Hr,
  Ul,
  Ol,
  Li,
  Alert,
} from '../Article';

export default {
  title: 'Shortcodes',
};

export function Shortcodes() {
  return (
    <Article maxWidth="md">
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </Paragraph>
      <H3>Lorem ipsum</H3>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </Paragraph>
      <Alert severity="error" title="Not found">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </Alert>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </Paragraph>
      <Alert severity="warning">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </Alert>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </Paragraph>
      <Alert severity="info" title="hoge">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </Alert>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </Paragraph>
      <Alert severity="success">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </Alert>
      <SubParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </SubParagraph>
      <Hr />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </Paragraph>
      <Ul>
        <Li>Lorem ipsum dolor sit amet</Li>
        <Li>Duis nec quam quis nulla</Li>
      </Ul>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </Paragraph>
      <Ol>
        <Li>Lorem ipsum dolor sit amet</Li>
        <Li>Duis nec quam quis nulla</Li>
      </Ol>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </Paragraph>
      <Ul variant="body2">
        <Li>Lorem ipsum dolor sit amet</Li>
        <Li>Duis nec quam quis nulla</Li>
      </Ul>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </Paragraph>
      <Alert severity="warning" title="hoge">
        <Ul>
          <Li>Lorem ipsum dolor sit amet</Li>
          <Li>Duis nec quam quis nulla</Li>
        </Ul>
      </Alert>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
      </Paragraph>
    </Article>
  );
}
