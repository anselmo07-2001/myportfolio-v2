import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
            dark: "#0d47a1",
        },
        secondary: {
            main: "#f50057",
        },
    },
    typography: {
        fontFamily: '"Poppins", sans-serif',
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        body1: { fontSize: 16 },
    },
});

export default theme;