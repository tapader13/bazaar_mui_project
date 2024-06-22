import { Box, IconButton, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const Story = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: { xs: 'start', sm: 'center' },
        marginInline: '24px',
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            marginTop: '2rem',
            paddingBottom: '3rem',
          }}
        >
          <Box
            sx={{
              bgcolor: '#E1E1E1',
              padding: '2rem',
              borderRadius: '12px',
            }}
          >
            <img
              width={'100%'}
              src='/static/images/product-model.webp'
              alt=''
            />
          </Box>
          <Box>
            <Typography variant='h4' sx={{ fontWeight: 600 }}>
              Data structure with Typescript Data models
            </Typography>
            <Box sx={{ '& .MuiTypography-body2': { fontSize: '1.2rem' } }}>
              <Typography variant='body2'>
                {' '}
                <IconButton sx={{ color: 'green', marginRight: '6px' }}>
                  <DoneIcon />
                </IconButton>
                Product model
              </Typography>
              <Typography variant='body2'>
                {' '}
                <IconButton sx={{ color: 'green', marginRight: '6px' }}>
                  <DoneIcon />
                </IconButton>
                User model
              </Typography>
              <Typography variant='body2'>
                {' '}
                <IconButton sx={{ color: 'green', marginRight: '6px' }}>
                  <DoneIcon />
                </IconButton>
                Shop model
              </Typography>
              <Typography variant='body2'>
                {' '}
                <IconButton sx={{ color: 'green', marginRight: '6px' }}>
                  <DoneIcon />
                </IconButton>
                Address model
              </Typography>
              <Typography variant='body2'>
                {' '}
                <IconButton sx={{ color: 'green', marginRight: '6px' }}>
                  <DoneIcon />
                </IconButton>
                Order model
              </Typography>
              <Typography variant='body2'>
                {' '}
                <IconButton sx={{ color: 'green', marginRight: '6px' }}>
                  <DoneIcon />
                </IconButton>
                20+ more models
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            marginTop: '5rem',
            marginBottom: '5rem',
          }}
        >
          <Box>
            <Typography
              variant='h4'
              sx={{ fontWeight: 600, textAlign: { sm: 'center', lg: 'start' } }}
            >
              REST API endpoints
            </Typography>
            <Box sx={{ '& .MuiTypography-body2': { fontSize: '1.2rem' } }}>
              <Typography variant='body2'>
                {' '}
                Customize and use existing data structure to implement your
                server easily.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: '#E1E1E1',
              padding: '2rem',
              borderRadius: '12px',
            }}
          >
            <img
              width={'100%'}
              src='/static/images/rest-api-endpoint.webp'
              alt=''
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Story;
