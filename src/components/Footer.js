import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A1A1A' : '#1976d2',
  color: '#fff',
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
}));

const FooterLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  marginRight: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    marginRight: theme.spacing(1),
  },
}));

const Footer = () => {
  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About SGROUP
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Leading the way in construction and infrastructure development. Building tomorrow's world with innovation and excellence.
            </Typography>
            <Box>
              <SocialIcon component="a" href="https://www.facebook.com/" target="_blank">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon component="a" href="https://twitter.com/" target="_blank">
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon component="a" href="https://www.linkedin.com/" target="_blank">
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon component="a" href="https://www.instagram.com/s__groups?igsh=MXN4OGs5Y29naDE4aQ==" target="_blank">
                <InstagramIcon />
              </SocialIcon>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
              <li>
                <FooterLink href="/">Home</FooterLink>
              </li>
              <li>
                <FooterLink href="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="/services">Services</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <ContactItem>
              <LocationOnIcon />
              <Typography variant="body2">
                Beerumguda, Ameenpur, Sangareddy, Telangana, 502032.
              </Typography>
            </ContactItem>
            <ContactItem>
              <PhoneIcon />
              <Typography variant="body2">
                +91 9494807469
              </Typography>
            </ContactItem>
            <ContactItem>
              <EmailIcon />
              <Typography variant="body2">
                 sgroupsconstruction@gmail.com
              </Typography>
            </ContactItem>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', mt: 4, pt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            {new Date().getFullYear()} SGROUP. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
            Designed And Developed by D.kalyan
          </Typography>

        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
