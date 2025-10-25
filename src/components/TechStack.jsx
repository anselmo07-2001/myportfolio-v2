import { Box, Grid, Typography, keyframes } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./Typography/SectionTitle";
import SectionSubtitle from "./Typography/SectionSubtitle";
import SectionLayout from "./Layout/SectionLayout";
import useVisibility from "../../custom_hooks/useVisibility";
import TechCard from "./Cards/TechCard";


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
  const [ref, visible] = useVisibility(0.2);

  return (
     <SectionLayout ref={ref} id="Skills" sx={{ background: "radial-gradient(circle at 20% 30%, #e3f2fd, #f5f8ff, #fdfdfd)" }}>

          <SectionTitle visible={visible}>My Tech Stack</SectionTitle>
          <SectionSubtitle visible={visible}>These are the tools I love working with every day</SectionSubtitle>
         
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

    </SectionLayout>  
  );
}


export default TechStack;
