import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import {
  Layout,
  Jumbotron,
  TabPane,
  Section,
  SectionWrapper,
  Article,
  Paragraph,
  AppLinkButton,
  Alert,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi';
import { useAppState } from '../@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppStateContext';

function TabPage() {
  const { appBarPosition } = useAppState();
  const [tab, setTab] = React.useState(0);
  const handleTab = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  const handleTabIndex = (index: number) => () => {
    setTab(index);
  };
  const tabs = (
    <Tabs value={tab} onChange={handleTab}>
      <Tab label="Tab1" />
      <Tab label="Tab2" />
      <Tab label="Tab3" />
    </Tabs>
  );
  return (
    <Layout
      title="Tab Layout"
      appBarPosition={appBarPosition}
      tabSticky
      tabs={tabs}
    >
      <div>
        <TabPane index={0} currentTab={tab}>
          <SectionWrapper component="article">
            <Jumbotron component="header" title="Tab Layout Page" />
            <Section component="main">
              <Article>
                <Paragraph>
                  It works great with react-swipeable-views.
                </Paragraph>
                <Button color="secondary" onClick={handleTabIndex(1)}>
                  Go to Tab-2
                </Button>
                <AppLinkButton href="/">Back to top</AppLinkButton>
              </Article>
            </Section>
          </SectionWrapper>
        </TabPane>
        <TabPane index={1} currentTab={tab}>
          <SectionWrapper component="article">
            <Jumbotron component="header" title="Tab 2" />
            <Section component="main">
              <Article>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec quam quis nulla dignissim finibus. Morbi aliquam quam ut
                  efficitur feugiat. Duis viverra elit eu diam tincidunt
                  lobortis. Proin lorem justo, faucibus et mollis ut, lobortis
                  nec nisi. Ut nisi mauris, varius nec metus id, rhoncus
                  scelerisque nisl. Morbi leo urna, pretium quis maximus ut,
                  suscipit at arcu. Maecenas ultrices, risus ac mattis
                  malesuada, risus risus aliquet ex, ac condimentum ex enim eget
                  libero. Sed fermentum rutrum urna, vitae suscipit nunc tempus
                  eget. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Suspendisse luctus mattis dui,
                  quis eleifend enim convallis eget. Phasellus nec luctus leo.
                  Proin condimentum felis nec luctus egestas. In in sagittis
                  augue. Quisque feugiat ac diam et laoreet. Curabitur a tempus
                  arcu. Vivamus vulputate posuere vehicula.
                </Paragraph>
                <Button color="secondary" onClick={handleTabIndex(2)}>
                  Go to Tab-3
                </Button>
                <AppLinkButton href="/">Back to top</AppLinkButton>
              </Article>
            </Section>
          </SectionWrapper>
        </TabPane>
        <TabPane index={2} currentTab={tab}>
          <SectionWrapper component="article">
            <Jumbotron component="header" title="Tab 3" />
            <Section component="main">
              <Article>
                <Paragraph>
                  Lorem Ipsum，也称乱数假文或者哑元文本，
                  是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                  Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                  Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus
                  PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                </Paragraph>
                <Alert title="Lorem Ipsum">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec quam quis nulla dignissim finibus. Morbi aliquam quam ut
                  efficitur feugiat. Duis viverra elit eu diam tincidunt
                  lobortis.
                </Alert>
                <Button color="secondary" onClick={handleTabIndex(0)}>
                  Go to Tab-1
                </Button>
                <AppLinkButton href="/">Back to top</AppLinkButton>
              </Article>
            </Section>
          </SectionWrapper>
        </TabPane>
      </div>
    </Layout>
  );
}

export default TabPage;

export function Head() {
  return <Seo title="Tab Layout" />;
}
