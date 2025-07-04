import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, TextField, Button, Stack } from '@mui/material';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <Box sx={{ background: '#f8fafc', minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ height: { xs: 110, md: 130 } }} />
      {/* Hero Section */}
      <Box sx={{ minHeight: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', py: { xs: 6, md: 8 }, pt: { xs: 16, md: 20 }, background: 'linear-gradient(90deg, #e6f7fe 0%, #b2fefa 100%)', color: '#0a2239' }}>
        <Container maxWidth="md" sx={{ ml: { xs: 4, md: 10 }, textAlign: 'left' }}>
          <Typography variant="h2" fontWeight={800} gutterBottom sx={{ color: '#0072ce' }}>Contact Us</Typography>
          <Typography variant="h5" color="#222">
            Start Your Journey Towards Business Excellence Today.
          </Typography>
        </Container>
      </Box>
      {/* Contact Info & Form - Final Layout */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ mb: 2, color: '#222', fontSize: 15, fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>(*) Asterisk denotes mandatory fields</Box>
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left: Form Fields, Checkboxes, Button */}
          <Grid item xs={12} md={7}>
            <Box component="form" noValidate autoComplete="off" sx={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
              <Grid container spacing={3}>
                {/* Row 1: First/Last Name */}
                <Grid item xs={12} sm={6}><TextField fullWidth required label="First name" variant="standard" InputLabelProps={{ style: { fontSize: '1.08rem' } }} inputProps={{ style: { fontSize: '1.08rem', fontFamily: 'inherit' } }} /></Grid>
                <Grid item xs={12} sm={6}><TextField fullWidth required label="Last name" variant="standard" InputLabelProps={{ style: { fontSize: '1.08rem' } }} inputProps={{ style: { fontSize: '1.08rem', fontFamily: 'inherit' } }} /></Grid>
              </Grid>
              <Grid container spacing={3} sx={{ mt: 0 }}>
                {/* Row 2: Work Email/Phone */}
                <Grid item xs={12} sm={6}><TextField fullWidth required label="Work email" variant="standard" type="email" InputLabelProps={{ style: { fontSize: '1.08rem' } }} inputProps={{ style: { fontSize: '1.08rem', fontFamily: 'inherit' } }} /></Grid>
                <Grid item xs={12} sm={6}><TextField fullWidth label="Phone number (optional)" variant="standard" InputLabelProps={{ style: { fontSize: '1.08rem' } }} inputProps={{ style: { fontSize: '1.08rem', fontFamily: 'inherit' } }} /></Grid>
              </Grid>
              {/* Checkboxes */}
              <Box sx={{ mt: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <input type="checkbox" id="privacy" style={{ marginRight: 10, width: 18, height: 18 }} />
                  <label htmlFor="privacy" style={{ fontSize: '1.08rem', fontFamily: 'inherit' }}>I agree to the <a href="#" style={{ color: '#ff6600', textDecoration: 'underline' }}>privacy notice</a></label>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" id="subscribe" style={{ marginRight: 10, width: 18, height: 18 }} />
                  <label htmlFor="subscribe" style={{ fontSize: '1.08rem', fontFamily: 'inherit' }}>Subscribe me to AnITBridge's latest thought leadership, blogs and updates.</label>
                </Box>
              </Box>
              {/* Submit Button */}
              <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                <Button variant="contained" size="large" sx={{
                  background: '#0072ce',
                  color: '#fff',
                  borderRadius: '24px',
                  fontWeight: 600,
                  fontSize: '1.08rem',
                  px: 5,
                  boxShadow: 0,
                  fontFamily: 'inherit',
                  textTransform: 'none',
                  '&:hover': { background: '#0a2239' }
                }}>Submit</Button>
              </Box>
            </Box>
          </Grid>
          {/* Right: Message Box and Email Note */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: { xs: 0, md: -4 }, maxWidth: { xs: '100%', md: '480px' }, flexBasis: { md: '480px' } }}>
            <TextField fullWidth multiline rows={8} variant="outlined" placeholder="How can we help you?" sx={{ mb: 2, background: '#fafbfc', borderRadius: 3, fontSize: '1.13rem', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', width: { xs: '100%', md: '480px' } }} InputProps={{ style: { fontSize: '1.13rem', fontFamily: 'inherit' } }} InputLabelProps={{ style: { fontSize: '1.13rem', fontFamily: 'inherit' } }} />
            <Typography sx={{ mt: 1, color: '#222', fontSize: 15, fontFamily: 'inherit' }}>You can also email us directly at <a href="mailto:info@anitbridge.com" style={{ color: '#ff6600', textDecoration: 'underline' }}>info@anitbridge.com</a></Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 