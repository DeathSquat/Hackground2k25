import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, IconButton, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const SponsorsSection = styled(Box)({
  backgroundImage:
    "url('https://res.cloudinary.com/djer7pmxt/image/upload/v1753116437/pubg_mobile_2021_revenue_utxrur.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem 1rem",
  boxSizing: "border-box",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%)",
    zIndex: 1,
  },
});

const SectionTitle = styled(Typography)({
  color: '#FFD700',
  fontFamily: '"Oswald", sans-serif',
  marginBottom: '2rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '2.5rem',
  textAlign: 'center',
  zIndex: 2,
});

const YellowText = styled('span')({
  background: 'linear-gradient(90deg, #FFEA00, #FFD700)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  fontFamily: '"Oswald", sans-serif',
});

const SponsorCard = styled(Paper)({
  background: 'rgba(255, 255, 255, 0.06)',
  padding: '2rem',
  borderRadius: '16px',
  border: '1.5px solid #FFD700',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '340px',
  textAlign: 'center',
  boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)',
});

const flipVariants = {
  enter: (direction) => ({
    rotateY: direction > 0 ? -90 : 90,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  }),
};

function Sponsors() {
  const sponsors = [
    {
      name: "Unstop",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/blue/Unstop-Logo-Blue-Extra-Large.jpg",
      tier: "Diamond",
      description: "Platform Partner",
    },
    {
      name: "GitHub",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPk0CDiJ70gAStxkNBNzIRLJr6XI_zeiOAECxoPu67ObNCD0P5GwEQuP3kDJ7o8lp1rQc&usqp=CAU",
      tier: "Platinum",
      description: "Home for All Developers",
    },
    {
      name: "Redbull",
      logo: "https://media.istockphoto.com/id/537022544/photo/aluminium-can-of-red-bull-energy-drink-iced-background.jpg?s=612x612&w=0&k=20&c=3CZ7G16GJPeLmY29eCRKGKAyN2FVmuO9YzoMEVSKrVQ=",
      tier: "Gold",
      description: "Drinks Partner",
    },
    // {
    //   name: "Interview Buddy",
    //   logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJrquzHwOxN0bUKnchqkQIy7QhkvzUftsDb70tbF-TbzdwohwOLaZukMkKY6CgJacQ45M&usqp=CAU",
    //   tier: "Silver",
    //   description: "Ace Interviews with Confidence",
    // },
    {
      name: "Physicswallah",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA1ijYJKiY82YdiwN_8p-Ok7VnokZ7hmw4A6czeO_QWMrEa_aAocj0cwe5ExbO0UsLtXk&usqp=CAU",
      tier: "Bronze",
      description: "India’s Top Learning Platform",
    },
    {
      name: "Duality Ai",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5ZGJh7rm_rP_hLdeclCYXVB6QLycWADsyw&s",
      tier: "Ruby",
      description: "One of the top emerging Ai platform",
    },
  ];

  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDirection) => {
    setCurrent(([prev]) => [
      (prev + newDirection + sponsors.length) % sponsors.length,
      newDirection,
    ]);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SponsorsSection>
      <Container sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <SectionTitle variant="h2">
          Our <YellowText>Sponsors</YellowText>
        </SectionTitle>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            mt: 2,
            flexWrap: 'wrap',
          }}
        >
          <IconButton onClick={() => paginate(-1)} sx={{ color: '#FFD700' }}>
            <ArrowBackIos />
          </IconButton>

          <Box sx={{ width: '100%', maxWidth: 360, perspective: 1000, minHeight: 360 , position: "relative",marginRight:"2",
                      right:20,}}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={flipVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  width: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                }}
              >
                <SponsorCard elevation={4}>
                  <Box
                    sx={{
                      height: '180px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      p: 2,
                    
                      background: 'rgba(255,255,255,0.07)',
                      borderRadius: '8px',
                    }}
                  >
                    <img
                      src={sponsors[current].logo}
                      alt={sponsors[current].name}
                      style={{ maxHeight: '100%', maxWidth: '100%' }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#FFEA00',
                      fontFamily: '"Oswald", sans-serif',
                      mb: 1,
                      textTransform: 'uppercase',
                    }}
                  >
                    {sponsors[current].tier}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#fffde7',
                      fontSize: '1rem',
                      fontWeight: 500,
                      fontFamily: '"Oswald", sans-serif',
                    }}
                  >
                    {sponsors[current].description}
                  </Typography>
                </SponsorCard>
              </motion.div>
            </AnimatePresence>
          </Box>

          <IconButton onClick={() => paginate(1)} sx={{ color: '#FFD700' ,position:"relative",
            left:"6px",
          }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="outlined"
            sx={{
              color: '#FFD700',
              borderColor: '#FFD700',
              fontFamily: '"Oswald", sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              padding: '20px 24px',
              '&:hover': {
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                borderColor: '#FFEA00',
              },
            }}
            onClick={() => window.open('https://forms.gle/1EhftV3G6hz6kD338', '_blank')}
          >
            Join as a Sponsor
          </Button>
        </Box>
      </Container>
    </SponsorsSection>
  );
}

export default Sponsors;
