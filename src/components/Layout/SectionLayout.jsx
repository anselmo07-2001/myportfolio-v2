import { Box } from "@mui/material";
import React from "react";

const SectionLayout = React.forwardRef(({ children, sx, id }, ref) => {
  return (
    <Box
      ref={ref}
      component="section"
      id={id}
      sx={{
        py: { xs: 10, md: 12 },
        px: { xs: 3, md: 0 },
        ...sx,
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", textAlign: "center" }}>
        {children}
      </Box>
    </Box>
  );
});

export default SectionLayout;