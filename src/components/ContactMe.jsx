import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import contactme from "../asset/contactme.png";


function Contact() {

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
                    Contact Me
                </Typography>

                <Typography
                    variant="subtitle1"
                    sx={{
                        mb: 4,
                        color: "#555",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.8s ease-out 0.2s",
                    }}
                >
                    Let's create something amazing together 👋
                </Typography>


                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        py: 6,
                        px: 2,
                    }}
                    >
                    <Grid
                        container
                        sx={{
                            maxWidth: { xs: 500, md: 1000 },
                            borderRadius: 4,
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                            backgroundColor: "#fff",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                p: { xs: 3, md: 5 },
                                gap: 3,
                                order: { xs: 2, md: 1 },
                            }}
                        >
                            <Box
                                component="form"
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2.5,
                                }}
                            >
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                        borderRadius: "15px",
                                        "& fieldset": { borderColor: "#ccc" },
                                        "&:hover fieldset": { borderColor: "#999" },
                                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                                        },
                                        "& .MuiInputBase-input": {
                                        padding: "14px 18px",
                                        fontSize: "1rem",
                                        },
                                        "& .MuiInputLabel-root": { color: "#999", fontSize: "0.95rem" },
                                    }}
                                />

                                <TextField
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                        borderRadius: "15px",
                                        "& fieldset": { borderColor: "#ccc" },
                                        "&:hover fieldset": { borderColor: "#999" },
                                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                                        },
                                        "& .MuiInputBase-input": {
                                            padding: "14px 18px",
                                            fontSize: "1rem",
                                        },
                                        "& .MuiInputLabel-root": { color: "#999", fontSize: "0.95rem" },
                                    }}
                                />

                                <TextField
                                    label="Message"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                    borderRadius: "15px",
                                    "& fieldset": { borderColor: "#ccc" },
                                    "&:hover fieldset": { borderColor: "#999" },
                                    "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                                    },
                                    "& .MuiInputBase-input": {
                                        padding: "14px 18px",
                                        fontSize: "1rem",
                                    },
                                    "& .MuiInputLabel-root": { color: "#999", fontSize: "0.95rem" },
                                }}
                                />

                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        borderRadius: "15px",
                                        textTransform: "none",
                                        fontWeight: 600,
                                        fontSize: "1rem",
                                        py: 1.2,
                                    }}
                                    >
                                    Send Message
                                </Button>
                                
                            </Box>
                        </Grid>

                        {/* RIGHT SIDE - IMAGE */}
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                flex: 1,
                                minHeight: { xs: 250, md: "auto" },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                order: { xs: 1, md: 2 },
                                background: "#e8f0fe",
                            }}
                        >

                            <Box
                                component="img"
                                src={contactme}
                                alt="Contact"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.4s ease",
                                    "&:hover": { transform: "scale(1.05)" },
                                }}
                            />

                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact