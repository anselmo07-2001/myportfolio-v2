import Navbar from "./components/Navbar";
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from "./style/theme";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline/> {/* Reset default browser styles */}
         <Navbar />
      </ThemeProvider>
   )
}

export default App
