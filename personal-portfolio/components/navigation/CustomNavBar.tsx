import {
  AppBar,
  Box,
  Button, createTheme,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Container from "react-bootstrap/Container";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawerContent from "./NavDrawerContent";
import React from "react";

interface ChildProps {
  container: (() => any) | undefined;
}

const CustomNavBar: React.FC<ChildProps> = ({ container }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const logoSource = "/logo.png";
  const drawerWidth = 240;
  const navItems = ["Home", "About", "Projects", "Contact"];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Baloo 2',
      ].join(','),
    }
  });

  return (
    <div>
      <AppBar
        className="appbar"
        component="nav"
        color= "transparent"
        position="sticky"
        elevation={0}
        sx={{ bgcolor: "#041B2D"}}
      >
        <Container>
          <Toolbar disableGutters>
            <Box
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <img
                src={logoSource}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Tom Rowbotham logo"
              />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                color: "white",
              }}
            >
              <IconButton
                size="large"
                aria-label="Navigation drawer button"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

            </Box>
            <Box
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
              }}
            >
              <img
                src={logoSource}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Tom Rowbotham logo"
              />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navItems.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, pl: 6, pr: 6, color: "white", display: "block" }}
                  size="large"
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <NavDrawerContent
            handleDrawerToggle={() => handleDrawerToggle()}
            navItems={navItems}
          />
        </Drawer>
      </Box>
    </div>
  );
};

export default CustomNavBar;
