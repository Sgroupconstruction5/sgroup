/*  */import React, { useState, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import emailjs from '@emailjs/browser';

// Replace these with your EmailJS credentials
const EMAILJS_SERVICE_ID = "service_nnpp8ay";
const EMAILJS_TEMPLATE_ID = "template_mq2dvig";
const EMAILJS_PUBLIC_KEY = "w-xxarR2y6r3FbOP0";

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
    fontSize: '2rem',
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginRight: theme.spacing(1),
  border: `2px solid ${theme.palette.primary.main}`,
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
}));

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );

      setSnackbar({
        open: true,
        message: 'Message sent successfully! We will get back to you soon.',
        severity: 'success'
      });
      form.current.reset();
    } catch (error) {
      console.error('Email error:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again later.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.default',
          pt: 15,
          pb: 8,
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              sx={{ mb: 8 }}
            >
              Get in touch with us for any inquiries or project discussions
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <ContactForm elevation={3} component={motion.div} whileHover={{ y: -5 }}>
                <form ref={form} onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="user_name"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="user_email"
                        type="email"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone"
                        name="user_phone"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<SendIcon />}
                        fullWidth
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </ContactForm>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <Box sx={{ pl: { md: 4 } }}>
                <Typography variant="h4" gutterBottom>
                  Get in Touch
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  Feel free to reach out to us using any of the following contact methods:
                </Typography>

                <ContactInfoItem>
                  <LocationOnIcon />
                  <Box>
                    <Typography variant="h6">Address</Typography>
                    <Typography variant="body1" color="text.secondary">
                      Beerumguda, Ameenpur, Sangareddy, Telangana, 502032.
                    </Typography>
                  </Box>
                </ContactInfoItem>

                <ContactInfoItem>
                  <PhoneIcon />
                  <Box>
                    <Typography variant="h6">Phone</Typography>
                    <Typography variant="body1" color="text.secondary">
                    +91 9494807469
                    </Typography>
                  </Box>
                </ContactInfoItem>

                <ContactInfoItem>
                  <EmailIcon />
                  <Box>
                    <Typography variant="h6">Email</Typography>
                    <Typography variant="body1" color="text.secondary">
                      sgroupsconstruction@gmail.com
                    </Typography>
                  </Box>
                </ContactInfoItem>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Follow Us
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
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box sx={{ width: '100%', height: '400px', mt: 6 }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7371835294373!2d78.29610231487752!3d17.510506088009595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e5c7f282c71%3A0x789cc89d4b0bd8d7!2sBeeramguda%2C%20Telangana!5e0!3m2!1sen!2sin!4v1677697845981!5m2!1sen!2sin"
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
