import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
const Hero = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant='h3'
          sx={{
            fontWeight: 500,
            marginBottom: '15px',
            '& span': { color: 'secondary.main' },
          }}
        >
          Build your online store with <br /> <span>Bazaar</span>
        </Typography>
        <Typography
          variant='body2'
          sx={{ fontSize: '18px', marginBottom: '15px' }}
        >
          SEO friendly Next.js Ecommerce Template. Helps you to build <br />
          <span>performant online store faster.</span>
        </Typography>
        <Typography sx={{ marginBottom: '15pxx' }}>
          <span>
            {' '}
            <IconButton sx={{ color: 'green', marginLeft: '6px' }}>
              <DoneIcon />
            </IconButton>
            SSR
          </span>{' '}
          <span>
            {' '}
            <IconButton sx={{ color: 'green', marginLeft: '6px' }}>
              <DoneIcon />
            </IconButton>
            Rest API
          </span>{' '}
          <span>
            {' '}
            <IconButton sx={{ color: 'green', marginLeft: '6px' }}>
              <DoneIcon />
            </IconButton>
            Multi vendor Support
          </span>
        </Typography>
        <Stack
          direction={'row'}
          sx={{
            justifyContent: 'center',
            gap: '20px',
            marginBlock: '1.5rem',
          }}
        >
          <Button
            sx={{
              textTransform: 'capitalize',
              paddingInline: '1.5rem',
              paddingBlock: '.5rem',
              fontSize: '1.1rem',
            }}
            variant='outlined'
            color='secondary'
          >
            What's Inside
          </Button>
          <Button
            sx={{
              textTransform: 'capitalize',
              paddingInline: '1.5rem',
              paddingBlock: '.5rem',
              fontSize: '1.1rem',
            }}
            disableElevation
            color='secondary'
            variant='contained'
          >
            View Demo
          </Button>
        </Stack>
        <img
          height={'150px'}
          width={'270px'}
          src='/static/images/headless-commerce.webp'
          alt='hore image not found'
        />{' '}
      </Box>
    </Box>
  );
};

export default Hero;
