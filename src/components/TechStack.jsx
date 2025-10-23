import { Box, Grid, Typography, keyframes } from "@mui/material";
import { useEffect, useRef, useState } from "react";


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

const frontendIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
];

const backendIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
];

function TechStack() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      component="section"
      id="techstack"
      sx={{
        py: { xs: 10, md: 12 },
        px: { xs: 3, md: 0 },
        background: "radial-gradient(circle at 20% 30%, #e3f2fd, #f5f8ff, #fdfdfd)",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#4b4b4b",
              mb: 2,
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                display: "block",
                width: 70,
                height: 3,
                bgcolor: "#1976d2",
                borderRadius: 2,
                mx: "auto",
                mt: 1,
              },
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out 0s",
            }}
          >
            My Tech Stack
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              mb: 10,
              color: "#555",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out 0.2s",
            }}
          >
            These are the tools I love working with every day.
          </Typography>

          {/* Tech Cards */}
          <Grid container spacing={7} justifyContent={"center"}>
              <Grid item xs={12} md={6}>
                  <TechCard
                    title="Frontend Technologies"
                    description="Building beautiful, responsive, and interactive user interfaces."
                    icons={frontendIcons}
                    visible={visible}
                    delay={0.2}
                  />
              </Grid>

              <Grid item xs={12} md={6}>
                <TechCard
                  title="Backend Technologies"
                  description="Crafting robust APIs and scalable backend systems for modern apps."
                  icons={backendIcons}
                  visible={visible}
                  delay={0.4}
                />
              </Grid>
          </Grid>
      </Box>
    </Box>
  );
}




function TechCard({ title, description, icons, visible, delay }) {
  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", sm: 400, md: 500 },

        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(12px)",
        borderRadius: "20px",
        p: { xs: 4, md: 6 },
        boxShadow: "0 10px 25px rgba(25,118,210,0.3)",
        border: "1px solid rgba(255,255,255,0.3)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s ease-out",
        transitionDelay: `${delay}s`,
        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",
          boxShadow: "0 15px 40px rgba(25,118,210,0.25)",
          background: "rgba(255,255,255,0.15)",
        },
      }}
    >
        <Typography variant="h6" sx={{ color: "#1976d2", mb: 1.5, fontWeight: 700 }}>
          {title}
        </Typography>

        
        <Typography variant="body1" sx={{ color: "#444", mb: 4 }}>
          {description}
        </Typography>
 
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 3, md: 5 },
          }}
        >
          {icons.map((icon, i) => (
            <Box
              key={i}
              component="img"
              src={icon}
              alt=""
              sx={{
                width: { xs: 50, md: 65 },
                height: { xs: 50, md: 65 },
                opacity: 0,
                transform: "scale(0.8)",
                animation: visible ? `${iconPop} 0.6s ease forwards` : "none",
                animationDelay: `${0.1 * (i + 1)}s`,
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-12px) scale(1.1)",
                  filter: "drop-shadow(0 8px 12px rgba(25,118,210,0.4))",
                },
              }}
            />
          ))}
        </Box> 
    </Box>
  );
}

export default TechStack;
