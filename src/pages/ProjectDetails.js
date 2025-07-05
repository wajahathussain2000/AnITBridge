import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, Chip, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { CalendarToday, Business, TrendingUp, Security, Code, CheckCircle, Visibility, Phone, Email } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { projectData } from './Projects';
import Navbar from '../components/Navbar';
import '../styles/ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProject = projectData.find(p => p.id === id);
    setProject(foundProject);
    setLoading(false);
  }, [id]);

  // Enhanced project data with AI-generated content
  const enhancedProjectData = {
    'azure-cybersecurity-audit': {
      overview: "Comprehensive Azure cybersecurity audit and compliance framework implementation for enterprise cloud infrastructure. This project established a zero-trust security architecture with advanced threat detection and automated response capabilities.",
      objectives: [
        "Implement comprehensive security assessment framework",
        "Establish zero-trust architecture principles",
        "Achieve SOC 2 Type II compliance",
        "Reduce security incident response time by 80%"
      ],
      challenges: [
        "Complex multi-cloud environment with legacy systems",
        "Strict regulatory compliance requirements",
        "Need for minimal business disruption during implementation",
        "Integration with existing security tools and processes"
      ],
      solution: "Implemented a comprehensive Azure Security Center deployment with Microsoft Defender integration, automated compliance monitoring, and advanced threat detection using machine learning algorithms. Established security baselines and continuous monitoring protocols.",
      results: [
        "99.9% security score achieved",
        "80% reduction in incident response time",
        "100% SOC 2 Type II compliance",
        "Zero security breaches post-implementation"
      ],
      keyMetrics: [
        "Security posture improved by 95%",
        "Mean time to detection: <5 minutes",
        "False positive rate reduced to 2%",
        "Compliance audit score: 100%"
      ],
      businessImpact: [
        "Reduced security costs by $2.5M annually",
        "Improved customer trust and retention",
        "Enabled faster product development cycles",
        "Achieved competitive security advantage"
      ],
      technologies: [
        { name: "Azure Security Center", description: "Centralized security management" },
        { name: "Microsoft Defender", description: "Advanced threat protection" },
        { name: "Compliance Manager", description: "Automated compliance monitoring" },
        { name: "Azure Sentinel", description: "SIEM and SOAR capabilities" }
      ],
      timeline: "3 months",
      team: "5 security specialists, 2 cloud architects, 1 compliance expert",
      client: "Fortune 500 Financial Services Company"
    },
    'project-management-devops': {
      overview: "End-to-end DevOps transformation for financial services organization, implementing modern CI/CD pipelines, infrastructure as code, and automated deployment processes to accelerate software delivery and improve reliability.",
      objectives: [
        "Reduce deployment time by 80%",
        "Implement infrastructure as code",
        "Establish automated testing and deployment",
        "Improve system reliability and uptime"
      ],
      challenges: [
        "Legacy monolithic applications",
        "Manual deployment processes",
        "Limited automation and testing",
        "Complex regulatory requirements"
      ],
      solution: "Designed and implemented a comprehensive DevOps transformation including containerization with Docker, orchestration with Kubernetes, infrastructure automation with Terraform, and CI/CD pipelines with Azure DevOps.",
      results: [
        "80% faster deployment cycles",
        "99.9% system uptime achieved",
        "90% reduction in deployment errors",
        "50% improvement in developer productivity"
      ],
      keyMetrics: [
        "Deployment frequency: 50x per day",
        "Lead time for changes: <2 hours",
        "Mean time to recovery: <30 minutes",
        "Change failure rate: <1%"
      ],
      businessImpact: [
        "Accelerated time-to-market by 60%",
        "Reduced operational costs by $1.8M",
        "Improved customer satisfaction scores",
        "Enhanced team collaboration and morale"
      ],
      technologies: [
        { name: "Azure DevOps", description: "CI/CD pipeline management" },
        { name: "Docker", description: "Containerization platform" },
        { name: "Kubernetes", description: "Container orchestration" },
        { name: "Terraform", description: "Infrastructure as code" }
      ],
      timeline: "6 months",
      team: "4 DevOps engineers, 3 developers, 2 infrastructure specialists",
      client: "Leading Banking Institution"
    },
    'enterprise-cybersecurity': {
      overview: "Multi-layered enterprise cybersecurity framework implementation providing comprehensive protection for digital assets with advanced threat detection, incident response, and security automation capabilities.",
      objectives: [
        "Establish comprehensive security framework",
        "Implement advanced threat detection",
        "Create automated incident response",
        "Protect all enterprise digital assets"
      ],
      challenges: [
        "Diverse technology stack across organization",
        "Complex network architecture",
        "Need for real-time threat detection",
        "Integration with existing security tools"
      ],
      solution: "Deployed a comprehensive security framework including SIEM for centralized monitoring, EDR for endpoint protection, zero-trust network architecture, and advanced IAM solutions with multi-factor authentication.",
      results: [
        "Zero security breaches achieved",
        "95% threat detection rate",
        "60% reduction in false positives",
        "24/7 automated security monitoring"
      ],
      keyMetrics: [
        "Threat detection accuracy: 95%",
        "Incident response time: <10 minutes",
        "Security coverage: 100% of assets",
        "Compliance score: 98%"
      ],
      businessImpact: [
        "Protected $50M+ in digital assets",
        "Reduced security incidents by 90%",
        "Improved regulatory compliance status",
        "Enhanced brand reputation and trust"
      ],
      technologies: [
        { name: "SIEM", description: "Security information and event management" },
        { name: "EDR", description: "Endpoint detection and response" },
        { name: "Zero Trust", description: "Network security architecture" },
        { name: "IAM", description: "Identity and access management" }
      ],
      timeline: "4 months",
      team: "6 security engineers, 3 network specialists, 2 IAM experts",
      client: "Global Technology Corporation"
    },
    'semantic-layer-modernization': {
      overview: "Modern data pipeline architecture implementation enabling real-time analytics and insights for pharmaceutical research and development, with advanced data modeling and visualization capabilities.",
      objectives: [
        "Modernize data pipeline architecture",
        "Enable real-time analytics",
        "Improve data processing speed",
        "Enhance research insights capabilities"
      ],
      challenges: [
        "Legacy data warehouse systems",
        "Slow data processing times",
        "Limited real-time capabilities",
        "Complex data integration requirements"
      ],
      solution: "Implemented a modern data architecture using Apache Kafka for real-time streaming, Snowflake for cloud data warehousing, dbt for data transformation, and Tableau for advanced analytics and visualization.",
      results: [
        "60% faster data processing",
        "Real-time analytics capabilities",
        "90% improvement in data quality",
        "Enhanced research insights delivery"
      ],
      keyMetrics: [
        "Data processing speed: 10x improvement",
        "Query response time: <2 seconds",
        "Data accuracy: 99.5%",
        "Real-time analytics: 24/7 availability"
      ],
      businessImpact: [
        "Accelerated drug discovery by 40%",
        "Reduced research costs by $3.2M",
        "Improved decision-making accuracy",
        "Enhanced competitive advantage in R&D"
      ],
      technologies: [
        { name: "Apache Kafka", description: "Real-time data streaming" },
        { name: "Snowflake", description: "Cloud data warehouse" },
        { name: "dbt", description: "Data transformation tool" },
        { name: "Tableau", description: "Data visualization platform" }
      ],
      timeline: "5 months",
      team: "3 data engineers, 2 analysts, 1 visualization specialist",
      client: "Pharmaceutical Research Company"
    },
    'elastic-wazuh-siem': {
      overview: "Advanced SIEM deployment integrating Elasticsearch and Wazuh with machine learning-powered threat detection and automated response capabilities for comprehensive security monitoring and incident management.",
      objectives: [
        "Deploy advanced SIEM solution",
        "Implement machine learning detection",
        "Automate threat response",
        "Improve security monitoring capabilities"
      ],
      challenges: [
        "Complex log data integration",
        "High false positive rates",
        "Manual incident response processes",
        "Performance optimization requirements"
      ],
      solution: "Deployed Elasticsearch for log aggregation and search, Wazuh for SIEM capabilities, integrated machine learning algorithms for threat detection, and implemented automated response workflows.",
      results: [
        "95% threat detection rate",
        "70% reduction in false positives",
        "Automated incident response",
        "Real-time security monitoring"
      ],
      keyMetrics: [
        "Threat detection rate: 95%",
        "False positive reduction: 70%",
        "Incident response automation: 85%",
        "System performance: 99.9% uptime"
      ],
      businessImpact: [
        "Reduced security operational costs by 40%",
        "Improved patient data protection",
        "Enhanced compliance with healthcare regulations",
        "Strengthened security posture for audits"
      ],
      technologies: [
        { name: "Elasticsearch", description: "Log aggregation and search" },
        { name: "Wazuh", description: "SIEM and threat detection" },
        { name: "Machine Learning", description: "Advanced threat detection" },
        { name: "Automation", description: "Incident response workflows" }
      ],
      timeline: "3 months",
      team: "4 security engineers, 2 ML specialists, 1 automation expert",
      client: "Healthcare Technology Provider"
    },
    'rag-elasticsearch-gpt': {
      overview: "Advanced RAG (Retrieval-Augmented Generation) system integrating Elasticsearch, OpenAI GPT, and custom LLMs for intelligent document search, knowledge management, and AI-powered insights generation.",
      objectives: [
        "Implement intelligent search capabilities",
        "Integrate AI-powered insights",
        "Improve knowledge discovery",
        "Enhance document management"
      ],
      challenges: [
        "Complex document structures",
        "Integration of multiple AI models",
        "Performance optimization",
        "Accuracy improvement requirements"
      ],
      solution: "Built a comprehensive RAG system using Elasticsearch for document indexing and search, OpenAI GPT for natural language processing, LangChain for AI orchestration, and vector databases for semantic search capabilities.",
      results: [
        "90% search accuracy achieved",
        "80% faster knowledge discovery",
        "AI-powered insights generation",
        "Enhanced user experience"
      ],
      keyMetrics: [
        "Search accuracy: 90%",
        "Knowledge discovery speed: 80% faster",
        "AI response time: <3 seconds",
        "User satisfaction: 95%"
      ],
      businessImpact: [
        "Reduced legal research time by 70%",
        "Improved case preparation efficiency",
        "Enhanced client service quality",
        "Increased competitive advantage in legal tech"
      ],
      technologies: [
        { name: "Elasticsearch", description: "Document search and indexing" },
        { name: "OpenAI GPT", description: "Natural language processing" },
        { name: "LangChain", description: "AI orchestration framework" },
        { name: "Vector DB", description: "Semantic search capabilities" }
      ],
      timeline: "4 months",
      team: "3 AI engineers, 2 backend developers, 1 UX specialist",
      client: "Legal Services Firm"
    }
  };

  if (loading) {
    return (
      <div className="project-details-container">
        <Navbar />
        <div className="loading-section">
          <div className="loading-spinner"></div>
          <p>Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-details-container">
        <Navbar />
        <div className="not-found-section">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const enhancedData = enhancedProjectData[project.id];

  return (
    <div className="project-details-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="project-details-hero-section">
        <div className="project-details-hero-background"></div>
        <div className="project-details-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            
            <div className="project-hero-badge">{project.category}</div>
            <h1 className="project-hero-title">{project.title}</h1>
            <p className="project-hero-subtitle">{project.info}</p>
            
            <div className="project-hero-metrics">
              <div className="project-metric-item">
                <CalendarToday className="metric-icon" />
                <div>
                  <span className="metric-value">{enhancedData.timeline}</span>
                  <span className="metric-label">Timeline</span>
                </div>
              </div>
              <div className="project-metric-item">
                <Business className="metric-icon" />
                <div>
                  <span className="metric-value">{enhancedData.team}</span>
                  <span className="metric-label">Team Size</span>
                </div>
              </div>
              <div className="project-metric-item">
                <TrendingUp className="metric-icon" />
                <div>
                  <span className="metric-value">{project.impact}</span>
                  <span className="metric-label">Impact</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview-section">
        <div className="project-overview-container">
          <Grid container spacing={4}>
            <Grid item xs={12} lg={8}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                                 <div className="project-overview-content">
                   <h2 className="section-title">Project Overview</h2>
                   <p className="project-overview-text">{enhancedData.overview}</p>
                   
                   <div className="objectives-challenges-grid">
                     <div className="objectives-section">
                       <h3 className="subsection-title">Objectives</h3>
                       <List className="objectives-list">
                         {enhancedData.objectives.map((objective, index) => (
                           <ListItem key={index} className="objective-item">
                             <ListItemIcon>
                               <CheckCircle className="check-icon" />
                             </ListItemIcon>
                             <ListItemText primary={objective} />
                           </ListItem>
                         ))}
                       </List>
                     </div>
                     
                     <div className="challenges-section">
                       <h3 className="subsection-title">Challenges</h3>
                       <List className="challenges-list">
                         {enhancedData.challenges.map((challenge, index) => (
                           <ListItem key={index} className="challenge-item">
                             <ListItemIcon>
                               <Security className="security-icon" />
                             </ListItemIcon>
                             <ListItemText primary={challenge} />
                           </ListItem>
                         ))}
                       </List>
                     </div>
                   </div>
                 </div>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} lg={4}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="project-sidebar">
                  <Card className="project-info-card">
                    <CardContent>
                      <h3 className="card-title">Project Details</h3>
                      <div className="info-item">
                        <span className="info-label">Client:</span>
                        <span className="info-value">{enhancedData.client}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Timeline:</span>
                        <span className="info-value">{enhancedData.timeline}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Team Size:</span>
                        <span className="info-value">{enhancedData.team}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Category:</span>
                        <span className="info-value">{project.category}</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="technologies-card">
                    <CardContent>
                      <h3 className="card-title">Technologies Used</h3>
                      <div className="technologies-grid">
                        {enhancedData.technologies.map((tech, index) => (
                          <div key={index} className="technology-item">
                            <div className="technology-name">{tech.name}</div>
                            <div className="technology-description">{tech.description}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="solution-container">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="solution-card">
                  <CardContent>
                    <h2 className="section-title">Our Solution</h2>
                    <p className="solution-text">{enhancedData.solution}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </section>

      {/* Results & Metrics Section */}
      <section className="results-metrics-section">
        <div className="results-metrics-container">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="results-card">
                  <CardContent>
                    <h2 className="section-title">Results & Impact</h2>
                    <List className="results-list">
                      {enhancedData.results.map((result, index) => (
                        <ListItem key={index} className="result-item">
                          <ListItemIcon>
                            <TrendingUp className="trending-icon" />
                          </ListItemIcon>
                          <ListItemText primary={result} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="metrics-card">
                  <CardContent>
                    <h2 className="section-title">Key Metrics</h2>
                    <List className="metrics-list">
                      {enhancedData.keyMetrics.map((metric, index) => (
                        <ListItem key={index} className="metric-item">
                          <ListItemIcon>
                            <CheckCircle className="check-icon" />
                          </ListItemIcon>
                          <ListItemText primary={metric} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="business-impact-card">
                  <CardContent>
                    <h2 className="section-title">Business Impact</h2>
                    <List className="business-impact-list">
                      {enhancedData.businessImpact.map((impact, index) => (
                        <ListItem key={index} className="impact-item">
                          <ListItemIcon>
                            <Business className="business-icon" />
                          </ListItemIcon>
                          <ListItemText primary={impact} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="project-cta-section">
        <div className="project-cta-card">
          <div className="project-cta-background"></div>
          <div className="project-cta-content">
            <motion.h2 
              className="project-cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Start a Similar Project?
            </motion.h2>
            <motion.p 
              className="project-cta-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss how we can help you achieve similar results for your organization
            </motion.p>
            <motion.div 
              className="project-cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                className="project-cta-primary-btn"
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                component={motion.button}
                endIcon={<Phone />}
              >
                Start Your Project
              </Button>
              <Button 
                className="project-cta-secondary-btn"
                onClick={() => navigate('/projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                component={motion.button}
                endIcon={<Visibility />}
              >
                View More Projects
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails; 