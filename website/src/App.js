import logo from './logo.svg';
import './App.css';
import { 
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
} from '@mui/material';
import React from 'react';

const pages = ['About', 'Photo Gallery', 'Upcoming Events', 'Store'];

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
];

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href='/about'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href='/about'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
              >
              About
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href='/gallery'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Gallery
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href='/upcoming'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Upcoming
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href='/store'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Store
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Website Name
          </Typography>
          <Typography variant='h5' align='center' color='text.secondary' paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius mi eget urna bibendum rutrum. 
          Phasellus dictum aliquet nibh, at rhoncus ante cursus a. Donec a ipsum vel nibh ultricies mattis. Morbi 
          libero nulla, bibendum at sem ullamcorper, interdum tristique lacus. Pellentesque auctor condimentum lobortis. 
          Ut non pharetra tellus, sed pharetra augue. Sed velit urna, fringilla in molestie in, luctus nec ligula. 
          Proin sed elementum urna. Curabitur massa odio, ultrices at efficitur in, ultrices at augue. Phasellus interdum 
          ligula ut neque pharetra, nec tristique sem mattis. Curabitur felis magna, porttitor nec mauris in, placerat lacinia felis.
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
export default App;