import { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, Typography, keyframes } from "@mui/material";
import SectionTitle from "./Typography/SectionTitle";
import SectionSubtitle from "./Typography/SectionSubtitle";
import omnifood from "../asset/projects/omnifood.png";
import natours from "../asset/projects/natours.png";
import shopbop from "../asset/projects/shopbop.png";
import workopia from "../asset/projects/workopia.png";


const projects = [
  {
    title: "Omnifood",
    description:
      "A beautiful static landing web page design adapt to mobile ui friendly for people love healthy food and customize the customer based in its personal tastes and nutrional need.",
    image: omnifood,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://omnifoodei.netlify.app/",
    code: "https://github.com/anselmo07-2001/Omnifood-",
  },
  {
    title: "Natours",
    description:
      "A tour booking app built for travelers who love adventure and want to discover amazing places across the globe. It uses Stripe for safe global payments and Mapbox to display tour locations",
    image: natours,
    tech: ["Express,js", "Mongoose", "Mongo DB"],
    live: "https://mynatours-fjyk.onrender.com/",
    code: "https://github.com/anselmo07-2001/myNatoursApp",
  },
  {
    title: "ShopBop",
    description:
      "Shopbop is a e-commerce platform with a customer and admin panel. Users can browse products, leave reviews, and manage accounts, while admins handle products, orders, and content.",
    image: shopbop,
    tech: ["Laravel", "Bootstrap CSS", "Livewire", "Sql"],
    live: "https://shopbop.riveraanselmo.com/",
    code: "https://github.com/anselmo07-2001/shopbop",
  },
  {
    title: "Workopia",
    description:
      "A web applicationn job platform built where users can search, apply, bookmark jobs, and manage profiles. Employers can post jobs, view applicants, get email, and show locations with Mapbox.",
    image: workopia,
    tech: ["Laravel", "Alpine.js", "Tailwind CSS", "Sql"],
    live: "https://workopialaravel.riveraanselmo.com/",
    code: "https://github.com/anselmo07-2001/workopia_laravel",
  },
];



function Projects() {
    const ref = useRef(null);
      const [visible, setVisible] = useState(false);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => setVisible(entry.isIntersecting),
          { threshold: 0.2 }
        );
    
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
      }, []);


    return (
        <Box
            component="section"
            id="Projects"
            sx={{
                py: { xs: 10, md: 12 },
                px: { xs: 3, md: 0 },
                background: "radial-gradient(circle at 20% 30%, #e3f2fd, #f5f8ff, #fdfdfd)",
            }}
            ref={ref}
        >
            <Box sx={{ maxWidth: 1200, mx: "auto", textAlign: "center" }}>

                <SectionTitle visible={visible}>My Projects</SectionTitle>
                <SectionSubtitle visible={visible}>Turning ideas into reality, one project at a time</SectionSubtitle>
                
                {/* Grid Layout */}
                <Grid
                    container
                    spacing={5}
                    justifyContent="center"
                    alignItems="stretch"
                    sx={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.8s ease-out 0s",
                    }}
                >
                    {
                      projects.map((project, index) => (
                        <Grid key={index} item xs={12} md={6}>
                          <ProjectCard {...project} />
                        </Grid>
                      ))
                    }
                </Grid>

                {/* Discover More */}
                <Box sx={{ textAlign: "center", mt: 8 }}>
                    <Button
                        variant="contained"
                        href="https://github.com/anselmo07-2001"
                        target="_blank"
                        sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: "30px",
                        bgcolor: "#1976d2",
                        "&:hover": {
                            bgcolor: "#1259a5",
                            transform: "translateY(-3px)",
                        },
                        boxShadow: "0 4px 10px rgba(25,118,210,0.3)",
                        transition: "all 0.3s ease",
                        }}
                    >
                        Discover More Projects →
                    </Button>
                </Box>
            </Box>    
        </Box>
    )
}




function ProjectCard({ title, description, image, tech, live, code }) {
  return (
    <Box
      sx={{
        height: "100%",
        maxWidth: { xs: "100%", sm: 400, md: 500 },
        background: "white",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 12px 35px rgba(25,118,210,0.25)",
        },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: "100%",
          height: 300,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" sx={{ color: "#1976d2", mb: 1 }}>
          {title}
        </Typography>
        <Typography sx={{ color: "#555", mb: 3, lineHeight: 1.6 }}>
          {description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mb: 3,
          }}
        >
          {tech.map((t, i) => (
            <Box
              key={i}
              component="span"
              sx={{
                bgcolor: "#e3f2fd",
                color: "#1976d2",
                fontSize: "0.9rem",
                fontWeight: 500,
                px: 2,
                py: 0.5,
                borderRadius: "20px",
              }}
            >
              {t}
            </Box>
          ))}
        </Box>

        {/* Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button
            variant="contained"
            href={live}
            target="_blank"
            sx={{
              bgcolor: "#1976d2",
              borderRadius: "25px",
              px: 3,
              py: 1,
              "&:hover": { bgcolor: "#0d47a1" },
            }}
          >
            Live Demo
          </Button>
          <Button
            target="_blank"
            href={code}
            sx={{
              color: "#1976d2",
              fontWeight: 600,
              "&:hover": { color: "#0d47a1" },
            }}
          >
            View Code →
          </Button>
        </Box>
      </Box>
    </Box>
  );
}












export default Projects