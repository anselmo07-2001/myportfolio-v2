import { Typography } from "@mui/material";

function SectionSubtitle({children, visible, sx}) {
    return (
        <Typography
            variant="subtitle1"
            sx={{ 
                mb: 10, 
                color: "#555",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease-out 0.2s",
                ...sx
            }}
        >
            { children }
        </Typography>
    )
}

export default SectionSubtitle;