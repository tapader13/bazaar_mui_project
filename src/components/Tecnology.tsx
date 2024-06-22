import { Box, Grid, Paper, Typography } from '@mui/material';
import Footer from './Footer';

const Tecnology = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(/static/images/landing-bg-2.svg)`,
        backgroundSize: 'cover',
        paddingTop: '8rem',
        paddingBottom: '3rem',
        paddingInline: '24px',
      }}
    >
      <Typography
        variant='h5'
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          color: '#0F3460',
          paddingBottom: '4rem',
          textTransform: 'uppercase',
        }}
      >
        Technologies Used
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBlock: '3rem',
            }}
            variant='outlined'
            elevation={6}
          >
            <img
              src='/static/images/react.webp'
              alt=''
              style={{ height: '100px', width: '100px' }}
            />

            <Typography
              variant='h6'
              sx={{ color: '#0F3460', paddingBlock: '1rem' }}
            >
              Multi-Vendor Support
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper
            variant='outlined'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBlock: '3rem',
            }}
            elevation={6}
          >
            <img
              src='/static/images/next-js.webp'
              alt=''
              style={{ height: '100px', width: '100px' }}
            />

            <Typography
              variant='h6'
              sx={{ color: '#0F3460', paddingBlock: '1rem' }}
            >
              Multi-Vendor Support
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper
            variant='outlined'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBlock: '3rem',
            }}
            elevation={6}
          >
            <img
              src='/static/images/typescript.webp'
              alt=''
              style={{ height: '100px', width: '100px' }}
            />

            <Typography
              variant='h6'
              sx={{ color: '#0F3460', paddingBlock: '1rem' }}
            >
              Multi-Vendor Support
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper
            variant='outlined'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBlock: '3rem',
            }}
            elevation={6}
          >
            <img
              src='/static/images/mui.svg'
              alt=''
              style={{ height: '100px', width: '100px' }}
            />

            <Typography
              variant='h6'
              sx={{ color: '#0F3460', paddingBlock: '1rem' }}
            >
              Multi-Vendor Support
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Tecnology;
