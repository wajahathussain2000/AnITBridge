import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, List, ListItem, ListItemIcon, ListItemText, Button, Switch, FormControlLabel } from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Navbar from '../components/Navbar';
import Lottie from 'lottie-react';
import webdevAnimation from '../assets/webdev.json';
import './UiUxService.css';

const staticGradient = {
  background: 'linear-gradient(90deg, #232526 0%, #414345 50%, #485563 100%)',
  color: '#fff',
};
const animatedGradient = {
  background: 'linear-gradient(270deg, #232526, #414345, #485563, #232526)',
  backgroundSize: '600% 600%',
  animation: 'gradientMove 12s ease infinite',
  color: '#fff',
};
const GradientKeyframes = () => (
  <style>{`
    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>
);

const webAppBenefits = [
  {
    icon: <DevicesIcon color="primary" fontSize="large" />, 
    title: 'Cross-Platform Excellence',
    desc: 'Seamless experiences across web, iOS, and Android with a single codebase.'
  },
  {
    icon: <SecurityIcon color="primary" fontSize="large" />, 
    title: 'Secure by Design',
    desc: 'Built-in security best practices to protect your users and data.'
  },
  {
    icon: <SpeedIcon color="primary" fontSize="large" />, 
    title: 'Performance Focused',
    desc: 'Optimized for speed, scalability, and reliability from day one.'
  },
  {
    icon: <SupportAgentIcon color="primary" fontSize="large" />, 
    title: 'Ongoing Support',
    desc: 'Continuous updates and expert support to keep your apps running smoothly.'
  },
];

const WebAppService = () => {
  const [animated, setAnimated] = useState(true);

  return (
    <Box sx={{ background: '#f8fafc', minHeight: '100vh' }}>
      <GradientKeyframes />
      <Navbar />
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '45vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(90deg, #e6f7fe 0%, #b2fefa 100%)',
          color: '#0a2239',
          py: { xs: 8, md: 12 },
          pt: { xs: 16, md: 20 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', justifyContent: 'space-between', width: '100%' }}>
            {/* Left: Content */}
            <Box sx={{ flex: 1, pr: { md: 6 }, mb: { xs: 4, md: 0 }, position: 'relative' }}>
              <Typography variant="h2" fontWeight={800} gutterBottom>
                Web & App Development
              </Typography>
              <Typography variant="h5" color="#222" mb={3}>
                Modern, scalable, and secure digital solutions for your business. Empower your brand with custom web and mobile experiences.
              </Typography>
              <Button variant="contained" size="large" sx={{ background: '#fff', color: '#232526', borderRadius: 3, fontWeight: 700, mt: 2, '&:hover': { background: '#e3f2fd' } }} href="#webapp-benefits">
                Discover Our Approach
              </Button>
            </Box>
            {/* Right: Lottie Animation (to be added) */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' }, alignItems: 'center', width: '100%', mt: { xs: 0, md: 6 } }}>
              <Box sx={{ width: '100%', maxWidth: 340 }}>
                <Lottie animationData={webdevAnimation} loop={true} style={{ width: '100%', height: 'auto' }} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container justifyContent="center" sx={{ mt: { xs: 2, md: 6 }, mb: 8 }}>
          <Grid item xs={12}>
            <Card id="webapp-benefits" elevation={3} sx={{ p: { xs: 2, md: 6 }, borderRadius: 4, background: 'rgba(255,255,255,0.95)', maxWidth: '1200px', margin: '0 auto' }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1, pr: { md: 6 }, width: { xs: '100%', md: '60%' } }}>
                  <Typography variant="h4" fontWeight={700} gutterBottom color="primary.main">
                    Why Choose Our Web & App Solutions
                  </Typography>
                  <Typography variant="body1" color="text.secondary" mb={3}>
                    We build robust, user-centric applications that drive engagement and growth. Our agile process ensures your digital products are delivered on time, on budget, and with exceptional quality.
                  </Typography>
                  <List>
                    {webAppBenefits.map((benefit, idx) => (
                      <ListItem key={idx} alignItems="flex-start" sx={{ pl: 0 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>{benefit.icon}</ListItemIcon>
                        <ListItemText
                          primary={<Typography variant="subtitle1" fontWeight={600}>{benefit.title}</Typography>}
                          secondary={<Typography variant="body2" color="text.secondary">{benefit.desc}</Typography>}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Button variant="contained" size="large" sx={{ mt: 3, borderRadius: 3 }} color="primary" href="/contact">
                    Get Started
                  </Button>
                </Box>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '100%', md: '40%' }, mt: { xs: 4, md: 0 } }}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80"
                    alt="Modern data center for web and app development"
                    sx={{ width: '100%', maxWidth: 340, minWidth: 220, height: '80%', minHeight: 180, borderRadius: 3, boxShadow: 2, objectFit: 'cover', my: { xs: 2, md: 4 } }}
                  />
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
);
};

export default WebAppService; 