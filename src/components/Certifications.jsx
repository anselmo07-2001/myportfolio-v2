import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./Typography/SectionTitle";
import SectionSubtitle from "./Typography/SectionSubtitle";
import cert1 from "../asset/certs/cert1.png";
import cert2 from "../asset/certs/cert2.png";
import cert3 from "../asset/certs/cert3.png";
import cert4 from "../asset/certs/cert4.png";
import SectionLayout from "./Layout/SectionLayout";
import CertificateCard from "./Cards/CertificateCard";


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
                            <CertificateCard {...certificate} visible={visible} />
                        </Grid>
                    ))
                }
            </Grid>
        </SectionLayout>
    )
}


export default Certification;