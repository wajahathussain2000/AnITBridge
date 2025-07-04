import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import Navbar from '../components/Navbar';

const services = [
  {
    title: 'Cloud Infrastructure & Solutions',
    desc: 'Scalable, secure cloud solutions for modern businesses.',
    img: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=600&q=80',
    to: '/services/cloud',
  },
  {
    title: 'Web & App Development',
    desc: 'Custom web and mobile applications to drive your digital presence.',
    img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600&q=80',
    to: '/services/webapp',
  },
  {
    title: 'IT Network & Support',
    desc: 'Reliable IT infrastructure and support for seamless operations.',
    img: 'https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&w=600&q=80',
    to: '/services/network',
  },
  {
    title: 'UI/UX Design',
    desc: 'Intuitive and engaging user experiences for your products.',
    img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=600&q=80',
    to: '/services/uiux',
  },
];

const Services = () => (
  <Box sx={{ background: '#f8fafc', minHeight: '100vh' }}>
    <Navbar />
    {/* Hero Section */}
    <Box sx={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: { xs: 8, md: 10 }, background: 'linear-gradient(90deg, #0072ce 0%, #0a2239 100%)', color: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" fontWeight={800} gutterBottom>Our Services</Typography>
        <Typography variant="h5" color="rgba(255,255,255,0.9)">
          Empowering your business with innovative IT solutions, cloud, networking, and digital transformation.
        </Typography>
      </Container>
    </Box>
    {/* Services Grid */}
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {services.map((service, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card elevation={3} sx={{ borderRadius: 4, p: 2, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 } }}>
              <img src={service.img} alt={service.title} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 12, marginBottom: 16 }} />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>{service.title}</Typography>
                <Typography color="text.secondary" mb={2}>{service.desc}</Typography>
                <Button variant="contained" href={service.to} sx={{ background: '#0072ce', borderRadius: 3, fontWeight: 700, mt: 2, '&:hover': { background: '#0a2239' } }}>Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Services; 