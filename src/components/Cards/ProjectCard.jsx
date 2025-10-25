import { Box, Button, Typography } from "@mui/material";

function ProjectCard({ title, description, image, tech, live, code }) {
  return (
    <Box
      sx={{
        height: "100%",
        maxWidth: { xs: "100%", sm: 400, md: 500 },
        background: "white",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 12px 35px rgba(25,118,210,0.25)",
        },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: "100%",
          height: 300,
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

      {/* Content */}
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" sx={{ color: "#1976d2", mb: 1 }}>
          {title}
        </Typography>
        <Typography sx={{ color: "#555", mb: 3, lineHeight: 1.6 }}>
          {description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mb: 3,
          }}
        >
          {tech.map((t, i) => (
            <Box
              key={i}
              component="span"
              sx={{
                bgcolor: "#e3f2fd",
                color: "#1976d2",
                fontSize: "0.9rem",
                fontWeight: 500,
                px: 2,
                py: 0.5,
                borderRadius: "20px",
              }}
            >
              {t}
            </Box>
          ))}
        </Box>

        {/* Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button
            variant="contained"
            href={live}
            target="_blank"
            sx={{
              bgcolor: "#1976d2",
              borderRadius: "25px",
              px: 3,
              py: 1,
              "&:hover": { bgcolor: "#0d47a1" },
            }}
          >
            Live Demo
          </Button>
          <Button
            target="_blank"
            href={code}
            sx={{
              color: "#1976d2",
              fontWeight: 600,
              "&:hover": { color: "#0d47a1" },
            }}
          >
            View Code →
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectCard;