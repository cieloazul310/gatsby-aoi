import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Jumbotron from '../Jumbotron';
import Section, { SectionDivider } from '../Section';
import Article, {
  ArticleTitle,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  SubParagraph,
  Blockquote,
  Hr,
} from '../Article';

export default {
  title: 'Article',
};

function Content() {
  return (
    <Article maxWidth="md">
      <ArticleTitle>Article Title</ArticleTitle>
      <H3>H3</H3>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
        Duis viverra elit eu diam tincidunt lobortis. Proin lorem justo,
        faucibus et mollis ut, lobortis nec nisi. Ut nisi mauris, varius nec
        metus id, rhoncus scelerisque nisl. Morbi leo urna, pretium quis maximus
        ut, suscipit at arcu. Maecenas ultrices, risus ac mattis malesuada,
        risus risus aliquet ex, ac condimentum ex enim eget libero. Sed
        fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Suspendisse luctus mattis dui, quis eleifend enim convallis eget.
        Phasellus nec luctus leo. Proin condimentum felis nec luctus egestas. In
        in sagittis augue. Quisque feugiat ac diam et laoreet. Curabitur a
        tempus arcu. Vivamus vulputate posuere vehicula.
      </Paragraph>
      <H3>H3</H3>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
        Duis viverra elit eu diam tincidunt lobortis. Proin lorem justo,
        faucibus et mollis ut, lobortis nec nisi. Ut nisi mauris, varius nec
        metus id, rhoncus scelerisque nisl. Morbi leo urna, pretium quis maximus
        ut, suscipit at arcu. Maecenas ultrices, risus ac mattis malesuada,
        risus risus aliquet ex, ac condimentum ex enim eget libero.
      </Paragraph>
      <H4>H4</H4>
      <Paragraph>
        Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Suspendisse luctus mattis dui, quis eleifend enim convallis eget.
        Phasellus nec luctus leo.
      </Paragraph>
      <Hr />
      <H3>H3</H3>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <H4>H4</H4>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <H5>H5</H5>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
      <H6>H6</H6>
      <SubParagraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </SubParagraph>
      <H4>H4</H4>
      <Blockquote>
        Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Suspendisse luctus mattis dui, quis eleifend enim convallis eget.
        Phasellus nec luctus leo.
      </Blockquote>
      <Paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Paragraph>
    </Article>
  );
}

function MuiContent() {
  return (
    <Article maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Article Title
      </Typography>
      <Typography variant="h3" gutterBottom>
        H3
      </Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
        Duis viverra elit eu diam tincidunt lobortis. Proin lorem justo,
        faucibus et mollis ut, lobortis nec nisi. Ut nisi mauris, varius nec
        metus id, rhoncus scelerisque nisl. Morbi leo urna, pretium quis maximus
        ut, suscipit at arcu. Maecenas ultrices, risus ac mattis malesuada,
        risus risus aliquet ex, ac condimentum ex enim eget libero. Sed
        fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Suspendisse luctus mattis dui, quis eleifend enim convallis eget.
        Phasellus nec luctus leo. Proin condimentum felis nec luctus egestas. In
        in sagittis augue. Quisque feugiat ac diam et laoreet. Curabitur a
        tempus arcu. Vivamus vulputate posuere vehicula.
      </Typography>
      <Typography variant="h3" gutterBottom>
        H3
      </Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam
        quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat.
        Duis viverra elit eu diam tincidunt lobortis. Proin lorem justo,
        faucibus et mollis ut, lobortis nec nisi. Ut nisi mauris, varius nec
        metus id, rhoncus scelerisque nisl. Morbi leo urna, pretium quis maximus
        ut, suscipit at arcu. Maecenas ultrices, risus ac mattis malesuada,
        risus risus aliquet ex, ac condimentum ex enim eget libero.
      </Typography>
      <Typography variant="h4" gutterBottom>
        H4
      </Typography>
      <Typography paragraph>
        Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Suspendisse luctus mattis dui, quis eleifend enim convallis eget.
        Phasellus nec luctus leo.
      </Typography>
      <Divider />
      <Typography variant="h3" gutterBottom>
        H3
      </Typography>
      <Typography paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Typography>
      <Typography variant="h4" gutterBottom>
        H4
      </Typography>
      <Typography paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Typography>
      <Typography variant="h5" gutterBottom>
        H5
      </Typography>
      <Typography paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Typography>
      <Typography variant="h6" gutterBottom>
        H6
      </Typography>
      <Typography variant="body2" paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Typography>
      <Typography variant="h4" gutterBottom>
        H4
      </Typography>
      <Typography component="blockquote">
        Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Suspendisse luctus mattis dui, quis eleifend enim convallis eget.
        Phasellus nec luctus leo.
      </Typography>
      <Typography paragraph>
        Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus
        vulputate posuere vehicula.
      </Typography>
    </Article>
  );
}

