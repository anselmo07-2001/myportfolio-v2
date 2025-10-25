import { Box, Button, Typography, keyframes } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./Typography/SectionTitle";
import SectionSubtitle from "./Typography/SectionSubtitle";
import myPhoto from "../asset/me2.jpg"

function AboutMe() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true); // animate when visible
            } else {
                setVisible(false); // reset when out of view
            }
            },
            { threshold: 0.2 } // trigger when 20% visible
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    
    return (
        <Box
            component="section"
            id="About"
            sx={{
                py: { xs: 10, md: 12},
                px: { xs: 3, md: 0},
                backgroundColor: "#f3f7fd"
            }}
        >
            <Box
                ref={ref}
                sx={{
                    maxWidth: 1200,
                    mx: "auto",
                    textAlign: "center",
                }}
            >
                <SectionTitle visible={visible}>About Me</SectionTitle>
                <SectionSubtitle visible={visible}>Passion meets code, creating meaningful experience</SectionSubtitle>

                {/* Content */}
                <Box
                    ref={ref}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 10,
                        flexDirection: { xs: "column", md: "row" },
                        textAlign: { xs: "center", md: "left" },

                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(50px)",
                        transition: "all 0.8s ease-out 0.5s",
                    }}
                >
                    {/* Left image */}
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            component="img"
                            src={myPhoto}
                            alt="Your photo"
                            sx={{
                                width: { xs: 240, md: 300 },
                                height: { xs: 240, md: 300 },
                                borderRadius: "50%",
                                border: "5px solid #1976d2",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                                objectFit: "cover",
                                transition: "transform 0.3s ease",
                                "&:hover": { transform: "scale(1.05)" },
                            }}
                        />
                    </Box>

                     {/* Right text */}
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: (theme) => `${theme.palette.primary.main}`,
                                mb: 2,
                                fontWeight: 600,
                            }}
                        >
                            Code, creativity, and curiosity — that’s my daily fuel.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "#444",
                                mb: 4,
                                fontSize: { xs: "1rem", md: "1.05rem" },
                                lineHeight: 1.7,
                            }}  
                        >
                            I’m a passionate and detail-oriented{" "}
                            <Box component="span" sx={{ color: (theme) => `${theme.palette.primary.main}`, fontWeight: 600 }}>
                                Web Developer
                            </Box>{" "}
                            who loves building end-to-end web applications using modern
                            technologies like <strong>JavaScript (MERN Stack)</strong>,{" "}
                            <strong>Laravel PHP</strong>, <strong>MySQL</strong>, and{" "}
                            <strong>MongoDB</strong>. I focus on writing clean, scalable code
                            and creating delightful user experiences that make the web more
                            interactive and meaningful.

                        </Typography>

                        <Button
                            variant="contained"
                            href="/files/myresume2025.pdf"
                            download
                            sx={{
                                px: 4,
                                py: 1.5,
                                borderRadius: "30px",
                                bgcolor: (theme) => `${theme.palette.primary.main}`,
                                "&:hover": {
                                bgcolor: (theme) => `${theme.palette.primary.dark}`,
                                transform: "translateY(-3px)",
                                },
                                boxShadow: "0 4px 10px rgba(25,118,210,0.3)",
                                transition: "all 0.3s ease"
                            }}
                            >
                            Download Resume
                        </Button>
                    </Box>
                </Box>    
            </Box>
        </Box>
    );
}

export default AboutMe;