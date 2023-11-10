import * as React from "react";
import Stack from "@mui/material/Stack";
import { AppLinkButton } from "@cieloazul310/gatsby-theme-aoi-components";
import type { ComponentMeta } from "@storybook/react";

export default {
  title: "AppLinkButton",
  component: AppLinkButton,
} as ComponentMeta<typeof AppLinkButton>;

export function Basic() {
  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row">
        <AppLinkButton href="/">Internal</AppLinkButton>
        <AppLinkButton href="https://cieloazul310.github.io">
          External
        </AppLinkButton>
      </Stack>
      <Stack spacing={2} direction="row">
        <AppLinkButton href="/" color="primary">
          Primary Color
        </AppLinkButton>
        <AppLinkButton href="/" color="secondary">
          Secondary Color
        </AppLinkButton>
      </Stack>
      <Stack spacing={2} direction="row">
        <AppLinkButton href="https://cieloazul310.github.io" variant="outlined">
          Outlined
        </AppLinkButton>
        <AppLinkButton
          href="https://cieloazul310.github.io"
          variant="contained"
        >
          Contained
        </AppLinkButton>
        <AppLinkButton href="/" variant="contained" color="secondary">
          Contained
        </AppLinkButton>
      </Stack>
      <Stack spacing={2} direction="row">
        <AppLinkButton href="#id">To Section</AppLinkButton>
        <AppLinkButton href="glob:hoge.png" variant="contained" download>
          Download
        </AppLinkButton>
        <AppLinkButton
          href="mailto:hoge@hoge.com"
          variant="contained"
          color="secondary"
        >
          Mail
        </AppLinkButton>
      </Stack>
    </Stack>
  );
}
