import React from 'react';
import { Box, Container, Typography, Grid, Button, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const PageSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

const CompanyCard = styled(motion.div)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: 8,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  cursor: 'pointer',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
    '& img': {
      transform: 'scale(1.05)',
    }
  }
}));

const CardMediaStyled = styled('img')({
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  display: 'block',
  transition: 'transform 0.3s ease',
});

const companies = [
  {
    name: 'Sgroup Infrastructure',
    description: 'Leading infrastructure development company specializing in construction of residential buildings, commercial complexes, and government projects. Committed to quality and timely delivery.',
    image: '/images/about 1.jpeg',
    specialties: ['Constructing Buildings', 'Commercial Projects', 'Government Contracts'],
  },
  {
    name: 'Sgroup Sports',
    description: 'Dedicated to promoting sports and fitness through state-of-the-art facilities. Building the future of sports infrastructure.',
    image: '/images/about 2.jpeg',
    specialties: ['Sports Facilities', 'Sports Infrastructure', 'Sports Management'],
  },
  {
    name: 'Suryodaya Farm Milk',
    description: 'Premium dairy business focused on delivering high-quality milk products. Committed to maintaining the highest standards of hygiene and quality in dairy production.',
    image: '/images/about 3.jpeg',
    specialties: ['Milk Production', 'Dairy Products', 'Quality Control'],
  },
  {
    name: 'Sgroup Real Estate',
    description: 'Expert real estate development division focusing on premium residential projects and commercial spaces. Creating value through strategic property investments.',
    image: '/images/about 4.jpg',
    specialties: ['Property Development', 'Real Estate Investment', 'Project Management'],
  },
];

const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <PageSection
        sx={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/about-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h5">
              Building Excellence Since 2020
            </Typography>
          </motion.div>
        </Container>
      </PageSection>

      {/* Mission & Vision */}
      <PageSection>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h4" gutterBottom color="primary">
                  Our Mission
                </Typography>
                <Typography variant="body1" paragraph>
                  To deliver exceptional construction and infrastructure solutions that transform communities and enhance lives, while maintaining the highest standards of quality, safety, and innovation.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h4" gutterBottom color="primary">
                  Our Vision
                </Typography>
                <Typography variant="body1" paragraph>
                  To be the global leader in sustainable construction and infrastructure development, setting new benchmarks for excellence and innovation in the industry.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </PageSection>

      {/* Companies Section */}
      <PageSection sx={{ backgroundColor: 'background.default' }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Our Companies
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Diverse portfolio of businesses delivering excellence across multiple sectors
          </Typography>

          <Grid container spacing={4}>
            {companies.map((company, index) => (
              <Grid item xs={12} md={6} key={index}>
                <CompanyCard>
                  <Box sx={{ mb: 3, overflow: 'hidden', borderRadius: 2, height: 300 }}>
                    <CardMediaStyled
                      src={company.image}
                      alt={company.name}
                    />
                  </Box>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      {company.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {company.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        Core Focus:
                      </Typography>
                      <Grid container spacing={1}>
                        {company.specialties.map((specialty, i) => (
                          <Grid item key={i}>
                            <Box
                              sx={{
                                bgcolor: 'primary.main',
                                color: 'white',
                                px: 2,
                                py: 0.5,
                                borderRadius: 2,
                              }}
                            >
                              {specialty}
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </CardContent>
                </CompanyCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </PageSection>

      {/* Statistics Section */}
      <PageSection sx={{ bgcolor: 'primary.main', color: 'white' }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {[
              { number: '5', label: 'Active Projects' },
              { number: '50+', label: 'Employees' },
              { number: '4', label: 'Specialized Companies' },
              { number: '3+', label: 'Years of Excellence' },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" gutterBottom>
                    {stat.number}
                  </Typography>
                  <Typography variant="h6">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </PageSection>
    </Box>
  );
};

export default About;
