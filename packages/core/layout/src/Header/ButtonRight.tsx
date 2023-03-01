import Box from '@mui/material/Box';
import ShareButtons from './ShareButtons';

type ButtonRightProps = {
  title?: string;
};

function ButtonRight({ title }: ButtonRightProps) {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <ShareButtons color="inherit" title={title} />
      </Box>
      <Box
        sx={{
          padding: 1.5,
          mr: -1.5,
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 24,
            mr: -1.5,
          }}
        />
      </Box>
    </>
  );
}

ButtonRight.defaultProps = {
  title: undefined,
};

export default ButtonRight;
