import * as React from "react";
import Stack from "@mui/material/Stack";
import { AppLink, Paragraph } from "@cieloazul310/gatsby-theme-aoi-components";
import type { ComponentMeta } from "@storybook/react";

export default {
  title: "AppLink",
  component: AppLink,
} as ComponentMeta<typeof AppLink>;

export function Basic() {
  return (
    <Stack spacing={2}>
      <AppLink href="/">Internal</AppLink>
      <AppLink href="https://cieloazul310.github.io">External</AppLink>
      <AppLink href="/" color="primary.main">
        Primary Color
      </AppLink>
      <AppLink>No href</AppLink>
      <AppLink href="#heading">To section</AppLink>
      <AppLink href="mailto:hoge@hoge.com">Mail</AppLink>
      <AppLink href="blog:hoge.png" download>
        Download
      </AppLink>
    </Stack>
  );
}

export function Inline() {
  return (
    <Paragraph>
      <AppLink href="/">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </AppLink>{" "}
      Duis nec quam quis nulla dignissim finibus. Morbi aliquam quam ut
      efficitur feugiat. Duis viverra elit eu diam tincidunt lobortis. Proin
      lorem justo, faucibus et mollis ut, lobortis nec nisi. Ut nisi mauris,
      varius nec metus id, rhoncus scelerisque nisl. Morbi leo urna, pretium
      quis maximus ut, suscipit at arcu. Maecenas ultrices, risus ac mattis
      malesuada, risus risus aliquet ex, ac condimentum ex enim eget libero.{" "}
      <AppLink href="https://cieloazul310.github.io">
        Sed fermentum rutrum urna
      </AppLink>
      , vitae suscipit nunc tempus eget. Orci varius natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Suspendisse luctus mattis
      dui, quis eleifend enim convallis eget. Phasellus nec luctus leo. Proin
      condimentum felis nec luctus egestas. In in sagittis augue. Quisque
      feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus vulputate
      posuere vehicula.
    </Paragraph>
  );
}
