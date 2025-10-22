import Navbar from "./components/Navbar";
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from "./style/theme";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline/> {/* Reset default browser styles */}
         <Navbar />
         <Hero/>
         <AboutMe/>
         <TechStack/>
      </ThemeProvider>
   )
}

export default App
