/* eslint react/jsx-props-no-spreading: "warn" */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';
import MuiLink, { LinkProps } from '@mui/material/Link';
import Divider from '@mui/material/Divider';

/**
 * `<Article>`
 *
 * A main article component with padding-top and padding-bottom including MUI `<Container>` component.
 * `maxWidth` is default to `'sm'`
 */
function Article({ children, maxWidth, ...props }: ContainerProps) {
  return (
    <Box sx={{ py: 4, wordWrap: 'break-word' }}>
      <Container maxWidth={maxWidth ?? 'sm'} {...props}>
        {children}
      </Container>
    </Box>
  );
}

export default Article;

type Props = Omit<TypographyProps, 'ref'>;

/**
 * @deprecated
 */
export function ArticleSection({ children }: Props) {
  return (
    <Box pb={0}>
      <section>{children}</section>
    </Box>
  );
}

/**
 * `<ArticleTitle>`
 */
export function ArticleTitle({ children, ...props }: Props) {
  return (
    <Typography variant="h5" component="h2" align="center" mb={4} {...props}>
      {children}
    </Typography>
  );
}

export function Paragraph({ children, ...props }: Props) {
  return (
    <Typography variant="body1" paragraph lineHeight={1.8} {...props}>
      {children}
    </Typography>
  );
}

export function SubParagraph({ children, ...props }: Props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      paragraph
      lineHeight={1.8}
      {...props}
    >
      {children}
    </Typography>
  );
}

export function H3({ children, ...props }: Props) {
  return (
    <Typography variant="h6" component="h3" mb="1em" mt="2em" {...props}>
      {children}
    </Typography>
  );
}

export function H4({ children, ...props }: Props) {
  return (
    <Typography
      variant="body1"
      component="h4"
      mt="2em"
      mb="1.2em"
      fontWeight="bold"
      {...props}
    >
      {children}
    </Typography>
  );
}

export function H5({ children, ...props }: Props) {
  return (
    <Typography
      variant="body1"
      component="h5"
      color="text.secondary"
      fontWeight="bold"
      mt="2em"
      mb="1em"
      {...props}
    >
      {children}
    </Typography>
  );
}

export function H6({ children, ...props }: Props) {
  return (
    <Typography
      variant="body2"
      component="h6"
      color="text.secondary"
      fontWeight="bold"
      mt="2em"
      mb="1em"
      {...props}
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

export function Blockquote({ children, ...props }: Props) {
  return (
    <Typography
      component="blockquote"
      borderLeft={2}
      borderColor="text.secondary"
      py={2}
      px={2}
      my={2}
      {...props}
    >
      {children}
    </Typography>
  );
}

export function Hr() {
  return <Divider sx={{ my: 8 }} />;
}
