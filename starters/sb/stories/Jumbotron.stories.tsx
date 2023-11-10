import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Jumbotron,
  SectionWrapper,
} from "@cieloazul310/gatsby-theme-aoi-components";
import type { ComponentMeta } from "@storybook/react";

export default {
  title: "Jumbotron",
  component: Jumbotron,
} as ComponentMeta<typeof Jumbotron>;

function Header() {
  return (
    <AppBar color="primary" position="sticky">
      <Toolbar>
        <Typography variant="h6">Title</Typography>
      </Toolbar>
    </AppBar>
  );
}

export function withTitle() {
  return (
    <div>
      <Header />
      <Jumbotron title="With Title" />
    </div>
  );
}

export function BackgroundImage() {
  return (
    <div>
      <Header />
      <Jumbotron
        title="Background Image"
        bgImage="https://images.microcms-assets.io/assets/d87f2876d9644eb7b41170736931d50c/f04f897a2cae4ca58191c6d6864b4bf7/IMG_9034.jpeg"
      />
    </div>
  );
}

export function withChildren() {
  return (
    <div>
      <Header />
      <Jumbotron component="header">
        <Typography variant="h4" component="h1">
          Title
        </Typography>
        <Typography variant="h6" component="small">
          Sub Title
        </Typography>
      </Jumbotron>
    </div>
  );
}

export function withFlexBox() {
  return (
    <Jumbotron disableGradient containerProps={{ maxWidth: "md" }}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "#aaa",
          display: "flex",
          height: "100%",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            maxWidth: "50%",
            bgcolor: "#ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: 200, height: 200, bgcolor: "#fff" }} />
        </Box>
        <Box sx={{ bgcolor: "#777", flexGrow: 1, pl: 1, py: 2 }}>
          <Typography variant="h6" component="h1">
            スピッツメンバーと漫遊記・2022新春 田村明浩編
          </Typography>
        </Box>
      </Box>
    </Jumbotron>
  );
}

export function bgcolor() {
  return <Jumbotron title="bgcolor" bgcolor="#f71" />;
}

export function ColorSchema() {
  return (
    <SectionWrapper>
      <Jumbotron title="Primary" colorSchema="primary" />
      <Jumbotron title="Secondary" colorSchema="secondary" />
      <Jumbotron title="Error" colorSchema="error" />
      <Jumbotron title="Success" colorSchema="success" />
    </SectionWrapper>
  );
}

export function DisableGradient() {
  return (
    <SectionWrapper>
      <Jumbotron title="Info" colorSchema="info" disableGradient />
      <Jumbotron title="Success" colorSchema="success" disableGradient />
    </SectionWrapper>
  );
}
