import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./Typography/SectionTitle";
import SectionSubtitle from "./Typography/SectionSubtitle";
import cert1 from "../asset/certs/cert1.png";
import cert2 from "../asset/certs/cert2.png";
import cert3 from "../asset/certs/cert3.png";
import cert4 from "../asset/certs/cert4.png";
import SectionLayout from "./Layout/SectionLayout";


const certifications = [
    {
       image: cert1,
       title: "Linux System Administration",
       instructor: "Elana Mofar",
       description: "This course equips participants with core Linux administration skills, including command-line operations, user management, file permissions, disk partitioning, RAID setup, and logical volume management.",
       link: "https://www.credential.net/d1dbcd0f-a4a4-4d51-a2db-58c593306e12#acc.wioLRpWG"
    },
    {
       image: cert2,
       title: "Modern React with Redux",
       instructor: "Stephen Grider",
       description: "This course equips participants with modern skills using React and Redux—including Hooks, Context API, React Router, API integration and state management to build scalable, real-world web applications.",
       link: "https://www.udemy.com/certificate/UC-3195a7ad-239b-403c-89cf-65c60c4ea3a8/"
    },
    {
       image: cert3,
       title: "PHP - Beginner to Advanced",
       instructor: "Jannis Seeman",
       description: "This course teaches modern PHP development, covering OOP, namespaces, MVC architecture, and best practices to build clean, scalable, and maintainable web applications efficiently and effectively.",
       link: "https://www.udemy.com/certificate/UC-9454a022-568f-4e58-a667-15661af04a60/"
    },
    {
       image: cert4,
       title: "Laravel From Scratch",
       instructor: "Brad Traversy",
       description: "This course teaches you how to master the Laravel PHP framework from the ground up by building real-world applications, covering routing, MVC, Eloquent ORM, Blade templating, authentication, and deployment.",
       link: "https://www.udemy.com/certificate/UC-66136026-2fdc-4ed9-a2c5-8359c7095529/"
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
        <SectionLayout ref={ref} id="Certification" sx={{ background: "radial-gradient(circle at 20% 30%, #e3f2fd, #f5f8ff, #fdfdfd)" }}>
            <SectionTitle visible={visible}>Certifications</SectionTitle>
            <SectionSubtitle visible={visible}>Never stop learning — recognized skills across technology</SectionSubtitle>

            <Grid container spacing={2} justifyContent={"center"}>
                {
                    certifications.map((certificate, index) => (
                        <Grid key={index} item xs={12} md={6} >
                            <CerticateCard {...certificate} visible={visible} />
                        </Grid>
                    ))
                }
            </Grid>
        </SectionLayout>
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
                target="_blank"
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