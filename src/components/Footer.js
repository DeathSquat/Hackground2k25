import React, { useRef, useEffect, useState } from 'react';
//import Floatingbot from "./Chatboat/Floatingbot.jsx"
import {
  Box,
  Container,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DiscordIcon from '@mui/icons-material/Chat'; // Using chat icon as placeholder for Discord
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
  import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // At the top

const LogoText = styled(Typography)({
  fontFamily: '"Orbitron", sans-serif',
  fontWeight: 800,
  fontSize: '1.6rem',        // smaller size
  color: '#FFD700',          // gold/yellow color
  textShadow: `
    0 0 6px #FFD700,
    0 0 12px #FFA500,
    0 0 18px #FF8C00
  `,
  userSelect: 'none',
  letterSpacing: '0.08em',
});
const FooterWrapper = styled(Box)({
  background: '#0a0a0a',
  color: '#fff',
  position: 'relative',
  zIndex: 10,
  overflow: 'hidden',
  fontFamily: '"Orbitron", sans-serif',
});

const FooterTop = styled(Box)({
  padding: '8rem 0',
  minHeight: '300px', // or height: '400px' or more depending on content
  backgroundImage: 'url("/BGMI_images/pubg-2025-cb-1920x1080.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1,
  },
});


const FooterContainer = styled(Container)({
  display: 'grid',
  gap: '80px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
  position: 'relative',
  zIndex: 2,
});

const FooterTitle = styled(Typography)({
  fontSize: '1.2rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  marginBottom: '15px',
  color: '#FFA500',
  position: 'relative',
  paddingBottom: '10px',
  width: 'max-content',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: '3px',
    width: '50%',
    backgroundColor: '#FF4500',
  },
});

const FooterText = styled(Typography)({
  fontSize: '0.95rem',
  color: '#ccc',
  lineHeight: 1.6,
  marginBottom: '1rem',
});

const FooterLink = styled('a')({
  display: 'block',
  color: '#ddd',
  marginBottom: '8px',
  fontSize: '0.95rem',
  textDecoration: 'none',
  transition: 'all 0.3s',
  '&:hover': {
    color: '#FFA500',
    transform: 'translateX(4px)',
  },
});

const SocialIcon = styled(IconButton)({
  width: 40,
  height: 40,
  background: 'rgba(255,255,255,0.08)',
  backdropFilter: 'blur(6px)',
  marginRight: '10px',
  transition: 'all 0.3s',
  borderRadius: '8px',
  '&:hover': {
    background: '#FF4500',
    transform: 'translateY(-3px)',
  },
});

