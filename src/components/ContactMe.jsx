import { Box, Button, Grid, TextField, Typography, Snackbar, Alert, CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import contactme from "../asset/contactme.png";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";


function Contact() {

    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "", receiver_name: "Anselmo Rivera" });

    const [errors, setErrors] = useState({});

    const [flash, setFlash] = useState({
        open: false,
        message: "",
        severity: "success",  // "success" | "error" | "info" | "warning"
    });

    const [showCaptcha, setShowCaptcha] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);
    const [loading, setLoading] = useState(false);

        
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);

        // Stop submission if there are errors
        if (Object.keys(newErrors).length > 0) {
            setFlash({
                open: true,
                message: "Please fill out all fields correctly.",
                severity: "error",
            });
            return;
        }


        // If form is valid but captcha not shown yet, show it
        if (!showCaptcha) {
            setShowCaptcha(true);
            return; // stop submission until captcha is completed
        }


        // If captcha is shown, check if user completed it
        if (!captchaValue) {
            setFlash({ open: true, message: "Please verify you are not a robot", severity: "error" });
            return;
        }




        setLoading(true);

        emailjs
            .send(
                "service_ecci48m",
                "template_dh484as",
                formData,
                "558vTnzLwzKPQrID0"
            )
            .then(
                () => {
                    setFlash({
                        open: true,
                        message: "Email sent successfully!",
                        severity: "success",
                    });
                    setFormData({ name: "", email: "", message: "", receiver_name: "Anselmo Rivera" })
                    setCaptchaValue(null);
                    setShowCaptcha(false); // reset captcha visibility
                },
                (err) => {
                    console.error(err);
                    setFlash({
                        open: true,
                        message: "Failed to send email. Please try again.",
                        severity: "error",
                    });
                }
            )
            .finally(() => setLoading(false)); 
    };


    return (
         <Box
            ref={ref}
            component="section"
            id="Contact"
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

                <Snackbar
                    open={flash.open}
                    autoHideDuration={4000}
                    onClose={() => setFlash({ ...flash, open: false })}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    >
                    <Alert
                        severity={flash.severity}
                        variant="filled"
                        onClose={() => setFlash({ ...flash, open: false })}
                        sx={{ 
                            width: "100%",
                            backgroundColor: 
                             flash.severity === "success"
                                ? "#3da575ff"
                                : "#d32f2f",  
                            color: "#fff",
                            fontSize: "1rem",
                            fontWeight: 500,
                            py: 1.5, 
                            px: 3, 
                            borderRadius: "8px", 
                            boxShadow: 2, 
                        }}
                    >
                        {flash.message}
                    </Alert>
                </Snackbar>
          
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        py: 6,
                        px: 2,
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.8s ease-out 0.4s",
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
                                onSubmit={handleSubmit}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2.5,
                                }}
                            >

                                {showCaptcha && (
                                    <ReCAPTCHA
                                        sitekey="6LdQP_YrAAAAAJc9SGxqh-I_VM67_jp4fFQ-Mjvc"
                                        onChange={(value) => setCaptchaValue(value)}
                                        style={{ margin: "8px 0" }} // optional spacing
                                    />
                                )}


                                <TextField
                                    onChange={handleChange}
                                    name="name"
                                    value={formData.name}
                                    error={!!errors.name}
                                    helperText={errors.name}
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
                                    onChange={handleChange}
                                    name="email"
                                    value={formData.email}
                                    error={!!errors.email}
                                    helperText={errors.email}
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
                                    onChange={handleChange}
                                    name="message"
                                    value={formData.message}
                                    error={!!errors.message}
                                    helperText={errors.message}
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
                                    type="submit"
                                    disabled={loading}
                                    sx={{
                                        borderRadius: "15px",
                                        textTransform: "none",
                                        fontWeight: 600,
                                        fontSize: "1rem",
                                        py: 1.2,
                                        gap: 1
                                    }}
                                >
                                    {loading && <CircularProgress size={20} color="inherit" />}
                                    {loading ? "Sending..." : "Send Message"}                              
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