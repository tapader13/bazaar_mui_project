import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
const Navvar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{ width: 250, marginLeft: '1rem', marginTop: '.5rem' }}
      role='presentation'
      onClick={toggleDrawer(false)}
    >
      <List>
        {' '}
        <ListItem disablePadding>
          <Button
            color='primary'
            disableElevation
            disableRipple
            disableFocusRipple
            disableTouchRipple
            variant='text'
            sx={{
              '&:hover': {
                color: 'secondary.main',
              },
              marginInline: { sm: '4px', md: '10px' },
            }}
          >
            Features
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            color='primary'
            disableElevation
            disableRipple
            disableFocusRipple
            disableTouchRipple
            variant='text'
            sx={{
              '&:hover': {
                color: 'secondary.main',
              },

              marginInline: { sm: '4px', md: '10px' },
            }}
          >
            Demos
          </Button>
        </ListItem>
        <ListItem disablePadding>
          {' '}
          <Button
            color='primary'
            disableElevation
            disableRipple
            disableFocusRipple
            disableTouchRipple
            variant='text'
            sx={{
              '&:hover': {
                color: 'secondary.main',
              },

              marginInline: { sm: '4px', md: '10px' },
            }}
          >
            Demos
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            color='primary'
            disableElevation
            disableRipple
            disableFocusRipple
            disableTouchRipple
            variant='text'
            sx={{
              '&:hover': {
                color: 'secondary.main',
              },

              marginInline: { sm: '4px', md: '10px' },
            }}
          >
            StoryBook
          </Button>
        </ListItem>
        <ListItem disablePadding>
          {' '}
          <Button
            color='primary'
            disableElevation
            disableRipple
            disableFocusRipple
            disableTouchRipple
            variant='text'
            sx={{
              '&:hover': {
                color: 'secondary.main',
              },

              marginInline: { sm: '4px', md: '10px' },
            }}
          >
            Documentions
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <Button
            color='secondary'
            variant='outlined'
            sx={{
              sm: { whiteSpace: 'normal', wordBreak: 'break-word' },
            }}
          >
            Purchase Now
          </Button>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed' sx={{ boxShadow: 0, bgcolor: 'white' }}>
          <Toolbar>
            <Box
              sx={{
                flexGrow: { xs: 1 },
                // width: { sm: 'auto' },
              }}
            >
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
              >
                <img src='/static/images/logo2.svg' alt='' />
              </IconButton>
            </Box>

            <Button
              color='primary'
              disableElevation
              disableRipple
              disableFocusRipple
              disableTouchRipple
              variant='text'
              sx={{
                '&:hover': {
                  color: 'secondary.main',
                },
                marginInline: { sm: '4px', md: '10px' },
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Features
            </Button>
            <Button
              color='primary'
              disableElevation
              disableRipple
              disableFocusRipple
              disableTouchRipple
              variant='text'
              sx={{
                '&:hover': {
                  color: 'secondary.main',
                },
                display: { xs: 'none', sm: 'block' },
                marginInline: { sm: '4px', md: '10px' },
              }}
            >
              Demos
            </Button>
            <Button
              color='primary'
              disableElevation
              disableRipple
              disableFocusRipple
              disableTouchRipple
              variant='text'
              sx={{
                '&:hover': {
                  color: 'secondary.main',
                },
                display: { xs: 'none', sm: 'block' },
                marginInline: { sm: '4px', md: '10px' },
              }}
            >
              StoryBook
            </Button>
            <Button
              color='primary'
              disableElevation
              disableRipple
              disableFocusRipple
              disableTouchRipple
              variant='text'
              sx={{
                '&:hover': {
                  color: 'secondary.main',
                },
                display: { xs: 'none', sm: 'block' },
                marginInline: { sm: '4px', md: '10px' },
              }}
            >
              Documentions
            </Button>
            <Button
              color='inherit'
              variant='outlined'
              sx={{
                sm: { whiteSpace: 'normal', wordBreak: 'break-word' },
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Purchase Now
            </Button>
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Divider sx={{ paddingTop: '10px' }} />
      </Box>
    </>
  );
};

export default Navvar;
