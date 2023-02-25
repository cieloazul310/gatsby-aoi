import * as React from 'react';
import Box from '@mui/material/Box';
import Container, { type ContainerProps } from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme, alpha } from '@mui/material/styles';
import type { AliasesCSSProperties } from '@mui/system';

export type JumbotronProps = {
  title?: string;
  maxWidth?: ContainerProps['maxWidth'];
  height?: number;
  bgcolor?: AliasesCSSProperties['bgcolor'];
  bgImage?: string;
  disableGradient?: boolean;
  children?: React.ReactNode;
};

function Jumbotron({
  title,
  maxWidth,
  height,
  bgImage,
  bgcolor,
  children,
  disableGradient = false,
}: JumbotronProps) {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        height: height ?? 240,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: (theme) => {
          if (bgcolor) return bgcolor;
          if (bgImage) return undefined;
          return theme.palette.mode === 'light'
            ? 'secondary.light'
            : theme.palette.grey[800];
        },
        backgroundImage:
          !bgImage && !disableGradient
            ? `linear-gradient(135deg, ${alpha(
                palette.primary.main,
                0.25
              )}, rgba(255, 255, 255, 0.1))`
            : undefined,
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
            filter: (theme) =>
              `blur(4px) brightness(${
                theme.palette.mode === 'light' ? 0.7 : 0.5
              })`,
            transform: 'scale(1.2)',
          }}
        />
      ) : null}
      <Container
        sx={{
          height: height ?? 240,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 1,
          color:
            bgImage || palette.mode === 'dark'
              ? palette.common.white
              : palette.getContrastText(palette.secondary.light),
          textShadow: bgImage ? '0 0 4px rgba(0, 0, 0, 0.6)' : undefined,
        }}
        maxWidth={maxWidth ?? 'sm'}
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

Jumbotron.defaultProps = {
  title: undefined,
  bgcolor: undefined,
  bgImage: undefined,
  maxWidth: undefined,
  height: undefined,
  disableGradient: false,
  children: undefined,
};

export default Jumbotron;