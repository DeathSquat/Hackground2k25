import React, { useState } from "react";
import {
  Box,
  Card,
  Tooltip,
  Typography,
  Avatar,
  IconButton,
  Tabs,
  Tab,
  Grid,
  Container,
  Paper,
  Divider,
  Fade,
  Grow,
  ThemeProvider,
  createTheme,
  styled,
  keyframes,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  EmojiEvents,
  Star,
  SportsMma,
} from "@mui/icons-material";

import { Instagram } from "@mui/icons-material";

const gameTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ff8800", dark: "#cc4400", light: "#ffaa33" },
    secondary: { main: "#ffffff", dark: "#e0e0e0", light: "#ffffff" },
    background: { default: "#0a0a0a", paper: "#1a1a1a" },
    text: { primary: "#ffffff", secondary: "#f0f0f0" },
  },
  typography: {
    fontFamily: '"Oswald", "Roboto", sans-serif',
    h1: { fontWeight: 700, letterSpacing: "0.1em" },
    h6: { fontWeight: 600, letterSpacing: "0.05em" },
  },
});

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
`;

const glitch = keyframes`
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-2px); }
  40% { transform: translateX(2px); }
  60% { transform: translateX(-1px); }
  80% { transform: translateX(1px); }
`;

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  backgroundImage: `
    linear-gradient(
      rgba(10,10,10,0.9),
      rgba(10,10,10,0.95)
    ),
    url("https://res.cloudinary.com/djer7pmxt/image/upload/v1753116547/erfltvvd89dzmbmysvcn_fuissc.webp")
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed", // 🔥 This creates the parallax scroll effect
  position: "relative",
  zIndex: 0,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(circle at 25% 25%, #00ff88 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, #ff6b35 0%, transparent 50%)
    `,
    opacity: 0.03,
    pointerEvents: "none",
    zIndex: 1,
  },
}));

const GlassCard = styled(Card)({
  minWidth: "175px",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "20px",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    background:
      "linear-gradient(135deg, rgba(255,85,0,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)",
  },
  "&:hover": {
    boxShadow: "0 25px 50px rgba(255,85,0,0.2)",
    border: "1px solid rgba(255,85,0,0.3)",
  },

  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
});

const ClippedBox = styled(Box)({
  background: "linear-gradient(135deg, #fff200, #ffffff)",
  clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 100%, 15px 100%)",
  padding: "4px 16px",
  fontSize: "0.75rem",
  fontWeight: 700,
  color: "#000",
  letterSpacing: "0.1em",
});

const HackathonSections = () => {
  const [activeTab, setActiveTab] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Maaz Anwar",
      role: "Lead Organiser",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114618/maaz_anwar_k7q6jn.webp",
      linkedin: "https://www.linkedin.com/in/maazanwar414/",
    },
   
    {
      id: 3,
      name: "Animesh Singh",
      role: "Lead Organiser",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114620/animesh_singh_e2vzaf.webp",
      linkedin: "https://www.linkedin.com/in/animeshsingh9693/",
    },
    {
      id: 4,
      name: "Anmol Agarwal",
      role: "Lead Organiser",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114620/anmol_agarwal_fajtp5.webp",
      linkedin: "https://www.linkedin.com/in/anmol-agrawal25/",
    },
    {
      id: 5,
      name: "Ujjwal Sharma",
      role: "Technical Head",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114615/ujjwal_sharma_grjhwj.webp",
      linkedin: "https://www.linkedin.com/in/ujjwal-sharma-3a1395279/",
    },
    {
      id: 6,
      name: "Umesh Kataria",
      role: "Sponsership head",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114617/umesh_kataria_u4gzjs.webp",
      linkedin: "https://www.linkedin.com/in/umeshxkataria/",
    },
    {
      id: 7,
      name: "Harsh Gupta",
      role: "Design Head",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114616/harsh_gupta_teckfx.webp",
      linkedin: "https://www.linkedin.com/in/harsh-gupta-7b3b472a2/",
    },
    {
      id: 8,
      name: "Rahul",
      role: "PR & Outreach Head",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114616/rahul._dmfox4.webp",
      linkedin: "https://www.linkedin.com/in/rahulgoyal83789/",
    },
    {
      id: 9,
      name: "Nishchay Chaurasia",
      role: "Tech Team",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114616/nishchay_chaurasia_wzcwqs.webp",
      linkedin: "https://www.linkedin.com/in/nishchaync-83b8152b0/",
    },
    {
      id: 10,
      name: "Aman",
      role: "Tech Team",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114619/aman_bobal_gvnjd6.webp",
      linkedin: "https://www.linkedin.com/in/aman-bobal/",
    },
    {
      id: 11,
      name: "Keshav",
      role: "Pr & outreach team",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114617/keshav_mehta_n2wuzh.webp",
      linkedin: "https://www.linkedin.com/in/keshav-mehta-b9a838305/",
    },
    {
      id: 12,
      name: "Jigisha Baliyann",
      role: "Pr & outreach team",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114617/jigisha_baliyan_gzfipe.webp",
      linkedin: "https://www.linkedin.com/in/jigisha-baliyann/",
    },
    {
      id: 13,
      name: "Rhythm Arora",
      role: "Social Media Team",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114625/rhythm_arora_acqkyz.webp",
      linkedin: "https://www.linkedin.com/in/rhythmisloading/",
    },
    {
      id: 14,
      name: "Nitya",
      role: "Social Media Team",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114618/nitya_goasain_hgjrvw.webp",
      linkedin:
        "https://www.linkedin.com/in/nitya-gosain-42037328b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 15,
      name: "Ankit",
      role: "Video Editor",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114619/ankit_kumar_lfbluu.webp",
      linkedin: "https://www.linkedin.com/in/ankit-kumar5277/",
    },
    {
      id: 16,
      name: "Apoorv Mehrotra",
      role: "Sponsorship Team",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114620/apoorv_mehrotra_rhnhkr.webp",
      linkedin: "https://www.linkedin.com/in/its-apoorv-/",
    },
    {
      id: 17,
      name: "Akash",
      role: "Design Team",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114616/akash_gupta_mcvzyg.webp",
      linkedin: "https://www.linkedin.com/in/akash-gupta-718363296/",
    },
    {
      id: 18,
      name: "Himanshi Aggarwal",
      role: "Sponsorship Team",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114614/himanshi_agarwal_yakila.webp",
      linkedin: "https://www.linkedin.com/in/himanshi-aggarwal-5a5553321/",
    },
    {
      id: 19,
      name: "Saad Salim",
      role: "Sponsorship Team",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753114617/saad_ihbome.webp",
      linkedin: "https://www.linkedin.com/in/saad-salim-24b251228/",
    },
    {
      id: 20,
      name: "Veena S. Maharana",
      role: "Design Team",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1753437869/veenasreemaharana-cropped_sg2mgb.webp",
      linkedin: "https://www.linkedin.com/in/veenasreemaharana/",
    },
    {
      id: 21,
      name: "Advay Anand",
      role: "Sponsorship Team",
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQENz73g8awlsw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726334792528?e=2147483647&v=beta&t=2N6RZVM5NFM-bB3aJOepOUYyMERrBQAiCv-TshYfXoo",
      linkedin: "https://www.linkedin.com/in/advay-anand-a89024277/",
    },
  ];

  const mentors = [
    {
      id: 1,
      name: "Tushika Rawat",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1754318034/tushika_rawat_itbcuk.jpg",
      linkedin: "https://www.linkedin.com/in/tushika-rawat/",
    },
    {
      id: 2,
      name: "Tanisha Bansal",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1754318032/Tanisha_Bansal_mzcyw3.jpg",
      linkedin: "https://www.linkedin.com/in/tanishabansal110902?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    // {
    //   id: 4,
    //   name: "Yash Chatrath",
    //   role: "Mentor",
    //   avatar:
    //     "https://res.cloudinary.com/djer7pmxt/image/upload/v1754318033/Yash_Chatrath_hkieoz.jpg",
    //   linkedin: "http://linkedin.com/in/chatrath-yash",
    // },
    {
      id: 5,
      name: "Kamal Kashyap",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1754318031/Kamal_Kashyap_whjfnt.jpg",
      linkedin: "https://in.linkedin.com/in/kamal-kashyap-393a6b1b7",
    },
    {
      id: 6,
      name: "Sachin Jha",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1754318031/Sachin_Jha_mvuram.jpg",
      linkedin: "https://www.linkedin.com/in/sachin-jha-",
    },
    {
      id: 7,
      name: "Krish Khattar",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1754318031/Krish_Khattar_ip8um0.jpg",
      linkedin: "https://www.linkedin.com/in/krishkhattar",
    },
    {
      id: 8,
      name: "Nandini Singh",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1754318031/Nandini_Singh_qsdyz6.jpg",
      linkedin: "https://www.linkedin.com/in/nandinisingh05",
    },
    {
      id: 9,
      name: "Avanish Kumar Singh",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1754318031/Avanish_Kumar_Singh_ylclyx.jpg",
      linkedin: "https://www.linkedin.com/in/avanishh/",
    },
    {
      id: 10,
      name: "Ekansh",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1754318757/Ekansh_ydqcvc.jpg",
      linkedin: "https://www.linkedin.com/in/ekansh-mittal",
    },
    {
      id: 11,
      name: "Arushi Garg",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1755927420/072_Arushi_Garg_s9do40.jpg",
      linkedin: "https://www.linkedin.com/in/arushi-garg105/",
    },
    {
      id: 12,
      name: "Akash Tripathee",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/dembediei/image/upload/v1756480018/Akash_Tripathee_qfrj9w.png",
      linkedin: "https://www.linkedin.com/in/akaash-t-bb9211212/",
    },
    {
      id: 13,
      name: "Sairam Kaushik",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1755927822/IMG_2548_ynfmef.jpg",
      linkedin: "https://www.linkedin.com/in/sairamkaushik/",
    },
    {
      id: 14,
      name: "Harshvardhan",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/dembediei/image/upload/v1756480018/Harshvardhan_g9ydz7.png",
      linkedin: "https://www.linkedin.com/in/ekansh-mittal",
    },
    {
      id: 15,
      name: "Dhruv Verma",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/dembediei/image/upload/v1756480018/Dhruv_Verma_grlzz4.png",
      linkedin: "https://www.linkedin.com/in/dhruvv/",
    },
    {
      id: 16,
      name: "Ishan Kumar",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/dembediei/image/upload/v1756480018/Ishan_Kumar_yfr37j.png",
      linkedin: "https://www.linkedin.com/in/ekansh-mittal",
    },
    {
      id: 17,
      name: "Kavya Goel",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/dembediei/image/upload/v1756480018/Kavya_Goel_wzjwrc.png",
      linkedin: "https://www.linkedin.com/in/ekansh-mittal",
    },
    {
      id: 18,
      name: "Kumbhaj Shukla",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/dembediei/image/upload/v1756480018/Kumbhaj_Shukla_burzfz.png",
      linkedin: "https://www.linkedin.com/in/ekansh-mittal",
    },
    {
      id: 19,
      name: "Sajal",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/dembediei/image/upload/v1756480019/Sajal_irodop.png",
      linkedin: "https://www.linkedin.com/in/ekansh-mittal",
    },
    {
      id: 20,
      name: "Moksha Kohli",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/dembediei/image/upload/v1756480019/Moksha_mx2ai0.png",
      linkedin: "https://www.linkedin.com/in/ekansh-mittal",
    },
    {
      id: 21,
      name: "Sudhanshu Kumar Jha",
      role: "Mentor",
      avatar:
        "https://res.cloudinary.com/dembediei/image/upload/v1756480019/Sudhanshu_sho1oi.png",
      linkedin: "https://www.linkedin.com/in/ekansh-mittal",
    },

  ];

  const judges = [
    {
      id: 1,
      name: "Rajeev Anand",
      role: "Founder (Web3_Connects)",
      avatar:
        "https://res.cloudinary.com/dembediei/image/upload/v1756478235/Rajeev_Anand_hccgf7.jpg",
      linkedin: "https://www.linkedin.com/in/rajeevanandofficial/",
    },
    {
      id: 2,
      name: "Aman Jindal",
      role: "Assistant Manager (Deloitte)",
      avatar:
        "https://res.cloudinary.com/djer7pmxt/image/upload/v1755373735/aman-jindal_tzg7kq.webp",
      linkedin: "https://www.linkedin.com/in/amann-jindal",
    },
    {
      id: 3,
      name: "Udit Gupta",
      role: "Founder (Global Tech Talks)",
      avatar:
        "https://res.cloudinary.com/dembediei/image/upload/v1756478235/Udit_Gupta_e6fpzw.jpg",
      linkedin: "https://www.linkedin.com/in/uditinfosec?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    }, 
  ];

  const PersonCard = ({ person }) => (
    <Grow in={true} timeout={700}>
      <GlassCard sx={{ p: 3, textAlign: "center", willChange: "transform" }}>
        <Box position="relative" display="flex" justifyContent="center" mb={2}>
          <Avatar
            src={person.avatar}
            alt={person.name}
            sx={{
              width: 100,
              height: 100,
              border: "3px solid #ff5500",
              boxShadow: "0 0 20px rgba(255,85,0,0.5)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 8,
              right: "calc(50% - 50px)",
              width: 12,
              height: 12,
              bgcolor: "#ff5500",
              borderRadius: "50%",
              animation: `${pulse} 2s infinite`,
            }}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{ color: "#00ff88", mb: 1, animation: `${glitch} 3s infinite` }}
        >
          {person.name}
        </Typography>

        <ClippedBox sx={{ display: "inline-block", mb: 2 }}>
          {person.role}
        </ClippedBox>

        <Box display="flex" justifyContent="center" gap={1}>
          {person.github && (
            <Tooltip title="GitHub">
              <IconButton
                sx={{
                  bgcolor: "rgba(0,255,136,0.1)",
                  border: "1px solid rgba(0,255,136,0.3)",
                  color: "#00ff88",
                  "&:hover": {
                    bgcolor: "#00ff88",
                    color: "#000",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <GitHub sx={{ fontSize: 18 }} />
              </IconButton>
            </Tooltip>
          )}
          {person.linkedin && (
            <Tooltip title="LinkedIn">
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <IconButton
                  sx={{
                    bgcolor: "rgba(0,255,136,0.1)",
                    border: "1px solid rgba(0,255,136,0.3)",
                    color: "#00ff88",
                    "&:hover": {
                      bgcolor: "#00ff88",
                      color: "#000",
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <LinkedIn sx={{ fontSize: 18 }} />
                </IconButton>
              </a>
            </Tooltip>
          )}
          {person.instagram && (
            <Tooltip title="Instagram">
              <a
                href={person.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "inline-flex" }}
              >
                <IconButton
                  sx={{
                    bgcolor: "rgba(0,255,136,0.1)",
                    border: "1px solid rgba(0,255,136,0.3)",
                    color: "#00ff88",
                    "&:hover": {
                      bgcolor: "#00ff88",
                      color: "#000",
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Instagram sx={{ fontSize: 18 }} />
                </IconButton>
              </a>
            </Tooltip>
          )}

          {person.email && (
            <Tooltip title="Email">
              <IconButton
                sx={{
                  bgcolor: "rgba(0,255,136,0.1)",
                  border: "1px solid rgba(0,255,136,0.3)",
                  color: "#00ff88",
                  "&:hover": {
                    bgcolor: "#00ff88",
                    color: "#000",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Email sx={{ fontSize: 18 }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </GlassCard>
    </Grow>
  );

  const renderContent = () => {
    const data = [teamMembers, mentors, judges][activeTab];

    const isComingSoon =
      (activeTab === 1 && (!mentors.length || mentors.every((m) => !m.name))) ||
      (activeTab === 2 && (!judges.length || judges.every((j) => !j.name)));

    if (isComingSoon) {
      return (
        <Box
          sx={{
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            animation: `${pulse} 2s infinite`,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#ff6200ff",
              textShadow: "0 0 10px #ec880d55",
              animation: `${glitch} 2s finite`,
            }}
          >
            Revealing Soon
          </Typography>
          <Typography sx={{ color: "#aaa", mt: 1 }}>
            Stay tuned, we’re getting the best on board!
          </Typography>
        </Box>
      );
    }

    return (
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {data.map((person, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={person.id}>
            <Fade in={true} timeout={800 + index * 150}>
              <div>
                <PersonCard person={person} />
              </div>
            </Fade>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <ThemeProvider theme={gameTheme}>
      <StyledContainer maxWidth={false} sx={{ py: 4, px: 2 }}>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Fade in={true} timeout={1000}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  color: "#f0e744df",
                  fontFamily: '"Oswald", sans-serif',
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  mb: 1,
                  textShadow: "0 0 20px rgba(0,255,136,0.5)",
                  animation: `${glitch} 4s infinite`,
                }}
              >
                MEET THE TEAM
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#ff6b35",
                  fontFamily: '"Oswald", sans-serif',
                  letterSpacing: "0.1em",
                  mb: 2,
                  textShadow: "0 0 10px rgba(255,107,53,0.5)",
                }}
              >
                HACKGROUND INDIA 2K25
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  ml: "2",
                }}
              >
                <Divider
                  sx={{ width: 80, borderColor: "#ffa200ff", borderWidth: 2 }}
                />
                <ClippedBox sx={{ fontSize: "0.8rem" }}>LIVE</ClippedBox>
                <Divider
                  sx={{ width: 80, borderColor: "#ffb300ff", borderWidth: 2 }}
                />
              </Box>
            </Box>
          </Fade>

          <Fade in={true} timeout={1200}>
            <Box sx={{ mb: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Tabs
                  value={activeTab}
                  onChange={(e, v) => setActiveTab(v)}
                  centered
                  sx={{
                    "& .MuiTab-root": {
                      color: "#cccccc",
                      fontFamily: '"Oswald", sans-serif',
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      "&.Mui-selected": {
                        color: "#ff8800ff",
                      },
                    },
                    "& .MuiTabs-indicator": {
                      backgroundColor: "#ffbf00ff",
                      height: 3,
                    },
                  }}
                >
                  <Tab icon={<SportsMma />} label="TEAM" />
                  <Tab icon={<Star />} label="MENTORS" />
                  <Tab icon={<EmojiEvents />} label="JUDGES" />
                </Tabs>
              </Paper>
            </Box>
          </Fade>

          <Box sx={{ mt: 4, ml: 8 }}>{renderContent()}</Box>
        </Container>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default HackathonSections;
