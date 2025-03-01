import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import BuildIcon from '@mui/icons-material/Build';

const ServiceIcon = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const ServiceCard = styled(Paper)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const GetInTouchButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1, 3),
  borderRadius: '25px',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  },
  transition: 'all 0.3s ease',
}));

const services = [
  {
    title: 'Residential Construction',
    description: 'Complete home construction and renovation services tailored to your needs.',
    features: [
      'Custom home design and building',
      'Home renovations and remodeling',
      'Kitchen and bathroom upgrades',
      'Room additions and extensions',
      'Energy-efficient solutions'
    ],
    icon: <HomeIcon />
  },
  {
    title: 'Commercial Construction',
    description: 'Professional construction services for businesses and commercial properties.',
    features: [
      'Office building construction',
      'Retail space development',
      'Industrial facility construction',
      'Restaurant and hotel building',
      'Commercial renovations'
    ],
    icon: <BusinessIcon />
  },
  {
    title: 'Infrastructure Development',
    description: 'Large-scale infrastructure projects for public and private sectors.',
    features: [
      'Road and bridge construction',
      'Water and sewage systems',
      'Public facilities',
      'Transportation infrastructure',
      'Urban development projects'
    ],
    icon: <BuildIcon />
  },
  {
    title: 'Specialized Services',
    description: 'Expert services for specific construction needs.',
    features: [
      'Green building solutions',
      'Historic building restoration',
      'Seismic retrofitting',
      'Project management',
      'Construction consulting'
    ],
    icon: <ArchitectureIcon />
  }
];

const Services = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 6 }}
        >
          Our Services
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ServiceCard elevation={3}>
                <ServiceIcon>
                  {service.icon}
                </ServiceIcon>
                <Typography variant="h4" gutterBottom color="primary">
                  {service.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {service.description}
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                  {service.features.map((feature, idx) => (
                    <Typography
                      key={idx}
                      component="li"
                      variant="body1"
                      sx={{ mb: 1 }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Box>
                <GetInTouchButton
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to="/contact"
                  fullWidth
                >
                  Get in Touch
                </GetInTouchButton>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA Section */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Ready to Start Your Project?
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Contact us today to discuss your construction needs and receive a detailed quote.
          </Typography>
          <GetInTouchButton
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/contact"
            sx={{ px: 4, py: 1.5 }}
          >
            Get in Touch
          </GetInTouchButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
