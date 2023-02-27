import * as React from 'react';
import Container, { type ContainerProps } from '@mui/material/Container';
import Typography, { type TypographyProps } from '@mui/material/Typography';

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
      <Container
        maxWidth={maxWidth ?? 'sm'}
        sx={{
          '& > *:first-child': {
            mt: 4,
          },
          '& > *:last-child': {
            mb: 4,
          },
        }}
        {...props}
      >
        {children}
      </Container>
    </Typography>
  );
}

export default Article;