const DiscordButton = styled(Button)({
  backgroundColor: '#58f267ff',
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  borderRadius: '8px',
  padding: '12px 24px',
  boxShadow: '0 0 15px #58f2a2ff',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#47c45cff',
    boxShadow: '0 0 15px #47c453ff',
    transform: 'scale(1.05)',
  },
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const FooterBottom = styled(Box)({
  background: '#111',
  textAlign: 'center',
  padding: '1rem 0',
  borderTop: '2px solid #FF4500',
  color: '#888',
  fontSize: '0.9rem',
});

const MusicToggleButton = styled(IconButton)({
  position: 'fixed',
  bottom: 32,
  right: 32,
  zIndex: 2000,
  width: 64,
  height: 64,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #FFCC00 60%, #FFA500 100%)',
  boxShadow: '0 4px 24px #000a',
  color: '#222',
  transition: 'all 0.3s',
  border: '3px solid #fff',
  '&:hover': {
    background: 'linear-gradient(135deg, #FFA500 60%, #FFCC00 100%)',
    color: '#fff',
    transform: 'scale(1.07)',
  },
});
const ScrollToTopButton = styled(IconButton)({
  position: 'fixed',
  bottom: 112, // Above the music button
  right: 32,
  zIndex: 2000,
  width: 64,
  height: 64,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #ff7b00, #ffa500)',
  color: '#fff',
  boxShadow: '0 4px 24px #000a',
  transition: 'all 0.3s ease-in-out',
  border: '3px solid #fff',
  '&:hover': {
    background: 'linear-gradient(135deg, #ffa500, #ff7b00)',
    transform: 'scale(1.07)',
  },
});


function Footer() {
  const ref = useRef();
  const [musicOn, setMusicOn] = useState(false);
  //const [chatOpen, setChatOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (musicOn) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [musicOn]);

  return (
    <>
      {/* Music Toggle Button */}
      <MusicToggleButton
        aria-label={musicOn ? "Turn off music" : "Turn on music"}
        onClick={() => setMusicOn((prev) => !prev)}
      >
        {musicOn ? (
          <MusicNoteIcon fontSize="large" />
        ) : (
          <VolumeOffIcon fontSize="large" />
        )}
      </MusicToggleButton>

      {/* Chatbot Toggle Button 
     <Floatingbot className="animation-bounce"/>
      */}

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/victory-awaits-in-the-gaming-universe_astronaut-265184.mp3"
        loop
      />

      <ScrollToTopButton
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpwardIcon fontSize="large" />
      </ScrollToTopButton>

      <FooterWrapper>
        <FooterTop>
          <FooterContainer ref={ref}>
            {/* Brand + Social */}
            <Box id="footer">
              <LogoText>Hackgrounds India</LogoText>

              <FooterText>
                Our success in this battleground comes from code, passion, and a
                team forged in fire.
              </FooterText>
              <Box>
                <a
                  href="https://x.com/TechverseNexus?t=9hSjpYXeqMjfAxEqXN4tug&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon aria-label="X">
                    <XIcon />
                  </SocialIcon>
                </a>
                <a
                  href="https://www.instagram.com/techverse_nexus?igsh=cTU3N3FjYnJxZGt3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon aria-label="Instagram">
                    <InstagramIcon />
                  </SocialIcon>
                </a>
                <a
                  href="https://www.linkedin.com/company/techverse-nexus/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon aria-label="LinkedIn">
                    <LinkedInIcon />
                  </SocialIcon>
                </a>
              </Box>
            </Box>

            {/* Useful Links */}
            <Box>
              <FooterTitle>Useful Links</FooterTitle>
              <FooterLink href="#hero">Home</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#timeline">Timeline</FooterLink>
              <FooterLink href="#tracks">Tracks</FooterLink>
              <FooterLink href="#prizes">Rewards</FooterLink>
              <FooterLink href="#sponsors">Sponsors</FooterLink>
              <FooterLink href="#team">Team</FooterLink>
              <FooterLink href="#faqs">FAQs</FooterLink>
            </Box>

            {/* Contact Info */}
            <Box>
              <FooterTitle>Contact Us</FooterTitle>
              <FooterText>
                <strong>Location:</strong> MS OFFICE , Delhi NCR
              </FooterText>
              <FooterText>
                <strong>Email:</strong>{" "}
                <a
                  href="techversenexusofficial@gmail.com"
                  style={{ color: "#FFA500" }}
                >
                  techversenexusofficial@gmail.com
                </a>
              </FooterText>
              <FooterText>
                <strong>Phone:</strong> (+91) 9693856529 - Animesh
                <div>(+91) 6395207811 - Ujjwal</div>
              </FooterText>
            </Box>

            {/* Discord Join */}
            <Box>
              <FooterTitle>Join Our Whatsapp group</FooterTitle>
              <DiscordButton
                variant="contained"
                href="https://chat.whatsapp.com/CHEAvZxmpRM1ermtrIhLWT?mode=r_c"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DiscordIcon />}
              >
                Connect Now
              </DiscordButton>
            </Box>
          </FooterContainer>
        </FooterTop>

        <FooterBottom>
          <Typography>
            &copy; 2025 Hackgrounds India 2K25. All rights reserved. | Built
            with <span className="animate-pulse">💖</span> by{" "}
            <strong>Ujjwal & Nishchay</strong>
          </Typography>
        </FooterBottom>
      </FooterWrapper>
    </>
  );
}

export default Footer;
