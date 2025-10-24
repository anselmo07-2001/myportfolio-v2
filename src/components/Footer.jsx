import { Box, IconButton, keyframes, Stack, Typography } from "@mui/material";


const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const iconPop = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;


const socialLinks = [
    {
      href: "https://github.com/yourusername",
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
      alt: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/yourusername/",
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/yourusername",
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg",
      alt: "Facebook",
    },
  ];



function Footer() {
    return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        color: "white",
        background: "radial-gradient(circle at top left, #1976d2, #42a5f5)",
        px: 2,
        py: 10,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05), transparent 70%)",
          transform: "rotate(45deg)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <Typography 
            variant="h5"
            sx={{
                flexGrow: 1,
                fontWeight: "bold",
                letterSpacing: 1,
            }}
            >
                Anselmo Rivera
        </Typography>

        {/* Tagline */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 500,
            mb: 4,
            opacity: 0,
            animation: `${fadeUp} 1s ease forwards`,
            animationDelay: "0.2s",
          }}
        >
          Living, learning, & leveling up one day at a time.
        </Typography>

        {/* Social Icons */}
         <Stack direction="row" spacing={3} justifyContent="center" mb={3}>
          {socialLinks.map(({ href, src, alt }, index) => (
            <IconButton
              key={index}
              component="a"
              href={href}
              target="_blank"
              sx={{
                background: "rgba(255,255,255,0.1)",
                "&:hover": { background: "rgba(255,255,255,0.2)" },
                padding: 1,
                "& img": {
                  width: 35,
                  height: 35,
                  filter:
                    "invert(100%) drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                  transition: "all 0.3s ease",
                },
                "&:hover img": {
                  transform: "scale(1.3) rotate(-5deg)",
                  filter:
                    "invert(100%) drop-shadow(0 5px 15px rgba(255,255,255,0.8))",
                  boxShadow: "0 0 15px rgba(255,255,255,0.5)",
                },
              }}
            >
              <Box component="img" src={src} alt={alt} />
            </IconButton>
          ))}
        </Stack>

        {/* Copyright */}
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
          © {new Date().getFullYear()} Anselmo Rivera. All rights reserved.
        </Typography>
      </Box>

    </Box>
  );
}

export default Footer;