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
            Lois On Canvas
          </Typography>
          <Typography variant='h5' align='center' color='text.secondary' paragraph>
            Lois Sander is the Founder and Artist at Lois On Canvas. With over 34 years of experience as an educator,
            including 15 years in supervisory roles, Lois has dedicated her career to working with children and parents.
            Her passion for virtual art has been a constant driving force throughout her journey in this field. Her
            journey as an educator inspired her to explore the world of art, leading to her transformation into an
            artist. Lois honed her artistic skills through classes and has since been expressing her creativity on 
            various canvases. Her work is a vibrant reflection of her love for life and her deep connection with 
            the elements of nature. While traditional canvas painting is her primary medium, Lois has expanded her
            artistic horizons to include painting on floral planter pots, a unique avenue that allows her to combine
            her artistic expression with her love for nature and plants. Lois On Canvas is proud to offer custom 
            paintings and to host painting events, both in-person and virtually. These events cater to a diverse
            audience, making them suitable for organizations and special occasions for individuals of all ages.
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
export default App;