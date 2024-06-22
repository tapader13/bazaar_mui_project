import { Box, Grid, Paper, Typography } from '@mui/material';

const Features = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(/static/images/landing-bg-2.svg)`,
        backgroundSize: 'cover',
        paddingBlock: '8rem',
        paddingInline: '24px',
      }}
    >
      <Typography
        variant='h4'
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          color: '#0F3460',
          paddingBottom: '4rem',
          textTransform: 'uppercase',
        }}
      >
        Powerful Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper
            variant='outlined'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBlock: '3rem',
            }}
            elevation={3}
          >
            <img
              src='/static/images/multivendor.svg'
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
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
              src='/static/images/optimization.svg'
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
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
              src='/static/images/multivendor.svg'
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
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
              src='/static/images/code.svg'
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
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
              src='/static/images/multivendor.svg'
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
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
              src='/static/images/admin-dashboard.svg'
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
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
              src='/static/images/multivendor.svg'
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
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
              src='/static/images/figma.svg'
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
    </Box>
  );
};

export default Features;
