import { Box, Typography, Button } from "@mui/material";

function CertificateCard({image, title, instructor, description, link, visible}) {
    return (
        <Box
            sx={{
                height: "100%",
                maxWidth: { xs: "100%", md: 270 },
                background: "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "transform 0.6s ease-out, opacity 0.6s ease-out, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 12px 35px rgba(25,118,210,0.25)",
                },
            }}
            >

            {/*  Image  */}
            <Box
                sx={{
                    width: "100%",
                    height: 200,
                    overflow: "hidden",
                }}
            >
                    <Box
                        component="img"
                        src={image}
                        alt={title}
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.4s ease",
                            "&:hover": { transform: "scale(1.05)" },
                        }}
                    />   
            </Box>

            {/*  Content  */}
            <Box sx={{ p: 2 }}>
                <Typography   
                    sx={{
                        fontSize: "1rem",
                        color: (theme) => `${theme.palette.primary.main}`,
                        textAlign: "left",
                        fontWeight: "bold",
                        mb: 1
                    }}
                >
                    { title }
                </Typography>

                <Typography
                    sx={{
                        textAlign: "left",
                        color: "rgba(54, 54, 54, 1)",
                        fontSize: 14,
                        mb: 1
                    }}
                >
                    Instructor: { instructor }
                </Typography>

                <Typography
                    sx={{
                        textAlign: "left",
                        fontSize: 14,
                        color: "#555555ce",
                        mb: 2
                    }}
                >
                    { description }
                </Typography>

                <Button
                    fullWidth
                    target="_blank"
                    sx={{
                        justifyContent: "flex-start",
                        pl: 0
                    }}
                    href={link}
                >
                    View Certificate →
                </Button>

            </Box>
        </Box>
    )
}

export default CertificateCard;