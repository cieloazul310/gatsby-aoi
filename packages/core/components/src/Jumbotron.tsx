import * as React from 'react';
import Box, { type BoxProps } from '@mui/material/Box';
import Container, { type ContainerProps } from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';

export type JumbotronProps = Omit<
  BoxProps<React.ElementType<any>>,
  'maxWidth' | 'ref'
> & {
  title?: string;
  bgImage?: string;
  disableGradient?: boolean;
  containerProps?: ContainerProps;
  colorSchema?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  maxWidth?: ContainerProps['maxWidth'];
};

const Jumbotron = React.forwardRef<any, JumbotronProps>(
  (
    {
      title,
      bgImage,
      children,
      colorSchema = 'primary',
      bgcolor,
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
          alignItems: {
            xs: 'center',
            sm: 'start',
          },
          zIndex: 1,
          textShadow: bgImage ? '0 0 4px rgba(0, 0, 0, 0.6)' : undefined,
        },
      },
      ...props
    },
    ref
  ) => {
    const jumbotronBgColor = React.useCallback(
      ({ palette }: Theme) => {
        if (bgcolor) return bgcolor;
        if (bgImage) return palette.grey[600];
        return palette.mode === 'light'
          ? `${colorSchema}.dark`
          : palette.grey[800];
      },
      [bgImage, bgcolor]
    );
    const jumbotronBgImage = React.useCallback(
      ({ palette }: Theme) => {
        if (bgcolor) return undefined;
        if (bgImage) return undefined;
        if (disableGradient) return undefined;
        const isDark = palette.mode === 'dark';
        const { grey } = palette;
        const { light, dark } = palette[colorSchema];
        return `radial-gradient(ellipse at top left, ${
          isDark ? dark : light
        } 0%, ${isDark ? grey[800] : dark} 100%)`;
      },
      [bgImage, disableGradient, colorSchema]
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
        bgcolor={jumbotronBgColor}
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

Jumbotron.defaultProps = {
  maxWidth: 'sm',
  title: undefined,
  bgImage: undefined,
  disableGradient: false,
  containerProps: {
    maxWidth: undefined,
    sx: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: {
        xs: 'center',
        sm: 'start',
      },
      zIndex: 1,
    },
  },
  colorSchema: 'primary',
};

export default Jumbotron;
