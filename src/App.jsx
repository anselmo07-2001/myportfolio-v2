import Navbar from "./components/Navbar";
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from "./style/theme";
import Hero from "./components/Hero";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline/> {/* Reset default browser styles */}
         <Navbar />
         <Hero/>
      </ThemeProvider>
   )
}

export default App
