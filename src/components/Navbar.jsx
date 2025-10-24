import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Icon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";


function Navbar() {
  const [open, setOpen] = useState(false);

  // menu items (for desktop + mobile)
  const menuItems = ["Home", "About", "Skills", "Projects", "Certification", "Contact"];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar 
        position="sticky"
        sx={{
          backgroundImage: (theme) => `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
          boxShadow: "none",
          py: 0.5,
        }}>
          <Toolbar>
              <Typography 
                variant="h6"
                sx={{
                    flexGrow: 1,
                    fontWeight: "bold",
                    letterSpacing: 1,
                    cursor: "pointer",
                }}
                onClick={() => {
                  window.scrollTo(0, 0);       
                  window.location.reload(); 
                }}
              >
                  Anselmo Rivera
              </Typography>

              <Box sx={{ display: {xs: "none", md: "flex"}, gap: 2}}>
                  { menuItems.map((item) => (
                      <Button
                        onClick={() => handleScroll(item)}
                        key={item}
                        color="inherit"
                        sx={{
                            position: "relative",
                            fontWeight: "500",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              width: "0%",
                              height: "2px",
                              bottom: 0,
                              left: 0,
                              backgroundColor: "#fff",
                              transition: "width 0.3s ease-in-out",
                            },
                            "&:hover::after": {
                              width: "100%",
                            },
                        }}
                      >
                        {item}
                      </Button>
                  ))}
              </Box>

              <IconButton
                  color="inherit"
                  edge="end"
                  sx={{ display: {xs: "block", md: "none" }}}
                  onClick={() => setOpen(true)}
              >
                  <MenuIcon />
              </IconButton>

          </Toolbar>
      </AppBar>

      <Drawer
          anchor="left"
          open={ open }
          onClose={() => setOpen(false)}
          slotProps={{
             paper: {
                sx: {
                   width: "100%",
                   height: "100vh",
                   bgcolor: (theme) => `${theme.palette.primary.dark}`,
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center",
                   position: "relative",
                   p: 3
                },
                elevation: 0,
             }
          }}
      >
          <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                color: "white",
                zIndex: 2,
              }}
              aria-label="close menu"
          >
              <CloseIcon />
          </IconButton>
     
          <List 
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              width: "100%",
              textAlign: "center",
            }}  
          >
              { menuItems.map((text) => (
                  <ListItem 
                    key={text} 
                    disablePadding
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                      <ListItemButton
                          onClick={() => {
                            handleScroll(text);
                            setOpen(false);      
                          }}
                          sx={{
                            color: "white",
                            justifyContent: "center",
                            py: 2,
                            "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
                          }}
                      >
                            <ListItemText 
                                primary={text} 
                                slotProps={{
                                  primary: {
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                    component: "span",
                                  },
                                }}
                                sx={{
                                  textAlign: "center",
                                  ".MuiTypography-root": {
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                  },
                                }}
                            />
                      </ListItemButton>
                  </ListItem>
              ))}
          </List>  


      </Drawer>
    </>
  );
}

export default Navbar;
