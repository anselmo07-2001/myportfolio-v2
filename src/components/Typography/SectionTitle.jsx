import { Typography } from "@mui/material";

function SectionTitle({ children, visible, sx }) {
    return (
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
                ...sx
            }}
        >
                { children }
        </Typography>
    )
}

export default SectionTitle;