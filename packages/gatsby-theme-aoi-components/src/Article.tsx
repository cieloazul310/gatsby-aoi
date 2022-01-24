/* eslint react/jsx-props-no-spreading: "warn" */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MuiLink, { LinkProps } from '@mui/material/Link';

function Article({ children, maxWidth, ...props }: ContainerProps) {
  return (
    <Box sx={{ py: 2, wordWrap: 'break-word' }}>
      <Container maxWidth={maxWidth ?? 'sm'} {...props}>
        <article>{children}</article>
      </Container>
    </Box>
  );
}

export default Article;

type Props = {
  children: React.ReactNode;
};

export function ArticleSection({ children }: Props) {
  return (
    <Box pb={1}>
      <section>{children}</section>
    </Box>
  );
}

export function ArticleTitle({ children }: Props) {
  return (
    <Typography variant="h5" component="h2" align="center" pb={4}>
      {children}
    </Typography>
  );
}

export function Paragraph({ children }: Props) {
  return (
    <Typography variant="body1" paragraph>
      {children}
    </Typography>
  );
}

export function H3({ children }: Props) {
  return (
    <Typography variant="h6" component="h3" gutterBottom>
      {children}
    </Typography>
  );
}

export function H4({ children }: Props) {
  return (
    <Typography
      variant="body1"
      component="h4"
      gutterBottom
      sx={{ fontWeight: 'bold' }}
    >
      {children}
    </Typography>
  );
}

export function Link({ children, href, ...props }: LinkProps) {
  return (
    <MuiLink
      color="secondary"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </MuiLink>
  );
}