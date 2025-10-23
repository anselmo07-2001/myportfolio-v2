import { Box, Button, Grid, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useEffect, useRef, useState } from "react";


const certifications = [
    {
       image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
       title: "React - The Complete Guide",
       instructor: "Maximilian Schwarzmüller",
       description: "A comprehensive course to master React, Redux, Hooks, and building modern web apps.",
       link: "#"
    },
    {
       image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
       title: "React - The Complete Guide",
       instructor: "Maximilian Schwarzmüller",
       description: "A comprehensive course to master React, Redux, Hooks, and building modern web apps.",
       link: "#"
    },
    {
       image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
       title: "React - The Complete Guide",
       instructor: "Maximilian Schwarzmüller",
       description: "A comprehensive course to master React, Redux, Hooks, and building modern web apps.",
       link: "#"
    },
    {
       image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
       title: "React - The Complete Guide",
       instructor: "Maximilian Schwarzmüller",
       description: "A comprehensive course to master React, Redux, Hooks, and building modern web apps.",
       link: "#"
    },

];


function Certification() {

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
            <Box 
                sx={{ 
                    maxWidth: 1200, 
                    mx: "auto",
                    textAlign: "center",
                }}>
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
                    Certifications
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
                    Never stop learning — recognized skills across technology
                </Typography>

                <Grid container spacing={2} justifyContent={"center"}>
                    {
                        certifications.map((certificate, index) => (
                            <Grid key={index} item xs={12} md={6} >
                                <CerticateCard {...certificate} visible={visible} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}


function CerticateCard({image, title, instructor, description, link, visible}) {
    return (
        <Box 
            sx={{
                height: "100%", 
                maxWidth: { xs: "100%", md: 270 },
                background: "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 12px 35px rgba(25,118,210,0.25)",
                },
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease-out 0.5s",
            }}
        >

           {/*  Image  */}
          <Box
            sx={{
                width: "100%",
                height: 200,
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

           {/*  Content  */}
          <Box sx={{ p: 2 }}>
            <Typography   
                sx={{
                    fontSize: "1rem",
                    color: (theme) => `${theme.palette.primary.main}`,
                    textAlign: "left",
                    fontWeight: "bold",
                    mb: 1
                }}
            >
                 { title }
            </Typography>

            <Typography
                sx={{
                    textAlign: "left",
                    color: "rgba(54, 54, 54, 1)",
                    fontSize: 14,
                    mb: 1
                }}
            >
                Instructor: { instructor }
            </Typography>

            <Typography
                sx={{
                    textAlign: "left",
                    fontSize: 14,
                    color: "#555555ce",
                    mb: 2
                }}
            >
                { description }
            </Typography>

            <Button
                fullWidth
                sx={{
                    justifyContent: "flex-start",
                    pl: 0
                }}
                href={link}
            >
                View Certificate →
            </Button>


          </Box>
     
        </Box>
    )
}

export default Certification;