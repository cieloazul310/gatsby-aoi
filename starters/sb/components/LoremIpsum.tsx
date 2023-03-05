import * as React from 'react';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  SubParagraph,
  AppLink,
  Blockquote,
  Code,
  CodeBlock,
  Hr,
} from '@cieloazul310/gatsby-theme-aoi-components';

export function LoremIpsum() {
  return (
    <>
      <H1>Article Title</H1>
      <H2>Heading 2</H2>
      <Paragraph>
        <AppLink href="/">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AppLink>{' '}
        Duis nec quam quis nulla dignissim finibus. Morbi aliquam quam ut
        efficitur feugiat. Duis viverra elit eu diam tincidunt lobortis. Proin
        lorem justo, faucibus et mollis ut, lobortis nec nisi. Ut nisi mauris,
        varius nec metus id, rhoncus scelerisque nisl. Morbi leo urna, pretium
        quis maximus ut, suscipit at arcu. Maecenas ultrices, risus ac mattis
        malesuada, risus risus aliquet ex, ac condimentum ex enim eget libero.{' '}
        <AppLink href="https://cieloazul310.github.io">
          Sed fermentum rutrum urna
        </AppLink>
        , vitae suscipit nunc tempus eget. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Suspendisse luctus
        mattis dui, quis eleifend enim convallis eget. Phasellus nec luctus leo.
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <H2>Heading 2</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
        Duis viverra elit eu diam tincidunt lobortis. Proin lorem justo,
        faucibus et mollis ut, lobortis nec nisi. Ut nisi mauris, varius nec
        metus id, rhoncus scelerisque nisl. Morbi leo urna, pretium quis maximus
        ut, suscipit at arcu. Maecenas ultrices, risus ac mattis malesuada,
        risus risus aliquet ex, ac condimentum ex enim eget libero.
      </Paragraph>
      <H3>Heading 3</H3>
      <Paragraph>
        Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Suspendisse luctus mattis dui, quis eleifend enim convallis eget.
        Phasellus nec luctus leo.
      </Paragraph>
      <Hr />
      <H2>Heading 2</H2>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <H3>Heading 3</H3>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <H4>Heading 4</H4>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <H5>Heading 5</H5>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <H6>Heading 6</H6>
      <SubParagraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </SubParagraph>
      <H3>Heading 3</H3>
      <Blockquote>
        <Paragraph>
          Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Suspendisse luctus mattis dui, quis eleifend enim
          convallis eget. Phasellus nec luctus leo.
        </Paragraph>
      </Blockquote>
      <Blockquote title="Jリーグ規約">
        <Paragraph>
          Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Suspendisse luctus mattis dui, quis eleifend enim
          convallis eget. Phasellus nec luctus leo.
        </Paragraph>
      </Blockquote>
      <Paragraph>
        <Code>Proin condimentum felis</Code> nec luctus egestas. In in sagittis
        augue. Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu.
        Vivamus vulputate posuere vehicula.
      </Paragraph>
      <CodeBlock>
        <Code>{`import * as React from 'react';`}</Code>
      </CodeBlock>
      <H3>Heading 3</H3>
      <Blockquote>
        <H2>In Blockquote</H2>
        <Paragraph>
          Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Suspendisse luctus mattis dui, quis eleifend enim
          convallis eget. Phasellus nec luctus leo.
        </Paragraph>
        <H3>In Blokquote Heading 3</H3>
        <Paragraph>
          Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Suspendisse luctus mattis dui, quis eleifend enim
          convallis eget. Phasellus nec luctus leo.
        </Paragraph>
      </Blockquote>
    </>
  );
}

