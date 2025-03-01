import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme as useMuiTheme } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'fixed',
  '& .MuiToolbar-root': {
    minHeight: '100px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '90px',
    },
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '& .logo': {
    height: '65px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  },
  '& .logo-text': {
    height: '28px',
    objectFit: 'contain',
    marginLeft: theme.spacing(1),
  },
  '&:hover .logo': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    '& .logo': {
      height: '55px',
    },
    '& .logo-text': {
      height: '24px',
    },
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: theme.palette.text.primary,
  fontWeight: 500,
  '&:hover': {
    backgroundColor: 'rgba(25, 118, 210, 0.08)',
    color: theme.palette.primary.main,
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 240,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'rgba(25, 118, 210, 0.08)',
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box>
      <DrawerHeader>
        <LogoContainer>
          <RouterLink to="/">
            <img src="/images/logo1.jpg" alt="SGROUP Text" className="logo" />
            <img src="/images/logo2.jpg" alt="SGROUP Icon" className="logo-text" />
          </RouterLink>
        </LogoContainer>
      </DrawerHeader>
      <List>
        {menuItems.map((item) => (
          <StyledListItem 
            button 
            key={item.text} 
            component={RouterLink} 
            to={item.path}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item.text} />
          </StyledListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: '100%', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <LogoContainer sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
                  <RouterLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/logo1.jpg" alt="SGROUP Text" className="logo" />
                    <img src="/images/logo2.jpg" alt="SGROUP Icon" className="logo-text" />
                  </RouterLink>
                </LogoContainer>
              </RouterLink>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <NavButton
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                  >
                    {item.text}
                  </NavButton>
                ))}
              </Box>
            )}

            {/* Mobile Navigation */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                <LogoContainer sx={{ display: 'flex' }}>
                  <RouterLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/logo1.jpg" alt="SGROUP Text" className="logo" />
                    <img src="/images/logo2.jpg" alt="SGROUP Icon" className="logo-text" />
                  </RouterLink>
                </LogoContainer>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                    sx={{ 
                      color: '#1976d2'
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <StyledDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </StyledDrawer>

      {/* Toolbar placeholder to prevent content from going under navbar */}
      <Toolbar sx={{ height: '100px' }} />
    </>
  );
};

export default Navbar;
