import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import BuildIcon from '@mui/icons-material/Build';
import LeafIcon from '@mui/icons-material/Spa';
import ShieldIcon from '@mui/icons-material/Shield';
import TimerIcon from '@mui/icons-material/Timer';
import { Link as RouterLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/hero-cranes.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  color: '#fff',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.5) 0%, rgba(16, 185, 129, 0.5) 100%)',
    zIndex: 1
  },
  '& .content': {
    position: 'relative',
    zIndex: 2,
    width: '100%'
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  borderRadius: '30px',
  backgroundColor: '#ffffff',
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: '#f5f5f5',
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  },
  transition: 'all 0.3s ease',
}));

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: '#ffffff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
  transition: 'all 0.3s ease',
  '& .MuiTypography-h3': {
    color: theme.palette.primary.main,
  },
}));

const stats = [
  {
    value: '20+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects across various sectors'
  },
  {
    value: '100%',
    label: 'Client Satisfaction',
    description: 'Consistently exceeding client expectations'
  },
  {
    value: '50+',
    label: 'Expert Team',
    description: 'Skilled professionals dedicated to excellence'
  },
  {
    value: '15+',
    label: 'Awards',
    description: 'Recognition for outstanding construction work'
  }
];

const achievements = [
  {
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    title: 'Advanced Technology',
    description: 'Using cutting-edge construction technology and methods'
  },
  {
    icon: <LeafIcon sx={{ fontSize: 40 }} />,
    title: 'Eco-Friendly',
    description: 'Committed to sustainable construction practices'
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 40 }} />,
    title: 'Safety First',
    description: 'Maintaining highest safety standards in the industry'
  },
  {
    icon: <TimerIcon sx={{ fontSize: 40 }} />,
    title: 'On-Time Delivery',
    description: 'Proven track record of timely project completion'
  }
];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Box>
      <HeroSection>
        <Container>
          <motion.div
            className="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h1" 
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '3.5rem', md: '5rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                background: 'linear-gradient(135deg, #fff 0%, #f0f0f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 2,
                letterSpacing: '0.02em'
              }}
            >
              S GROUP
            </Typography>
            <Typography 
              variant="h2" 
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                background: 'linear-gradient(135deg, #fff 0%, #f0f0f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 2
              }}
            >
              Building Tomorrow's World Today
            </Typography>
            <Typography 
              variant="h4" 
              paragraph
              sx={{
                mb: 3,
                maxWidth: '800px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                fontWeight: 500,
                color: '#ffffff',
                letterSpacing: '0.5px'
              }}
            >
              From Vision to Reality, We Build with Integrity
            </Typography>
            <Typography 
              variant="h5" 
              paragraph
              sx={{
                mb: 4,
                maxWidth: '600px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400
              }}
            >
              Excellence in Construction and Infrastructure Development
            </Typography>
            <StyledButton 
              variant="contained" 
              size="large"
              component={RouterLink}
              to="/contact"
            >
              Contact Us
            </StyledButton>
          </motion.div>
        </Container>
      </HeroSection>

      {/* Stats Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={3} key={index}>
              <StatCard>
                <Typography variant="h3" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="h6">{stat.label}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.description}
                </Typography>
              </StatCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Achievements Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            data-aos="fade-up"
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {achievement.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {achievement.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {achievement.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
