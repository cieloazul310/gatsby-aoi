/* eslint react/jsx-props-no-spreading: "warn" */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';
import MuiLink, { LinkProps } from '@mui/material/Link';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';

/**
 * `<Article>`
 *
 * A main article component with padding-top and padding-bottom including MUI `<Container>` component.
 * `maxWidth` is default to `'sm'`
 */
function Article({
  children,
  maxWidth,
  variant,
  ...props
}: ContainerProps & Pick<TypographyProps, 'variant'>) {
  return (
    <Typography
      sx={{ py: 4, wordWrap: 'break-word' }}
      component="div"
      variant={variant ?? 'body1'}
    >
      <Container maxWidth={maxWidth ?? 'sm'} {...props}>
        {children}
      </Container>
    </Typography>
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
    <Typography variant="inherit" paragraph lineHeight={1.8} {...props}>
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
      variant="inherit"
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

export function InlineCode({ children }: Omit<TypographyProps, 'ref'>) {
  return (
    <Typography
      variant="body2"
      component="code"
      fontFamily="'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', 'monospace'"
      px={0.5}
      borderRadius={1}
      bgcolor={({ palette }) =>
        alpha(palette.secondary.main, palette.action.selectedOpacity)
      }
    >
      {children}
    </Typography>
  );
}

export function Ul({ variant, ...props }: Omit<TypographyProps, 'ref'>) {
  return (
    <Typography
      component="ul"
      mt={2}
      mb={3}
      mx={0}
      variant={variant ?? 'inherit'}
      {...props}
    />
  );
}

export function Ol({ variant, ...props }: Omit<TypographyProps, 'ref'>) {
  return (
    <Typography
      component="ol"
      mt={2}
      mb={3}
      mx={0}
      variant={variant ?? 'inherit'}
      {...props}
    />
  );
}

export function Li({ variant, ...props }: Omit<TypographyProps, 'ref'>) {
  return (
    <Typography
      variant={variant ?? 'inherit'}
      component="li"
      lineHeight={1.8}
      {...props}
    />
  );
}

export function Alert({
  children,
  title,
  ...props
}: AlertProps & { title?: React.ReactNode }) {
  return (
    <MuiAlert {...props} sx={{ ...props.sx, my: 4 }}>
      {title ? <AlertTitle>{title}</AlertTitle> : null}
      {children}
    </MuiAlert>
  );
}

Alert.defaultProps = {
  title: undefined,
};
