import { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, Typography, keyframes } from "@mui/material";
import SectionTitle from "./Typography/SectionTitle";
import SectionSubtitle from "./Typography/SectionSubtitle";
import omnifood from "../asset/projects/omnifood.png";
import natours from "../asset/projects/natours.png";
import shopbop from "../asset/projects/shopbop.png";
import workopia from "../asset/projects/workopia.png";
import SectionLayout from "./Layout/SectionLayout";
import ProjectCard from "./Cards/ProjectCard";


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
        <SectionLayout ref={ref} id="Projects">
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

      </SectionLayout>   
    )
}



export default Projects