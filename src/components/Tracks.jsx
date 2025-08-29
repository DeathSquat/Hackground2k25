import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const DARK_BG = "#0a0a0a";
const NEOMORPH_CARD = "#1a1a1a";
const NEON_ACCENT = "#ffa200ff";
const SHADOW_LIGHT = "#2e2e2e";
const SHADOW_DARK = "#000000";
const TEXT_COLOR = "#f5f5f5";

const GameContainer = styled(Box)({
  minHeight: "100vh",
  background: `linear-gradient(135deg, ${DARK_BG}, #111111)`,
  padding: "4rem 2rem",
});

const GameCard = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: NEOMORPH_CARD,
  borderRadius: "20px",
  padding: "1.5rem",
  boxShadow: `
    8px 8px 16px ${SHADOW_DARK},
    -8px -8px 16px ${SHADOW_LIGHT}
  `,
  transition: "all 0.3s ease-in-out",
  maxWidth: 360,
  minHeight: 400,
  margin: "0 auto",
  border: "1px solid #222",
  "&:hover": {
    boxShadow: `0 0 20px ${NEON_ACCENT}, inset 2px 2px 8px #111, inset -2px -2px 8px #222`,
    transform: "translateY(-6px)",
  },
});

const ModeBadge = styled(Chip)({
  position: "absolute",
  top: "16px",
  left: "16px",
  backgroundColor: "#0f0f0f",
  color: NEON_ACCENT,
  fontSize: "0.7rem",
  border: `1px solid ${NEON_ACCENT}`,
  fontWeight: 600,
});

const RankBadge = styled(Chip)({
  position: "absolute",
  top: "16px",
  right: "16px",
  backgroundColor: "#1f1f1f",
  color: "#ffd700",
  fontSize: "0.7rem",
  border: "1px solid #ffda44",
  fontWeight: 600,
});

const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  margin: "2rem auto 1.5rem",
  background: "#111",
  boxShadow: "inset 4px 4px 8px #000, inset -4px -4px 8px #333",
  border: `2px solid ${NEON_ACCENT}`,
});

const HeaderTitle = styled(Typography)({
  fontSize: "2.8rem",
  fontWeight: 800,
  color: "#ffe100",
  textAlign: "center",
  marginBottom: "1rem",
  textTransform: "uppercase",
  textShadow: "0 0 8px #ffb300",
});

const HeaderLine = styled(Box)({
  width: "80px",
  height: "3px",
  background: "#ffe100",
  margin: "0 auto 3rem",
  borderRadius: "2px",
  boxShadow: "0 0 12px #ffe100",
});

const gamingCards = [
  // {
  //   mode: "GameDev",
  //   rank: "🎮 Game On",
  //   title: "Play & Inspire",
  //   desc: "Design games that are fun and meaningful — from learning to problem-solving, build experiences that engage.",
  //   image:
  //     "https://res.cloudinary.com/djer7pmxt/image/upload/v1753117058/rkhgsxbtv7fqlzq6vlom_iqveo6.webp",
  // },
  {
    mode: "AI/ML",
    rank: "🤖 AI for Everything",
    title: "Smarter Solutions",
    desc: "Use AI to solve real-world problems in healthcare, education, and daily life. Let your code think and act smartly for society.",
    image:
      "https://res.cloudinary.com/djer7pmxt/image/upload/v1753116795/bgmi-10.webp_yugnkf.webp",
  },
  {
    mode: "GreenTech",
    rank: "🌱 GreenTech & Climate Innovation",
    title: "Eco Tech Power",
    desc: "Build technology to protect the planet — from clean energy to smart farming. Help nature and people thrive together.",
    image:
      "https://res.cloudinary.com/djer7pmxt/image/upload/v1753116911/vmsblszy2ws2pjpcwidx_g4ou5o.webp",
  },
  {
    mode: "Cybersecurity",
    rank: "🔐 Cybersecurity & Digital Trust",
    title: "Safer Internet",
    desc: "Create tools to protect privacy, prevent online threats, and build digital trust for communities and teams.",
    image:
      "https://res.cloudinary.com/djer7pmxt/image/upload/v1753116900/lytvzhesr1tyuasotcau_mc2hql.webp",
  },
  {
    mode: "Web3",
    rank: "🔗 Web3 & Blockchain",
    title: "Decentralized Future",
    desc: "Use blockchain to build secure systems — smart contracts, digital identities, and dApps that empower users.",
    image:
      "https://res.cloudinary.com/djer7pmxt/image/upload/v1753116998/btlvuvk7sobbtbc45dea_khwtkx.webp",
  },
  {
    mode: "Wildcard",
    rank: "💡 Open Innovation",
    title: "Free Thinking Zone",
    desc: "Got a bold idea that doesn't fit in a box? This is your space to innovate — assistive tech, future tools, and more.",
    image:
      "https://res.cloudinary.com/djer7pmxt/image/upload/v1753116822/xp7wefcra5op0njyd5ne_y7quwu.webp",
  },
  

  // 🚀 New Track Alert
  {
    mode: "Special Track",
    rank: "🚀 New Track Alert!",
    title: "Hackground × Duality AI",
    desc: "Train AI models using Falcon digital twin data to detect Toolbox, Oxygen Tank & Fire Extinguisher in a simulated space station! Optimize YOLOv8, document your workflow & grab exciting prizes.",
    image:
      "https://blog.unipin.com/en/wp-content/uploads/sites/2/2024/07/bgmi-best-name-696x348.jpg", 
  },
];



export default function PUBGGamingCardsMUI() {
  return (
    <GameContainer>
      <Container maxWidth="xl">
        <HeaderTitle variant="h1">Hackground India 2K25 Tracks</HeaderTitle>
        <HeaderLine />
        <Grid container spacing={4} justifyContent="center">
          {gamingCards.map(({ mode, rank, title, desc, image }) => (
            <Grid item key={title} xs={12} sm={6} md={4}>
              <GameCard>
                <ModeBadge label={mode} />
                <RankBadge label={rank} />
                <Box
                  sx={{
                    width: "100%",
                    height: "280px",
                    borderRadius: "12px",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: `2px solid ${NEON_ACCENT}`,
                    boxShadow: `0 0 20px ${NEON_ACCENT}66`,
                    marginBottom: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#fff",
                    textAlign: "center",
                    marginBottom: "1rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#aaa",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  {desc}
                </Typography>
              </GameCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </GameContainer>
  );
}
