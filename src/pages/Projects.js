import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import Navbar from '../components/Navbar';
import '../styles/Projects.css';
import { Link, useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProjectInfoSection from '../components/ProjectInfoSection';
import LogoSlider from '../components/LogoSlider';

const categories = [
  'ALL',
  'CYBERSECURITY',
  'BANKING',
  'PHARMACEUTICAL',
  'ARTIFICIAL INTELLIGENCE',
];

const projectData = [
  {
    id: 'azure-cybersecurity-audit',
    title: 'Azure CyberSecurity Audit',
    image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&w=400&q=80',
    category: 'CYBERSECURITY',
    info: 'Comprehensive security assessment for cloud infrastructure.'
  },
  {
    id: 'project-management-devops',
    title: 'Project Management & DevOps Engineer',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&w=400&q=80',
    category: 'BANKING',
    info: 'Streamlined project delivery and automation for banking.'
  },
  {
    id: 'enterprise-cybersecurity',
    title: 'Enterprise CyberSecurity',
    image: 'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&w=400&q=80',
    category: 'CYBERSECURITY',
    info: 'Robust protection for enterprise digital assets.'
  },
  {
    id: 'semantic-layer-modernization',
    title: 'Semantic Layer Modernization – Data Engineer',
    image: 'https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&w=400&q=80',
    category: 'PHARMACEUTICAL',
    info: 'Modernizing data pipelines for pharmaceutical analytics.'
  },
  {
    id: 'elastic-wazuh-siem',
    title: 'Expert Elastic & Wazuh SIEM Installation and Configuration',
    image: 'https://images.pexels.com/photos/11035396/pexels-photo-11035396.jpeg?auto=compress&w=400&q=80',
    category: 'CYBERSECURITY',
    info: 'Advanced threat detection and monitoring solutions.'
  },
  {
    id: 'rag-elasticsearch-gpt',
    title: 'Advanced RAG System with Elasticsearch, GPT, and LLM Integration',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=400&q=80',
    category: 'ARTIFICIAL INTELLIGENCE',
    info: 'AI-powered search and insights for business growth.'
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const navigate = useNavigate();

  return (
    <Box sx={{ background: '#f8fafc', minHeight: '100vh' }}>
      <Navbar />
      {/* Hero Section */}
      <Box sx={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: { xs: 8, md: 10 }, pt: { xs: 16, md: 20 }, background: 'linear-gradient(90deg, #e6f7fe 0%, #b2fefa 100%)', color: '#0a2239' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight={800} gutterBottom>Our Projects</Typography>
          <Typography variant="h5" color="#222">
            Where Innovation Meets IT Excellence
          </Typography>
        </Container>
      </Box>
      {/* Filter Bar */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              color={activeCategory === cat ? 'primary' : 'default'}
              onClick={() => setActiveCategory(cat)}
              sx={{ fontWeight: 700, fontSize: 16, px: 2, py: 1, borderRadius: 2, cursor: 'pointer' }}
            />
          ))}
        </Stack>
      </Container>
      {/* Projects Grid */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Grid container spacing={4} alignItems="stretch">
          {projectData
            .filter(p => activeCategory === 'ALL' || p.category === activeCategory)
            .map((project, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  elevation={4}
                  sx={{
                    borderRadius: 5,
                    height: 400,
                    width: 340,
                    minWidth: 340,
                    maxWidth: 340,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 24px 0 rgba(0,114,206,0.08)',
                    border: '2px solid #0072ce',
                    background: '#e6f7fe',
                    transition: 'transform 0.18s, box-shadow 0.18s',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.03)',
                      boxShadow: '0 8px 32px 0 rgba(0,114,206,0.18)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: 170,
                      objectFit: 'cover',
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 3 }}>
                    <Box>
                      <Typography variant="h6" fontWeight={800} gutterBottom sx={{ color: '#0a2239', fontSize: '1.18rem', minHeight: 48, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{project.title}</Typography>
                      <Typography color="text.secondary" mb={2} sx={{ fontSize: '1.04rem', minHeight: 44, maxHeight: 44, overflow: 'hidden', textOverflow: 'ellipsis', display: 'block', whiteSpace: 'nowrap' }}>{project.info}</Typography>
                    </Box>
                    <Button
                      variant="contained"
                      href={`/project/${project.id}`}
                      sx={{
                        background: 'linear-gradient(90deg, #0072ce 0%, #0a2239 100%)',
                        borderRadius: 3,
                        fontWeight: 700,
                        mt: 2,
                        py: 1.2,
                        fontSize: '1.05rem',
                        boxShadow: 'none',
                        textTransform: 'none',
                        '&:hover': { background: 'linear-gradient(90deg, #0a2239 0%, #0072ce 100%)' },
                      }}
                      fullWidth
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
      <LogoSlider />
    </Box>
  );
};

export default Projects;
export { projectData }; 