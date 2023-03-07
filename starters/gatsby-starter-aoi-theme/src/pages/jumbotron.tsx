import * as React from 'react';
import {
  Layout,
  Jumbotron,
  Section,
  Article,
  Paragraph,
  AppLinkButton,
  Seo,
} from '@cieloazul310/gatsby-theme-aoi';

function JumbotronPage() {
  return (
    <Layout title="JumbotronPage">
      <Jumbotron
        component="header"
        title="Jumbotron Page"
        bgImage="https://pbs.twimg.com/profile_banners/106113980/1417608307/1500x500"
      />
      <Section>
        <Article>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            quam quis nulla dignissim finibus. Morbi aliquam quam ut efficitur
            feugiat. Duis viverra elit eu diam tincidunt lobortis. Proin lorem
            justo, faucibus et mollis ut, lobortis nec nisi. Ut nisi mauris,
            varius nec metus id, rhoncus scelerisque nisl. Morbi leo urna,
            pretium quis maximus ut, suscipit at arcu. Maecenas ultrices, risus
            ac mattis malesuada, risus risus aliquet ex, ac condimentum ex enim
            eget libero. Sed fermentum rutrum urna, vitae suscipit nunc tempus
            eget. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Suspendisse luctus mattis dui, quis eleifend
            enim convallis eget. Phasellus nec luctus leo. Proin condimentum
            felis nec luctus egestas. In in sagittis augue. Quisque feugiat ac
            diam et laoreet. Curabitur a tempus arcu. Vivamus vulputate posuere
            vehicula.
          </Paragraph>
          <AppLinkButton href="/">Back to Top</AppLinkButton>
        </Article>
      </Section>
    </Layout>
  );
}

export default JumbotronPage;

export function Head() {
  return <Seo title="Jumbotron Page" />;
}