function JapaneseText() {
  return (
    <Article maxWidth="md">
      <ArticleTitle>茶の本</ArticleTitle>
      <H3>第一章 人情の碗</H3>
      <Paragraph>
        茶は薬用として始まり後飲料となる。シナにおいては八世紀に高雅な遊びの一つとして詩歌の域に達した。十五世紀に至り日本はこれを高めて一種の審美的宗教、すなわち茶道にまで進めた。茶道は日常生活の俗事の中に存する美しきものを崇拝することに基づく一種の儀式であって、純粋と調和、相互愛の神秘、社会秩序のローマン主義を諄々と教えるものである。茶道の要義は「不完全なもの」を崇拝するにある。いわゆる人生というこの不可解なもののうちに、何か可能なものを成就しようとするやさしい企てであるから。
      </Paragraph>
      <Paragraph>
        茶の原理は普通の意味でいう単なる審美主義ではない。というのは、倫理、宗教と合して、天人に関するわれわれのいっさいの見解を表わしているものであるから。それは衛生学である、清潔をきびしく説くから。それは経済学である、というのは、複雑なぜいたくというよりもむしろ単純のうちに慰安を教えるから。それは精神幾何学である、なんとなれば、宇宙に対するわれわれの比例感を定義するから。それはあらゆるこの道の信者を趣味上の貴族にして、東洋民主主義の真精神を表わしている。
      </Paragraph>
      <H3>第二章 茶の諸流</H3>
      <Paragraph>
        茶は芸術品であるから、その最もけだかい味を出すには名人を要する。茶にもいろいろある、絵画に傑作と駄作と――概して後者――があると同様に。と言っても、立派な茶をたてるのにこれぞという秘法はない、ティシアン、雪村のごとき名画を作製するのに何も規則がないと同様に。茶はたてるごとに、それぞれ個性を備え、水と熱に対する特別の親和力を持ち、世々相伝の追憶を伴ない、それ独特の話しぶりがある。真の美は必ず常にここに存するのである。芸術と人生のこの単純な根本的法則を、社会が認めないために、われわれはなんという損失をこうむっていることであろう。宋の詩人李仲光は、世に最も悲しむべきことが三つあると嘆じた、すなわち誤れる教育のために立派な青年をそこなうもの、鑑賞の俗悪なために名画の価値を減ずるもの、手ぎわの悪いために立派なお茶を全く浪費するものこれである。
      </Paragraph>
      <Hr />
      <H3>第二章 茶の諸流</H3>
      <Paragraph>
        茶は芸術品であるから、その最もけだかい味を出すには名人を要する。茶にもいろいろある、絵画に傑作と駄作と――概して後者――があると同様に。と言っても、立派な茶をたてるのにこれぞという秘法はない、ティシアン、雪村のごとき名画を作製するのに何も規則がないと同様に。茶はたてるごとに、それぞれ個性を備え、水と熱に対する特別の親和力を持ち、世々相伝の追憶を伴ない、それ独特の話しぶりがある。真の美は必ず常にここに存するのである。芸術と人生のこの単純な根本的法則を、社会が認めないために、われわれはなんという損失をこうむっていることであろう。宋の詩人李仲光は、世に最も悲しむべきことが三つあると嘆じた、すなわち誤れる教育のために立派な青年をそこなうもの、鑑賞の俗悪なために名画の価値を減ずるもの、手ぎわの悪いために立派なお茶を全く浪費するものこれである。
      </Paragraph>
      <H4>岡倉天心</H4>
      <Paragraph>
        茶は薬用として始まり後飲料となる。シナにおいては八世紀に高雅な遊びの一つとして詩歌の域に達した。十五世紀に至り日本はこれを高めて一種の審美的宗教、すなわち茶道にまで進めた。茶道は日常生活の俗事の中に存する美しきものを崇拝することに基づく一種の儀式であって、純粋と調和、相互愛の神秘、社会秩序のローマン主義を諄々と教えるものである。茶道の要義は「不完全なもの」を崇拝するにある。いわゆる人生というこの不可解なもののうちに、何か可能なものを成就しようとするやさしい企てであるから。
      </Paragraph>
      <H4>岡倉天心</H4>
      <Paragraph>
        茶の原理は普通の意味でいう単なる審美主義ではない。というのは、倫理、宗教と合して、天人に関するわれわれのいっさいの見解を表わしているものであるから。それは衛生学である、清潔をきびしく説くから。それは経済学である、というのは、複雑なぜいたくというよりもむしろ単純のうちに慰安を教えるから。それは精神幾何学である、なんとなれば、宇宙に対するわれわれの比例感を定義するから。それはあらゆるこの道の信者を趣味上の貴族にして、東洋民主主義の真精神を表わしている。
      </Paragraph>
      <H5>第一章 人情の碗</H5>
      <Paragraph>
        茶は日常生活の俗事の中に美を崇拝する一種の審美的宗教すなわち茶道の域に達す――茶道は社会の上下を通じて広まる――新旧両世界の誤解――西洋における茶の崇拝――欧州の古い文献に現われた茶の記録――物と心の争いについての道教徒の話――現今における富貴権勢を得ようとする争い
      </Paragraph>
      <H5>第二章 茶の諸流</H5>
      <Paragraph>
        茶の進化の三時期――唐、宋、明の時代を表わす煎茶、抹茶、淹茶――茶道の鼻祖陸羽――三代の茶に関する理想――後世のシナ人には、茶は美味な飲料ではあるが理想ではない――日本においては茶は生の術に関する宗教である
      </Paragraph>
      <H6>底本:「茶の本」岩波文庫、岩波書店</H6>
      <SubParagraph>
        1929（昭和4）年3月10日第1刷発行
        <br />
        1961（昭和36）年6月5日第38刷改版発行
        <br />
        2005（平成17）年11月5日第103刷発行
        <br />
      </SubParagraph>
      <H4>H4</H4>
      <Paragraph>
        Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Suspendisse luctus mattis dui, quis eleifend enim convallis eget.
        Phasellus nec luctus leo.
      </Paragraph>
    </Article>
  );
}

