import Navbar from "./components/Navbar";
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from "./style/theme";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Certification from "./components/certifications";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline/> {/* Reset default browser styles */}
         <Navbar />
         <Hero/>
         <AboutMe/>
         <TechStack/>
         <Projects/>
         <Certification/>
         <ContactMe/>
         <Footer/>
      </ThemeProvider>
   )
}

export default App
