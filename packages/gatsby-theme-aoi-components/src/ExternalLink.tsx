/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import MuiLink, { type LinkProps as MuiLinkProps } from '@mui/material/Link';

export type ExternalLinkProps = MuiLinkProps;

function ExternalLink(props: ExternalLinkProps) {
  const {
    color = ({ palette }) =>
      palette.mode === 'light' ? 'secondary.dark' : 'secondary.main',
    underline = 'hover',
    ...other
  } = props;
  return (
    <MuiLink
      color={color}
      underline={underline}
      target="_blank"
      rel="noopener noreferrer"
      {...other}
    />
  );
}

export default ExternalLink;
