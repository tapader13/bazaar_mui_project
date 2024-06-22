import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, CardMedia, Grid, IconButton } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function SkillShow() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={value}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TabList
            onChange={handleChange}
            aria-label='lab API tabs example'
            sx={{
              '& .MuiTabs-indicator': { display: 'none' },
            }}
          >
            <Tab
              label='Demo'
              value='1'
              id='tab1'
              sx={{
                '&:hover': { color: 'secondary.main' },
                borderBottom: 'none',
              }}
              disableRipple
            />
            <Tab
              label='Pages'
              value='2'
              id='tab2'
              sx={{
                '&:hover': { color: 'secondary.main' },
                borderBottom: 'none',
              }}
              disableRipple
            />
            <Tab
              label='Dashboard'
              value='3'
              id='tab3'
              sx={{
                '&:hover': { color: 'secondary.main' },
                borderBottom: 'none',
              }}
              disableRipple
            />
          </TabList>
        </Box>
        <TabPanel id='tab1' value='1'>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 20.jpeg'
                    alt='Product Model'
                  />
                  <Typography
                    variant='body2'
                    sx={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      bgcolor: '#0F3460',
                      color: 'white',
                      padding: '.5rem',
                      borderRadius: '50%',
                      fontWeight: 600,
                    }}
                  >
                    New
                  </Typography>
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 21.jpeg'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 20.jpeg'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 23.jpeg'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 22.jpeg'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 21.jpeg'
                    alt='Product Model'
                  />
                  <Typography
                    variant='body2'
                    sx={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      bgcolor: '#0F3460',
                      color: 'white',
                      padding: '.5rem',
                      borderRadius: '50%',
                      fontWeight: 600,
                    }}
                  >
                    New
                  </Typography>
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value='2' id='tab2'>
          {' '}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 20.jpeg'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 35.png'
                    alt='Product Model'
                  />
                  <Typography
                    variant='body2'
                    sx={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      bgcolor: '#0F3460',
                      color: 'white',
                      padding: '.5rem',
                      borderRadius: '50%',
                      fontWeight: 600,
                    }}
                  >
                    New
                  </Typography>
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 34.jpeg'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 33.jpeg'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 32.jpeg'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 31.jpeg'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value='3' id='tab3'>
          {' '}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 30.jpeg'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 29.jpeg'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 28.jpeg'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 27.jpeg'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 26.jpeg'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card elevation={0} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 0.7,
                      borderRadius: '12px',
                    },
                    cursor: 'pointer',
                    '&:hover .icon': {
                      color: 'black',
                      bgcolor: 'white',
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      bgcolor: '#f5f4f4',
                      paddingTop: '2rem',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                      borderRadius: '10px',
                    }}
                    component='img'
                    height='394'
                    image='/src/images/asset 25.png'
                    alt='Product Model'
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(69, 64, 64, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      className='icon'
                      sx={{
                        opacity: 1,
                        border: '1px solid white',
                        bgcolor: 'white',
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      textAlign: 'center',
                      color: '#0F3460',
                      fontWeight: 600,
                    }}
                  >
                    Market (1)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
      <Box sx={{ textAlign: 'center' }}>
        {' '}
        <Button
          sx={{
            textTransform: 'capitalize',
            paddingInline: '1.3rem',
            paddingBlock: '.3rem',
            fontSize: '1rem',
          }}
          disableElevation
          disableRipple
          color='secondary'
          variant='contained'
        >
          Purchase Now
        </Button>
      </Box>
    </Box>
  );
}
