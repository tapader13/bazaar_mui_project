import { Box, Typography } from '@mui/material';

const Count = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant='h3'
        sx={{ fontWeight: 700, marginBottom: '1rem' }}
        color={'secondary'}
      >
        75+
      </Typography>
      <Typography
        variant='body2'
        sx={{ fontSize: '1.2rem' }}
        color={'secondary'}
      >
        Server side rendered{' '}
      </Typography>
      <Typography variant='h4' sx={{ fontWeight: 600, color: '#0F3460' }}>
        DEMOS & PAGES
      </Typography>
    </Box>
  );
};

export default Count;
