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
  Blockquote,
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
        <Li>
          Lorem ipsum dolor sit amet
          <br />
          <Ol>
            <Li>Lorem ipsum dolor sit amet</Li>
            <Li>Duis nec quam quis nulla</Li>
          </Ol>
        </Li>
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
      <Blockquote>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
          quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
        </Paragraph>
      </Blockquote>
      <Blockquote title="Lorem ipsum">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
          quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
        </Paragraph>
      </Blockquote>
      <Blockquote title="Lorem ipsum" url="https://cieloazul310.github.io">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
          quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
        </Paragraph>
      </Blockquote>
      <Blockquote title="茶の本" url="https://cieloazul310.github.io">
        <Paragraph>
          茶は芸術品であるから、その最もけだかい味を出すには名人を要する。茶にもいろいろある、絵画に傑作と駄作と――概して後者――があると同様に。と言っても、立派な茶をたてるのにこれぞという秘法はない、ティシアン、雪村のごとき名画を作製するのに何も規則がないと同様に。茶はたてるごとに、それぞれ個性を備え、水と熱に対する特別の親和力を持ち、世々相伝の追憶を伴ない、それ独特の話しぶりがある。真の美は必ず常にここに存するのである。芸術と人生のこの単純な根本的法則を、社会が認めないために、われわれはなんという損失をこうむっていることであろう。宋の詩人李仲光は、世に最も悲しむべきことが三つあると嘆じた、すなわち誤れる教育のために立派な青年をそこなうもの、鑑賞の俗悪なために名画の価値を減ずるもの、手ぎわの悪いために立派なお茶を全く浪費するものこれである。
        </Paragraph>
      </Blockquote>
    </Article>
  );
}
