import * as React from 'react';
import Box from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export type JumbotronProps = {
  title: string;
  maxWidth?: ContainerProps['maxWidth'];
  bgImage?: string;
};

function Jumbotron({ title, maxWidth, bgImage }: JumbotronProps) {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        height: 240,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        bgcolor:
          palette.mode === 'light' ? 'secondary.light' : palette.grey[700],
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
            filter: 'blur(4px) brightness(0.9)',
            transform: 'scale(1.1)',
          }}
        />
      ) : null}
      <Container
        sx={{
          height: 240,
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
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
      </Container>
    </Box>
  );
}

Jumbotron.defaultProps = {
  bgImage: undefined,
  maxWidth: undefined,
};

export default Jumbotron;
