import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Navbar from '../components/Navbar';
import techAnimation from '../assets/tech-geometric-lottie.json';

const values = [
  { title: 'Innovation', desc: 'Constantly evolving and adapting to new technologies', icon: '💡' },
  { title: 'Excellence', desc: 'Delivering the highest quality in everything we do', icon: '⭐' },
  { title: 'Integrity', desc: 'Building trust through honest and ethical practices', icon: '🤝' },
  { title: 'Partnership', desc: 'Creating lasting relationships with our clients', icon: '🌉' },
];

const team = [
  { name: 'John Doe', role: 'CEO & Founder', img: '', initials: 'JD' },
  { name: 'Jane Smith', role: 'CTO', img: '', initials: 'JS' },
  { name: 'Mike Johnson', role: 'Head of Operations', img: '', initials: 'MJ' },
];

const aboutHeroImg = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80'; // Placeholder for a professional tech/AI workspace

const About = () => (
  <Box sx={{ background: '#f8fafc', minHeight: '100vh' }}>
      <Navbar />
    {/* Hero Section - Redesigned */}
    <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          {/* Left: Text Content */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: 'center', textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h2" fontWeight={800} color="#111" gutterBottom sx={{ fontSize: { xs: '2.2rem', md: '3rem' } }}>
              Meet Globant AI Pods
            </Typography>
            <Typography variant="h5" color="#222" mb={4} sx={{ fontWeight: 400, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
              The first-ever subscription model to access engineering, innovation, and creativity. Think: Agentic AI orchestrated by Globant experts, spinning up in seconds, getting projects done in half the time, and making AI savings tangible.
            </Typography>
            <Button variant="outlined" size="large" sx={{ borderRadius: 3, fontWeight: 700, px: 3, py: 1.5, fontSize: '1rem', borderWidth: 2 }}>
              Subscribe to the future
            </Button>
          </Grid>
          {/* Right: Image */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            {/* Glowing background effect */}
            <Box sx={{
              position: 'absolute',
              top: 40,
              left: 40,
              width: 340,
              height: 340,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 60% 40%, #7fffd4 0%, #e0f7fa 60%, transparent 100%)',
              filter: 'blur(32px)',
              zIndex: 1,
              display: { xs: 'none', md: 'block' }
            }} />
            {/* Main image */}
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
              alt="Modern business teamwork"
              sx={{ width: '100%', maxWidth: 320, minWidth: 220, borderRadius: 4, boxShadow: 3, objectFit: 'cover', zIndex: 2, position: 'relative' }}
            />
            {/* Floating card overlays */}
            <Box sx={{
              position: 'absolute',
              top: 30,
              right: 0,
              width: 180,
              background: '#222',
              color: '#fff',
              borderRadius: 2,
              boxShadow: 4,
              p: 2,
              zIndex: 3,
              display: { xs: 'none', md: 'block' }
            }}>
              <Typography fontWeight={700} fontSize={16} mb={0.5}>Transaction Monitor</Typography>
              <Typography fontSize={13} color="#b2dfdb">Fraud Detection</Typography>
            </Box>
            <Box sx={{
              position: 'absolute',
              bottom: -30,
              left: 0,
              width: 220,
              background: '#222',
              color: '#fff',
              borderRadius: 2,
              boxShadow: 4,
              p: 2,
              zIndex: 3,
              display: { xs: 'none', md: 'block' }
            }}>
              <Typography fontWeight={700} fontSize={16} mb={0.5}>Strategyst</Typography>
              <Typography fontSize={13} color="#b2dfdb">Trading Strategy</Typography>
              <Box sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                <Button size="small" variant="contained" sx={{ background: '#c6ff00', color: '#222', fontWeight: 700, borderRadius: 2, fontSize: 12, px: 2, py: 0.5, minWidth: 0, ml: 1, boxShadow: 0, '&:hover': { background: '#b2ff59' } }}>+ New Agent</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    {/* Innovation & Solutions Section */}
    <Box sx={{ py: { xs: 6, md: 10 }, background: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          {/* Left: Text Content */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: 'center', textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h3" fontWeight={800} color="#0a2239" gutterBottom sx={{ mb: 2 }}>
              Driving Innovation And Delivering Tailored Solutions
            </Typography>
            <Typography variant="h6" color="#333" sx={{ mb: 3, fontWeight: 400 }}>
              At AnITBridge, we go beyond traditional consulting. As your dedicated technology partner, we harness the power of innovation to craft bespoke solutions that accelerate your business growth. Our holistic approach ensures seamless integration, operational efficiency, and a future-ready strategy aligned with your unique vision.
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', pl: 0, mb: 0 }}>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box component="span" sx={{ color: 'success.main', fontSize: 28, mr: 1.5 }}>✔</Box>
                <Typography variant="body1" color="#222" fontWeight={500}>Custom-built solutions designed for your business challenges.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box component="span" sx={{ color: 'success.main', fontSize: 28, mr: 1.5 }}>✔</Box>
                <Typography variant="body1" color="#222" fontWeight={500}>Sustainable growth and operational excellence for a resilient future.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box component="span" sx={{ color: 'success.main', fontSize: 28, mr: 1.5 }}>✔</Box>
                <Typography variant="body1" color="#222" fontWeight={500}>Actionable insights and strategies powered by real-world expertise.</Typography>
              </Box>
            </Box>
          </Grid>
          {/* Right: Unsplash Image */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
              alt="Modern business teamwork"
              sx={{ width: '100%', maxWidth: 440, minWidth: 220, borderRadius: 4, boxShadow: 3, objectFit: 'cover' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
    {/* Story & Mission */}
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ borderRadius: 4, p: 2, height: '100%' }}>
            <CardContent>
              <Typography variant="h4" fontWeight={700} gutterBottom>Our Story</Typography>
              <Typography color="text.secondary">
                AnITBridge was founded with a vision to bridge the gap between businesses and technology. In today's digital age, technology is not just a tool but a crucial driver of business success. We help organizations unlock their full potential through innovative IT solutions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ borderRadius: 4, p: 2, height: '100%' }}>
            <CardContent>
              <Typography variant="h4" fontWeight={700} gutterBottom>Our Mission</Typography>
              <Typography color="text.secondary">
                To provide innovative and sustainable IT solutions that help businesses transform, grow, and succeed in the digital era. We are committed to delivering excellence through our expertise and dedication.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    {/* Values */}
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} align="center" gutterBottom>Our Values</Typography>
      <Grid container spacing={4} justifyContent="center">
        {values.map((v, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card elevation={2} sx={{ borderRadius: 4, p: 3, textAlign: 'center', height: '100%' }}>
              <Typography fontSize={48} mb={1}>{v.icon}</Typography>
              <Typography variant="h6" fontWeight={700} gutterBottom>{v.title}</Typography>
              <Typography color="text.secondary">{v.desc}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    {/* Team */}
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} align="center" gutterBottom>Our Leadership</Typography>
      <Grid container spacing={4} justifyContent="center">
        {team.map((member, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card elevation={2} sx={{ borderRadius: 4, p: 3, textAlign: 'center', height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 } }}>
              <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: '#0072ce', fontSize: 36 }}>{member.img ? <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', borderRadius: '50%' }} /> : member.initials}</Avatar>
              <Typography variant="h6" fontWeight={700}>{member.name}</Typography>
              <Typography color="text.secondary">{member.role}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default About; 