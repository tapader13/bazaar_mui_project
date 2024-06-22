import { Box, IconButton, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ marginTop: '4rem' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center' }}>
          Developed with{' '}
          <img height={'20px'} width={'20px'} src='/src/images/asset 108.svg' />
          {'  '}& Care by UI Lib
        </Typography>
        <Typography>
          <IconButton sx={{ height: '50px', width: '50px' }}>
            <img src='/src/images/asset 109.svg' alt='' />
          </IconButton>{' '}
          <IconButton sx={{ height: '50px', width: '50px' }}>
            <img src='/src/images/asset 110.svg' alt='' />
          </IconButton>{' '}
          <IconButton sx={{ height: '50px', width: '50px' }}>
            <img src='/src/images/asset 111.svg' alt='' />
          </IconButton>{' '}
          <IconButton sx={{ height: '50px', width: '50px' }}>
            <img src='/src/images/asset 112.svg' alt='' />
          </IconButton>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