function Basic({ children }: React.PropsWithChildren<unknown>) {
  return (
    <Box p={{ xs: 0, sm: 4 }} bgcolor="text.secondary">
      <Section>{children}</Section>
    </Box>
  );
}

export function BasicContent() {
  return (
    <Basic>
      <Content />
    </Basic>
  );
}
export function BasicMuiContent() {
  return (
    <Basic>
      <MuiContent />
    </Basic>
  );
}
export function BasicJapaneseText() {
  return (
    <Basic>
      <JapaneseText />
    </Basic>
  );
}

function WithAppBar({ children }: React.PropsWithChildren<unknown>) {
  return (
    <Box pt={{ xs: '56px', sm: '64px' }}>
      <AppBar>
        <Toolbar />
      </AppBar>
      <Section>{children}</Section>
    </Box>
  );
}

export function WithAppBarContent() {
  return (
    <WithAppBar>
      <Content />
    </WithAppBar>
  );
}
export function WithAppBarMuiContent() {
  return (
    <WithAppBar>
      <MuiContent />
    </WithAppBar>
  );
}
export function WithAppBarJapaneseText() {
  return (
    <WithAppBar>
      <JapaneseText />
    </WithAppBar>
  );
}

function WithJumbotron({ children }: React.PropsWithChildren<unknown>) {
  return (
    <Box pt={{ xs: '56px', sm: '64px' }}>
      <AppBar>
        <Toolbar />
      </AppBar>
      <Section>
        <Jumbotron title="With Jumbotron" maxWidth="md" />
      </Section>
      <SectionDivider />
      <Section>{children}</Section>
    </Box>
  );
}

export function WithJumbotronContent() {
  return (
    <WithJumbotron>
      <Content />
    </WithJumbotron>
  );
}
export function WithJumbotronMuiContent() {
  return (
    <WithJumbotron>
      <MuiContent />
    </WithJumbotron>
  );
}
export function WithJumbotronJapaneseText() {
  return (
    <WithJumbotron>
      <JapaneseText />
    </WithJumbotron>
  );
}
