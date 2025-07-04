import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import techAnimation from '../assets/hellorobot.json';

const bgBalls = [
  { size: 180, color: '#0072ce33', top: '10%', left: '8%' },
  { size: 120, color: '#ffb70333', top: '70%', left: '18%' },
  { size: 140, color: '#0a223933', top: '30%', left: '80%' },
  { size: 90, color: '#0072ce22', top: '75%', left: '70%' },
  { size: 60, color: '#ffb70322', top: '55%', left: '60%' },
];

const HeroSection = ({ flying = false, contactStyle = false, title = 'We Bridge IT Gaps', subtitle = 'Empowering your business with innovative IT solutions, cloud, networking, and digital transformation. Let us take your technology to the next level.' }) => {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [flyPos, setFlyPos] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [isHello, setIsHello] = useState(false);
  const [hasFlown, setHasFlown] = useState(false);
  const containerRef = useRef(null);

  // Get container size for random position calculation
  useEffect(() => {
    if (flying && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
      // Set initial random position only once
      setFlyPos({
        x: Math.random() * (rect.width - 400),
        y: Math.random() * (rect.height - 350),
      });
    }
  }, [flying]);

  // Parallax effect for background balls
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  // When animation completes, show Hello for 1.5s, then move again
  const handleAnimationComplete = () => {
    if (flying && !hasFlown) {
      setIsHello(true);
      setHasFlown(true);
      // Hello dikhane ke baad robot wahi ruk jaye, text chhupayenge nahi
    }
  };

  return (
    <Box
      sx={contactStyle ? {
        minHeight: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        py: { xs: 6, md: 8 },
        pt: { xs: 16, md: 20 },
        background: 'linear-gradient(90deg, #e6f7fe 0%, #b2fefa 100%)',
        color: '#0a2239',
      } : {
        background: 'linear-gradient(120deg, #e6f0fa 0%, #f8fafc 100%)',
        minHeight: { xs: '700px', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: '110px', md: '130px' },
      }}
      onMouseMove={contactStyle ? undefined : handleMouseMove}
      ref={containerRef}
    >
      {contactStyle ? (
        <>
          <Box sx={{ height: { xs: 110, md: 130 } }} />
          <Container maxWidth="md" sx={{ ml: { xs: 4, md: 10 }, textAlign: 'left' }}>
            <Typography variant="h2" fontWeight={800} gutterBottom sx={{ color: '#0072ce' }}>{title}</Typography>
            <Typography variant="h5" color="#222">{subtitle}</Typography>
          </Container>
        </>
      ) : (
        <>
          {/* 3D Parallax Background Balls */}
          {bgBalls.map((ball, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                top: ball.top,
                left: ball.left,
                width: ball.size,
                height: ball.size,
                borderRadius: '50%',
                background: ball.color,
                filter: 'blur(18px)',
                zIndex: 0,
                pointerEvents: 'none',
                x: (mouse.x - 0.5) * (i % 2 === 0 ? 40 : -40),
                y: (mouse.y - 0.5) * (i % 2 === 0 ? 40 : -40),
                transition: 'transform 0.2s',
              }}
              animate={{
                x: (mouse.x - 0.5) * (i % 2 === 0 ? 40 : -40),
                y: (mouse.y - 0.5) * (i % 2 === 0 ? 40 : -40),
              }}
            />
          ))}
          <Box
            sx={{
              width: '100%',
              maxWidth: '1400px',
              minHeight: 400,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              zIndex: 2,
              px: { xs: 2, md: 6 },
            }}
          >
            {/* Left: Text Content */}
            <Box
              sx={{
                flex: 1.2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                justifyContent: 'center',
                textAlign: { xs: 'center', md: 'left' },
                minWidth: 340,
                mt: { xs: 4, md: 10 },
                position: 'relative',
                zIndex: 2,
              }}
            >
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                style={{ width: '100%' }}
                >
                  <Typography variant="h2" component="h1" fontWeight={800} color="#0a2239" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="h5" color="#222" mb={4}>
                    {subtitle}
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background: '#0072ce',
                      borderRadius: '24px',
                      fontWeight: 700,
                      px: 5,
                      py: 1.5,
                      boxShadow: '0 4px 24px rgba(0,114,206,0.10)',
                      '&:hover': { background: '#0a2239' },
                    }}
                  >
                    Get Started
                  </Button>
                </motion.div>
            </Box>
            {/* Right: Empty for layout balance */}
            <Box sx={{ flex: 1, minWidth: 340, mt: { xs: 4, md: 0 } }} />
            {/* Robot Lottie: flying or static */}
            {flying && containerSize.width > 0 && containerSize.height > 0 ? (
                <motion.div
                animate={{ x: flyPos.x, y: flyPos.y }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                onAnimationComplete={handleAnimationComplete}
                style={{
                  width: 400,
                  height: 350,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: isHello ? 3 : 1,
                  pointerEvents: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                >
                <Lottie animationData={techAnimation} loop={false} style={{ width: 400, height: 350 }} />
                {isHello && (
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '100%',
                      top: '50%',
                      transform: 'translateY(-50%) translateX(-32px)',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: 28,
                      background: 'linear-gradient(90deg, #0072ce 0%, #00c6fb 100%)',
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      pointerEvents: 'none',
                      boxShadow: 2,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Hello!
                  </Box>
                )}
                </motion.div>
            ) : (
              <Box
                sx={{
                  width: 400,
                  height: 350,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  pointerEvents: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Lottie animationData={techAnimation} loop={false} style={{ width: 400, height: 350 }} />
              </Box>
            )}
          </Box>
        </>
      )}
    </Box>
);
};

export default HeroSection; 