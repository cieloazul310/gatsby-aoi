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
const Article: (props: Omit<ArticleProps, 'ref'>) => JSX.Element | null =
  React.forwardRef<any, ArticleProps>(
    ({ variant, maxWidth, ...props }, ref) => (
      <Typography
        sx={{ py: 4, wordWrap: 'break-word' }}
        component="div"
        variant={variant ?? 'body1'}
      >
        <Container
          ref={ref}
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
        />
      </Typography>
    )
  );
/*
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
*/

export default Article;
