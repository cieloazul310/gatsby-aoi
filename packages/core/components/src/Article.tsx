import * as React from 'react';
import Container, { type ContainerProps } from '@mui/material/Container';
import Typography, { type TypographyProps } from '@mui/material/Typography';

export type ArticleProps = ContainerProps & Pick<TypographyProps, 'variant'>;

/**
 * `<Article>`
 *
 * A main article component with padding-top and padding-bottom including MUI `<Container>` component.
 * `maxWidth` is default to `'sm'`
 */
const Article = React.forwardRef<any, ArticleProps>(
  ({ variant = 'body1', maxWidth = 'sm', ...props }, ref) => (
    <Typography
      sx={{ py: 4, wordWrap: 'break-word' }}
      component="div"
      variant={variant ?? 'body1'}
    >
      <Container
        ref={ref}
        maxWidth={maxWidth}
        sx={{
          // equivalent to first-child
          '& > *:not(:is(*:not(style) ~ *))': {
            mt: 0,
          },
        }}
        {...props}
      />
    </Typography>
  )
);

export default Article;
