import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PricingCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10],
  },
}));

const packages = [
  {
    name: 'Basic Package',
    price: '1,500',
    unit: 'per sq.ft',
    features: [
      'Standard Quality Materials',
      'Basic Floor Plans',
      'Standard Fixtures',
      '1 Year Warranty',
      'Basic Project Management'
    ],
    description: 'Perfect for budget-conscious residential projects'
  },
  {
    name: 'Premium Package',
    price: '2,000',
    unit: 'per sq.ft',
    features: [
      'Premium Quality Materials',
      'Customized Floor Plans',
      'Premium Fixtures & Fittings',
      '2 Year Warranty',
      '24/7 Project Management',
      'Interior Design Consultation'
    ],
    description: 'Ideal for luxury homes and high-end residential projects'
  },
  {
    name: 'Commercial Package',
    price: 'Custom',
    unit: 'Quote',
    features: [
      'Industrial Grade Materials',
      'Architectural Planning',
      'Commercial Grade Fixtures',
      '5 Year Warranty',
      'Dedicated Project Team',
      'Safety Compliance',
      'Post-construction Support'
    ],
    description: 'Tailored for commercial and industrial projects'
  }
];

const PricingPackages = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Our Packages
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Choose the perfect package for your construction needs
        </Typography>

        <Grid container spacing={4}>
          {packages.map((pkg, index) => (
            <Grid item xs={12} md={4} key={index}>
              <PricingCard>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h4" gutterBottom align="center">
                    {pkg.name}
                  </Typography>
                  <Typography variant="h3" align="center" color="primary" sx={{ mb: 2 }}>
                    ₹{pkg.price}
                    <Typography variant="subtitle1" component="span">
                      /{pkg.unit}
                    </Typography>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
                    {pkg.description}
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {pkg.features.map((feature, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="body2">{feature}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Button variant="contained" fullWidth>
                    Get Quote
                  </Button>
                </CardContent>
              </PricingCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingPackages;
