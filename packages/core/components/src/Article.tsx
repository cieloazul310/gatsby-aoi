import * as React from 'react';
import Container, { type ContainerProps } from '@mui/material/Container';
import Typography, { type TypographyProps } from '@mui/material/Typography';
import type { BoxProps } from '@mui/material/Box';

export type ArticleProps = Omit<ContainerProps, 'py'> &
  Pick<TypographyProps, 'variant'> &
  Pick<BoxProps, 'py'>;

/**
 * `<Article>`
 *
 * A main article component with padding-top and padding-bottom including MUI `<Container>` component.
 * `maxWidth` is default to `'sm'`
 */
const Article = React.forwardRef<any, ArticleProps>(
  ({ variant = 'body1', maxWidth = 'sm', py = 4, ...props }, ref) => (
    <Typography
      sx={{ py, wordWrap: 'break-word' }}
      component="div"
      variant={variant}
    >
      <Container
        ref={ref}
        maxWidth={maxWidth}
        sx={{
          ...props.sx,
          // equivalent to first-child
          '& > *:not(:is(*:not(style) ~ *))': {
            mt: 0,
          },
          '& > p:last-of-type': {
            mb: 0,
          },
        }}
        {...props}
      />
    </Typography>
  )
);

export default Article;