export function LoremIpsumJa() {
  return (
    <>
      <H1>茶の本</H1>
      <H2>第一章 人情の碗</H2>
      <Paragraph>
        茶は薬用として始まり後飲料となる。シナにおいては八世紀に高雅な遊びの一つとして詩歌の域に達した。十五世紀に至り日本はこれを高めて一種の審美的宗教、すなわち茶道にまで進めた。茶道は日常生活の俗事の中に存する美しきものを崇拝することに基づく一種の儀式であって、純粋と調和、相互愛の神秘、社会秩序のローマン主義を諄々と教えるものである。茶道の要義は「不完全なもの」を崇拝するにある。いわゆる人生というこの不可解なもののうちに、何か可能なものを成就しようとするやさしい企てであるから。
      </Paragraph>
      <Paragraph>
        茶の原理は普通の意味でいう単なる審美主義ではない。というのは、倫理、宗教と合して、天人に関するわれわれのいっさいの見解を表わしているものであるから。それは衛生学である、清潔をきびしく説くから。それは経済学である、というのは、複雑なぜいたくというよりもむしろ単純のうちに慰安を教えるから。それは精神幾何学である、なんとなれば、宇宙に対するわれわれの比例感を定義するから。それはあらゆるこの道の信者を趣味上の貴族にして、東洋民主主義の真精神を表わしている。
      </Paragraph>
      <H2>第二章 茶の諸流</H2>
      <Paragraph>
        茶は芸術品であるから、その最もけだかい味を出すには名人を要する。茶にもいろいろある、絵画に傑作と駄作と――概して後者――があると同様に。と言っても、立派な茶をたてるのにこれぞという秘法はない、ティシアン、雪村のごとき名画を作製するのに何も規則がないと同様に。茶はたてるごとに、それぞれ個性を備え、水と熱に対する特別の親和力を持ち、世々相伝の追憶を伴ない、それ独特の話しぶりがある。真の美は必ず常にここに存するのである。芸術と人生のこの単純な根本的法則を、社会が認めないために、われわれはなんという損失をこうむっていることであろう。宋の詩人李仲光は、世に最も悲しむべきことが三つあると嘆じた、すなわち誤れる教育のために立派な青年をそこなうもの、鑑賞の俗悪なために名画の価値を減ずるもの、手ぎわの悪いために立派なお茶を全く浪費するものこれである。
      </Paragraph>
      <Hr />
      <H2>第二章 茶の諸流</H2>
      <Paragraph>
        茶は芸術品であるから、その最もけだかい味を出すには名人を要する。茶にもいろいろある、絵画に傑作と駄作と――概して後者――があると同様に。と言っても、立派な茶をたてるのにこれぞという秘法はない、ティシアン、雪村のごとき名画を作製するのに何も規則がないと同様に。茶はたてるごとに、それぞれ個性を備え、水と熱に対する特別の親和力を持ち、世々相伝の追憶を伴ない、それ独特の話しぶりがある。真の美は必ず常にここに存するのである。芸術と人生のこの単純な根本的法則を、社会が認めないために、われわれはなんという損失をこうむっていることであろう。宋の詩人李仲光は、世に最も悲しむべきことが三つあると嘆じた、すなわち誤れる教育のために立派な青年をそこなうもの、鑑賞の俗悪なために名画の価値を減ずるもの、手ぎわの悪いために立派なお茶を全く浪費するものこれである。
      </Paragraph>
      <H3>岡倉天心</H3>
      <Paragraph>
        茶は薬用として始まり後飲料となる。シナにおいては八世紀に高雅な遊びの一つとして詩歌の域に達した。十五世紀に至り日本はこれを高めて一種の審美的宗教、すなわち茶道にまで進めた。茶道は日常生活の俗事の中に存する美しきものを崇拝することに基づく一種の儀式であって、純粋と調和、相互愛の神秘、社会秩序のローマン主義を諄々と教えるものである。茶道の要義は「不完全なもの」を崇拝するにある。いわゆる人生というこの不可解なもののうちに、何か可能なものを成就しようとするやさしい企てであるから。
      </Paragraph>
      <Paragraph>
        茶は薬用として始まり後飲料となる。シナにおいては八世紀に高雅な遊びの一つとして詩歌の域に達した。十五世紀に至り日本はこれを高めて一種の審美的宗教、すなわち茶道にまで進めた。
      </Paragraph>
      <H3>岡倉天心</H3>
      <Paragraph>
        茶の原理は普通の意味でいう単なる審美主義ではない。というのは、倫理、宗教と合して、天人に関するわれわれのいっさいの見解を表わしているものであるから。それは衛生学である、清潔をきびしく説くから。それは経済学である、というのは、複雑なぜいたくというよりもむしろ単純のうちに慰安を教えるから。それは精神幾何学である、なんとなれば、宇宙に対するわれわれの比例感を定義するから。それはあらゆるこの道の信者を趣味上の貴族にして、東洋民主主義の真精神を表わしている。
      </Paragraph>
      <Paragraph>
        茶は薬用として始まり後飲料となる。シナにおいては八世紀に高雅な遊びの一つとして詩歌の域に達した。十五世紀に至り日本はこれを高めて一種の審美的宗教、すなわち茶道にまで進めた。
      </Paragraph>
      <H4>第一章 人情の碗</H4>
      <Paragraph>
        茶は日常生活の俗事の中に美を崇拝する一種の審美的宗教すなわち茶道の域に達す――茶道は社会の上下を通じて広まる――新旧両世界の誤解――西洋における茶の崇拝――欧州の古い文献に現われた茶の記録――物と心の争いについての道教徒の話――現今における富貴権勢を得ようとする争い
      </Paragraph>
      <H4>第二章 茶の諸流</H4>
      <Paragraph>
        茶の進化の三時期――唐、宋、明の時代を表わす煎茶、抹茶、淹茶――茶道の鼻祖陸羽――三代の茶に関する理想――後世のシナ人には、茶は美味な飲料ではあるが理想ではない――日本においては茶は生の術に関する宗教である
      </Paragraph>
      <H5>底本:「茶の本」岩波文庫、岩波書店</H5>
      <SubParagraph>
        1929（昭和4）年3月10日第1刷発行
        <br />
        1961（昭和36）年6月5日第38刷改版発行
        <br />
        2005（平成17）年11月5日第103刷発行
        <br />
      </SubParagraph>
      <H3>Heading 3</H3>
      <Paragraph>
        Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Suspendisse luctus mattis dui, quis eleifend enim convallis eget.
        Phasellus nec luctus leo.
      </Paragraph>
    </>
  );
}
