import { Box, Link, Typography, keyframes, Avatar } from "@mui/material";
import linkedin from "../asset/linkedin.png"
import github from "../asset/github.png"

function Hero() {

    const fadeInUp = keyframes`
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    `;


    return (
        <Box
            id="Home"
            sx={{
                height: { xs: "calc(100vh - 56px)", md: "calc(100vh - 64px)" },
                backgroundColor: "#cceefd52",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: 1200,
                    width: "100%",
                    gap: {xs:7 , lg: 20},
                    flexDirection: { xs: "column-reverse", md: "row" }, // stack below 900px
                    textAlign: { xs: "center", md: "left" },
                    px: { xs: 3, md: 3 }, // padding on small screens
                }}
            >
                {/* Left content */}
                <Box sx={{ flex: 1 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: "bold",
                            mb: 2,
                            lineHeight: 1.2,
                            whiteSpace: { xs: "normal", md: "nowrap" },
                            fontSize: { xs: "2.8rem", md: "3.5rem"},
                            animation: `${fadeInUp} 0.8s ease-out forwards`,
                            opacity: 0,
                            animationDelay: "0.1s"
                        }}
                    >
                        Hi, I'm <Box component="span" sx={{ color: "#1976d2" }}>Anselmo Rivera</Box>
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 500,
                            mb: 3,
                            animation: `${fadeInUp} 0.8s ease-out forwards`,
                            opacity: 0,
                            animationDelay: "0.3s",
                        }}
                        
                    >
                        JavaScript Fullstack Developer
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ 
                            mb: 4, 
                            color: "#555",
                            animation: `${fadeInUp} 0.8s ease-out forwards`,
                            opacity: 0,
                            animationDelay: "0.5s",
                            fontSize: { xs: "1rem", md: "1.25rem"},
                        }}
                    >
                        A highly motivated and passionate Web Developer who loves creating interactive web applications and experiences on the web.    
                    </Typography>

                     <Box
                        sx={{
                        display: "flex",
                        gap: 3,
                        justifyContent: { xs: "center", md: "flex-start" },
                        animation: `${fadeInUp} 0.5s ease-out forwards`,
                        opacity: 0,
                        animationDelay: "0.9s",
                        }}
                    >
                        <Link href="https://www.linkedin.com/in/anselmo-rivera-iii" target="_blank" color="inherit">
                            <Box
                                component="img"
                                src={linkedin}
                                alt="LinkedIn"
                                sx={{
                                    width: 40,
                                    height: 40,
                                    transition: "0.3s",
                                    "&:hover": { transform: "scale(1.2)" },
                                }}
                            />
                        </Link>
                        <Link href="https://github.com/anselmo07-2001" target="_blank" color="inherit">
                            <Box
                                component="img"
                                src={github}
                                alt="github"
                                sx={{
                                    width: 40,
                                    height: 40,
                                    transition: "0.3s",
                                    "&:hover": { transform: "scale(1.2)" },
                                }}
                            />
                        </Link>
                    </Box>
    

                </Box>     

              
                {/* Right content */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyItems: "center"
                    }}
                >
                    <Avatar
                        src="me.jpg"
                        alt="my photo"
                        sx={{
                            width: { xs: "70vw", sm: "300px", md: "350px" },
                            height: { xs: "70vw", sm: "300px", md: "350px" },
                            maxWidth: 380,
                            maxHeight: 380,
                            border: "7px solid #1976d2",
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.16)",
                            transition: "0.4s",
                            "&:hover": { transform: "scale(1.05)" },
                            animation: `${fadeInUp} 0.8s ease-out forwards`,
                            opacity: 0,
                            animationDelay: "0.6s",
                            }}
                    >
                    </Avatar>

                </Box>  
            </Box>
        </Box>
    )
}

export default Hero;