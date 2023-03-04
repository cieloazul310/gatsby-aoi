import * as React from 'react';
import Box, { type BoxProps } from '@mui/material/Box';
import Container, { type ContainerProps } from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';

export type JumbotronProps = Omit<BoxProps, 'maxWidth'> & {
  title?: string;
  bgImage?: string;
  disableGradient?: boolean;
  maxWidth?: ContainerProps['maxWidth'];
  containerProps?: ContainerProps;
};

const Jumbotron = React.forwardRef<HTMLElement, JumbotronProps>(
  (
    {
      title,
      bgImage,
      children,
      bgcolor = ({ palette }) => {
        if (bgImage) return palette.grey[600];
        return palette.mode === 'light' ? 'primary.dark' : palette.grey[800];
      },
      maxWidth = 'sm',
      display = 'flex',
      justifyContent = 'center',
      position = 'relative',
      overflow = 'hidden',
      height = { xs: 'calc(50vh - 56px)', sm: 320 },
      disableGradient = false,
      containerProps = {
        maxWidth: undefined,
        sx: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 1,
          textShadow: bgImage ? '0 0 4px rgba(0, 0, 0, 0.6)' : undefined,
        },
      },
      ...props
    },
    ref
  ) => {
    const jumbotronBgImage = React.useCallback(
      ({ palette }: Theme) => {
        if (bgImage) return undefined;
        if (disableGradient) return undefined;
        const isDark = palette.mode === 'dark';
        const { grey } = palette;
        const { light, dark } = palette.primary;
        return `radial-gradient(ellipse at top left, ${
          isDark ? dark : light
        } 0%, ${isDark ? grey[800] : dark} 100%)`;
      },
      [bgImage, disableGradient]
    );
    const color = React.useCallback(
      ({ palette }: Theme) =>
        bgImage || palette.mode === 'dark'
          ? palette.common.white
          : palette.getContrastText(palette.primary.main),
      [bgImage]
    );
    return (
      <Box
        ref={ref}
        {...props}
        display={display}
        justifyContent={justifyContent}
        position={position}
        overflow={overflow}
        height={height}
        bgcolor={bgcolor}
        sx={{
          ...props.sx,
          backgroundImage: jumbotronBgImage,
        }}
      >
        {bgImage ? (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: bgImage
                ? `url(${bgImage}) center / cover`
                : undefined,
              filter: ({ palette }) =>
                `blur(4px) brightness(${palette.mode === 'light' ? 0.7 : 0.5})`,
              transform: 'scale(1.2)',
            }}
          />
        ) : null}
        <Container
          {...containerProps}
          sx={{
            ...containerProps.sx,
            height,
            color,
          }}
          maxWidth={containerProps.maxWidth ?? maxWidth}
        >
          {children ?? (
            <Typography variant="h4" component="h2">
              {title}
            </Typography>
          )}
        </Container>
      </Box>
    );
  }
);
/*
function Jumbotron({
  title,
  bgImage,
  bgcolor,
  children,
  maxWidth = 'sm',
  height = { xs: 'calc(50vh - 56px)', sm: 320 },
  disableGradient = false,
  ...props,
}: JumbotronProps) {
  const jumbotronBgColor = React.useCallback(({ palette }: Theme) => {
    if (bgcolor) return bgcolor;
    if (bgImage) return palette.grey[600];
    return palette.mode === 'light' ? 'primary.dark' : palette.grey[800];
  }, [bgcolor, bgImage]);
  const jumbotronBgImage = React.useCallback(({ palette }: Theme) => {
    if (bgImage) return undefined;
    if (disableGradient) return undefined;
    const isDark = palette.mode === 'dark';
    const { grey } = palette;
    const { light, dark } = palette.primary;
    return `radial-gradient(ellipse at top left, ${isDark ? dark : light} 0%, ${
      isDark ? grey[800] : dark
    } 100%)`;
  }, [bgImage, disableGradient]);

  return (
    <Box
      sx={{
        height,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: jumbotronBgColor,
        backgroundImage: jumbotronBgImage,
      }}
    >
      {bgImage ? (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: bgImage ? `url(${bgImage}) center / cover` : undefined,
            filter: ({ palette }) =>
              `blur(4px) brightness(${
                palette.mode === 'light' ? 0.7 : 0.5
              })`,
            transform: 'scale(1.2)',
          }}
        />
      ) : null}
      <Container
        sx={{
          height,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 1,
          color: ({ palette }) =>
            bgImage || palette.mode === 'dark'
              ? palette.common.white
              : palette.getContrastText(palette.primary.main),
          textShadow: bgImage ? '0 0 4px rgba(0, 0, 0, 0.6)' : undefined,
        }}
        maxWidth={maxWidth}
      >
        {children ?? (
          <Typography variant="h4" component="h2">
            {title}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
*/
Jumbotron.defaultProps = {
  title: undefined,
  bgImage: undefined,
  disableGradient: false,
  maxWidth: 'sm',
  containerProps: {
    maxWidth: undefined,
    sx: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: 1,
    },
  },
};

export default Jumbotron;
