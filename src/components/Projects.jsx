import { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, Typography, keyframes } from "@mui/material";


const projects = [
  {
    title: "Task Management System",
    description:
      "A full-stack web app for managing tasks and teams with real-time updates, comments, and progress tracking. Designed with a clean UI and role-based access.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    live: "#",
    code: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A modern online store with user authentication, product management, and Stripe integration. Features both a customer and admin dashboard.",
    image:
      "https://thedigitalprojectmanager.com/wp-content/cache/thedigitalprojectmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-073-956-pub-meistertask-screenshot-1681992744.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    live: "#",
    code: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "A fully responsive portfolio website showcasing my projects, skills, and background. Built with modern UI/UX design principles.",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=1200&q=80",
    tech: ["HTML", "CSS", "JavaScript", "Material UI"],
    live: "#",
    code: "#",
  },
  {
    title: "Blog CMS",
    description:
      "A full-featured CMS where admins can publish, edit, and manage posts with WYSIWYG editing, user roles, and SEO-friendly URLs.",
    image:
      "https://uizard.io/static/cloud-sharing-web-app-cover-deea5d25e75c44f560ebb21add40ba53.png",
    tech: ["PHP", "Laravel", "SQL", "Blade"],
    live: "#",
    code: "#",
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
            id="techstack"
            sx={{
                py: { xs: 10, md: 12 },
                px: { xs: 3, md: 0 },
                background: "radial-gradient(circle at 20% 30%, #e3f2fd, #f5f8ff, #fdfdfd)",
            }}
            ref={ref}
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
                    My Projects
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
                    Turning ideas into reality, one project at a time.
                </Typography>

                  {/* Grid Layout */}
                <Grid
                    container
                    spacing={5}
                    justifyContent="center"
                    sx={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(40px)",
                        transition: "all 0.8s ease-out 0.4s",
                    }}
                    >
                    {projects.map((project, index) => (
                        <Grid key={index} item xs={12} md={6}>
                        <ProjectCard {...project} />
                        </Grid>
                    ))}
                </Grid>

                {/* Discover More */}
                <Box sx={{ textAlign: "center", mt: 8 }}>
                    <Button
                        variant="contained"
                        href="https://github.com/yourusername"
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