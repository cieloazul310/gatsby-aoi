import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default {
  title: "Palette",
};

export function Palette() {
  return (
    <Stack direction="column" spacing={2}>
      <Box height={40} bgcolor="primary.main" />
      <Box height={40} bgcolor="primary.light" />
      <Box height={40} bgcolor="primary.dark" />
      <Box height={40} bgcolor="secondary.main" />
      <Box height={40} bgcolor="secondary.light" />
      <Box height={40} bgcolor="secondary.dark" />
    </Stack>
  );
}
