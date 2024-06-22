import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

const Demo = () => {
  return (
    <Box
      sx={{ bgcolor: '#F6F9FC', paddingBlock: '8rem', paddingInline: '24px' }}
    >
      <Typography
        variant='h4'
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          color: '#0F3460',
          paddingBottom: '4rem',
        }}
      >
        What You Get?
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              display: 'flex',
              boxShadow: '0',
              background: 'transparent',
              flexDirection: { xs: 'column', sm: 'row' },
              marginBottom: '2rem',
            }}
          >
            {' '}
            <CardMedia
              component='img'
              sx={{
                borderRadius: '10px',
                width: { md: '100%', lg: '50%', sm: '60%' },
              }}
              image='/static/images/asset 3.png'
              alt='Live from space album cover'
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
              }}
            >
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography
                  variant='h5'
                  color={'#0F3460'}
                  sx={{ fontWeight: 500 }}
                >
                  Niche Demos
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='text.secondary'
                  sx={{ paddingBlock: '1rem' }}
                >
                  9 Niche shop demos for online store. Super store, Fashion,
                  Electronic, Grocery and etc.
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  sx={{
                    textTransform: 'capitalize',

                    fontSize: '1.1rem',
                  }}
                  size='small'
                  variant='outlined'
                  color='secondary'
                  href='#tab1'
                >
                  Browse Demos
                </Button>
              </CardActions>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              display: 'flex',
              boxShadow: '0',
              flexDirection: { xs: 'column', sm: 'row' },
              background: 'transparent',
              marginBottom: '2rem',
            }}
          >
            <CardMedia
              component='img'
              sx={{
                borderRadius: '10px',
                width: { md: '100%', lg: '50%', sm: '60%' },
              }}
              image='/static/images/asset 4.png'
              alt='Live from space album cover'
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
              }}
            >
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography
                  variant='h5'
                  color={'#0F3460'}
                  sx={{ fontWeight: 500 }}
                >
                  Shop Pages
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='text.secondary'
                  sx={{ paddingBlock: '1rem' }}
                >
                  Clean Shop inner pages. Vendor shop, Sale/discount pages,
                  checkout, cart and etc.
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  sx={{
                    textTransform: 'capitalize',

                    fontSize: '1.1rem',
                  }}
                  size='small'
                  variant='outlined'
                  color='secondary'
                  href='#tab3'
                >
                  Browse Pages
                </Button>
              </CardActions>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              boxShadow: '0',
              background: 'transparent',
              marginBottom: '2rem',
            }}
          >
            <CardMedia
              component='img'
              sx={{
                borderRadius: '10px',
                width: { md: '100%', lg: '50%', sm: '60%' },
              }}
              image='/static/images/asset 5.png'
              alt='Live from space album cover'
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
              }}
            >
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography
                  variant='h5'
                  color={'#0F3460'}
                  sx={{ fontWeight: 500 }}
                >
                  User Dashboard
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='text.secondary'
                  sx={{ paddingBlock: '1rem' }}
                >
                  Structured user dashboard for managing user account, orders,
                  address and etc.
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  sx={{
                    textTransform: 'capitalize',

                    fontSize: '1.1rem',
                  }}
                  size='small'
                  variant='outlined'
                  color='secondary'
                  href='#tab3'
                >
                  Browse User Dashboard
                </Button>
              </CardActions>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              display: 'flex',
              boxShadow: '0',
              background: 'transparent',
              flexDirection: { xs: 'column', sm: 'row' },
              marginBottom: '2rem',
            }}
          >
            <CardMedia
              component='img'
              sx={{
                borderRadius: '10px',
                width: { md: '100%', lg: '50%', sm: '60%' },
              }}
              image='/static/images/asset 6.png'
              alt='Live from space album cover'
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
              }}
            >
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography
                  variant='h5'
                  color={'#0F3460'}
                  sx={{ fontWeight: 500 }}
                >
                  Admin Dashboard
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='text.secondary'
                  sx={{ paddingBlock: '1rem' }}
                >
                  Structured user dashboard for managing user account, orders,
                  address and etc.
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  sx={{
                    textTransform: 'capitalize',

                    fontSize: '1.1rem',
                  }}
                  size='small'
                  variant='outlined'
                  color='secondary'
                  href='#tab3'
                >
                  Browse Admin Dashboard
                </Button>
              </CardActions>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Demo;
