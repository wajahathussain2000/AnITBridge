import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, List, ListItem, ListItemIcon, ListItemText, Button, Switch, FormControlLabel } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import WifiIcon from '@mui/icons-material/Wifi';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Navbar from '../components/Navbar';
import Lottie from 'lottie-react';
import techGeometricLottie from '../assets/tech-geometric-lottie.json';
import networkLottie from '../assets/network-lottie.json';
import './UiUxService.css';

// --- Gradient Styles ---
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

const networkBenefits = [
  {
    icon: <WifiIcon color="primary" fontSize="large" />, 
    title: 'Next-Gen Connectivity',
    desc: 'Empower your business with ultra-fast, reliable, and scalable network solutions built for the future.'
  },
  {
    icon: <SecurityIcon color="primary" fontSize="large" />,
    title: 'Proactive Security',
    desc: 'Advanced threat detection and real-time monitoring to keep your data and operations safe.'
  },
  {
    icon: <SpeedIcon color="primary" fontSize="large" />,
    title: 'Performance Optimization',
    desc: 'Continuous tuning and analytics to maximize uptime and network efficiency.'
  },
  {
    icon: <SupportAgentIcon color="primary" fontSize="large" />,
    title: 'Expert Support 24/7',
    desc: 'Dedicated network specialists available around the clock for rapid troubleshooting and guidance.'
  },
];

const NetworkService = () => {
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
                IT Network & Support
              </Typography>
              <Typography variant="h5" color="#222" mb={3}>
                Seamless, secure, and scalable networking for the digital era. Stay connected, protected, and ahead of the curve.
              </Typography>
              <Button variant="contained" size="large" sx={{ background: '#fff', color: '#0f2027', borderRadius: 3, fontWeight: 700, mt: 2, '&:hover': { background: '#e3f2fd' } }} href="#network-benefits">
                Explore Our Solutions
              </Button>
            </Box>
            {/* Right: Lottie Animation */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' }, alignItems: 'center', width: '100%', mt: { xs: 0, md: 6 } }}>
              <Box sx={{ width: '100%', maxWidth: 340 }}>
                <Lottie animationData={networkLottie} loop={true} style={{ width: '100%', height: 'auto' }} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container justifyContent="center" sx={{ mt: { xs: 2, md: 6 }, mb: 8 }}>
          <Grid item xs={12}>
            <Card id="network-benefits" elevation={3} sx={{ p: { xs: 2, md: 6 }, borderRadius: 4, background: 'rgba(255,255,255,0.95)', maxWidth: '1200px', margin: '0 auto' }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1, pr: { md: 6 }, width: { xs: '100%', md: '60%' } }}>
                  <Typography variant="h4" fontWeight={700} gutterBottom color="primary.main">
                    Why Modern Businesses Choose Us
                  </Typography>
                  <Typography variant="body1" color="text.secondary" mb={3}>
                    Experience the next level of business connectivity. Our network solutions are engineered for resilience, speed, and security—empowering your team to collaborate and innovate without limits.
                  </Typography>
                  <List>
                    {networkBenefits.map((benefit, idx) => (
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
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                    alt="Network cables and servers"
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

export default NetworkService; 