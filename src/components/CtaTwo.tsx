import { Box } from '@mui/material';

const CtaTwo = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        paddingBottom: '5rem',
        margin: 'auto',
        width: { xs: '100%', sm: '70%', md: '50%' },
      }}
    >
      <img width={'100%'} src='/static/images/bazaar-server.webp' alt='' />
    </Box>
  );
};

export default CtaTwo;
