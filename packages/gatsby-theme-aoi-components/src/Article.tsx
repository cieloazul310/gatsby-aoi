/* eslint react/jsx-props-no-spreading: "warn" */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container, { type ContainerProps } from '@mui/material/Container';
import Typography, { type TypographyProps } from '@mui/material/Typography';
import MuiLink, { type LinkProps } from '@mui/material/Link';
import MuiAlert, { type AlertProps } from '@mui/material/Alert';
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

const firstChild = {
  '&:first-child': {
    mt: 4,
  },
};

/**
 * `<ArticleTitle>`
 */
export function ArticleTitle({ children, ...props }: Props) {
  return (
    <Typography
      variant="h4"
      component="h2"
      align="center"
      mt={8}
      mb={4}
      sx={firstChild}
      {...props}
    >
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
    <Typography
      variant="h5"
      component="h3"
      mt={8}
      mb={4}
      color="inherit"
      borderBottom={1}
      borderColor="secondary.dark"
      sx={{
        ...firstChild,
        'blockquote > &': {
          borderColor: 'text.secondary',
        },
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}

export function H4({ children, ...props }: Props) {
  return (
    <Typography
      variant="h6"
      component="h4"
      mt={8}
      mb={4}
      color="inherit"
      fontWeight="bold"
      sx={firstChild}
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
      fontWeight="bold"
      mt={8}
      mb={4}
      sx={firstChild}
      {...props}
    >
      {children}
    </Typography>
  );
}

export function H6({ children, ...props }: Props) {
  return (
    <Typography
      variant="body1"
      component="h6"
      color="text.secondary"
      fontWeight="bold"
      mt={8}
      mb={4}
      sx={firstChild}
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

type BlockquoteProps = Props & {
  url?: string;
  title?: string;
};

export function Blockquote({
  children,
  url,
  title,
  ...props
}: BlockquoteProps) {
  return (
    <Typography
      variant="inherit"
      component="blockquote"
      color="text.secondary"
      py={2}
      px={2}
      my={4}
      borderRadius={1}
      bgcolor={({ palette }) =>
        alpha(palette.text.disabled, palette.action.hoverOpacity)
      }
      {...props}
    >
      {children}
      <Typography textAlign="right" variant="body2">
        {url ? (
          <MuiLink
            color="inherit"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </MuiLink>
        ) : (
          title
        )}
      </Typography>
    </Typography>
  );
}

Blockquote.defaultProps = {
  url: undefined,
  title: undefined,
};

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
      fontSize=".875em"
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
      my={4}
      mx={0}
      variant={variant ?? 'inherit'}
      sx={{
        'li > &': {
          my: 0,
        },
      }}
      {...props}
    />
  );
}

export function Ol({ variant, ...props }: Omit<TypographyProps, 'ref'>) {
  return (
    <Typography
      component="ol"
      my={4}
      mx={0}
      variant={variant ?? 'inherit'}
      sx={{
        'li > &': {
          mt: 0,
          mb: 1,
        },
      }}
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
