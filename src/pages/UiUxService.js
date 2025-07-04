import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, List, ListItem, ListItemIcon, ListItemText, Button, Switch, FormControlLabel } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Navbar from '../components/Navbar';
import Lottie from 'lottie-react';
import uiuxAnimation from '../assets/uiux.json';
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

const heroGradient = {
  background: 'linear-gradient(90deg, #232526 0%, #414345 50%, #485563 100%)',
  color: '#fff',
};

const uiuxBenefits = [
  {
    icon: <DesignServicesIcon color="primary" fontSize="large" />, 
    title: 'Human-Centered Design',
    desc: 'We create intuitive, accessible, and delightful interfaces tailored to your users.'
  },
  {
    icon: <EmojiObjectsIcon color="primary" fontSize="large" />, 
    title: 'Creative Visuals',
    desc: 'Our team blends creativity with usability to deliver visually stunning digital products.'
  },
  {
    icon: <TouchAppIcon color="primary" fontSize="large" />, 
    title: 'Interactive Prototypes',
    desc: 'Experience your product before development with interactive wireframes and prototypes.'
  },
  {
    icon: <VerifiedUserIcon color="primary" fontSize="large" />, 
    title: 'Consistency & Trust',
    desc: 'We ensure design consistency and build trust across all your digital touchpoints.'
  },
];

const UiUxService = () => {
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
                UI/UX Design
              </Typography>
              <Typography variant="h5" color="#222" mb={3}>
                Crafting intuitive, engaging, and beautiful digital experiences that delight users and drive results.
              </Typography>
              <Button variant="contained" size="large" sx={{ background: '#fff', color: '#232526', borderRadius: 3, fontWeight: 700, mt: 2, '&:hover': { background: '#e3f2fd' } }} href="#uiux-benefits">
                Discover Our Process
              </Button>
            </Box>
            {/* Right: Lottie Animation */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: { xs: 'flex-start', md: 'center' }, alignItems: 'center', width: '100%', mt: { xs: 0, md: 6 } }}>
              <Box sx={{ width: '100%', maxWidth: 340 }}>
                <Lottie animationData={uiuxAnimation} loop={true} style={{ width: '100%', height: 'auto' }} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container justifyContent="center" sx={{ mt: { xs: 2, md: 6 }, mb: 8 }}>
          <Grid item xs={12}>
            <Card elevation={3} sx={{ p: { xs: 2, md: 6 }, borderRadius: 4, background: 'rgba(255,255,255,0.95)', maxWidth: '1200px', margin: '0 auto' }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Left: Content */}
                <Box sx={{ flex: 1, pr: { md: 6 }, width: { xs: '100%', md: '60%' } }}>
                  <Typography variant="h4" fontWeight={700} gutterBottom color="primary.main">
                    Why Invest in UI/UX Design?
                  </Typography>
                  <Typography variant="body1" color="text.secondary" mb={3}>
                    Exceptional UI/UX design is the cornerstone of digital success. Our team crafts intuitive, engaging, and visually stunning experiences that delight users and drive business results. From wireframes to high-fidelity prototypes, we ensure every interaction is meaningful and every journey seamless.
                  </Typography>
                  <List>
                    <ListItem alignItems="flex-start" sx={{ pl: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}><span role="img" aria-label="User">👤</span></ListItemIcon>
                      <ListItemText
                        primary={<Typography variant="subtitle1" fontWeight={600}>User-Centered Approach</Typography>}
                        secondary={<Typography variant="body2" color="text.secondary">We prioritize your users' needs, behaviors, and motivations at every stage of the design process.</Typography>}
                      />
                    </ListItem>
                    <ListItem alignItems="flex-start" sx={{ pl: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}><span role="img" aria-label="Palette">🎨</span></ListItemIcon>
                      <ListItemText
                        primary={<Typography variant="subtitle1" fontWeight={600}>Modern Visuals</Typography>}
                        secondary={<Typography variant="body2" color="text.secondary">Clean, modern, and accessible interfaces that reflect your brand and engage your audience.</Typography>}
                      />
                    </ListItem>
                    <ListItem alignItems="flex-start" sx={{ pl: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}><span role="img" aria-label="Rocket">🚀</span></ListItemIcon>
                      <ListItemText
                        primary={<Typography variant="subtitle1" fontWeight={600}>Boosted Conversions</Typography>}
                        secondary={<Typography variant="body2" color="text.secondary">Optimized flows and delightful interactions that turn visitors into loyal customers.</Typography>}
                      />
                    </ListItem>
                  </List>
                  <Button variant="contained" size="large" sx={{ mt: 3, borderRadius: 3 }} color="primary" href="/contact">
                    Start Your Project
                  </Button>
                </Box>
                {/* Right: Image */}
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '100%', md: '40%' }, mt: { xs: 4, md: 0 } }}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                    alt="UI/UX Design Desk"
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

export default UiUxService; 
