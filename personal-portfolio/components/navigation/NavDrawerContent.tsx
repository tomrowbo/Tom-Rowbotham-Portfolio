import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

interface ChildProps {
  handleDrawerToggle: () => void;
  navItems: string[];
}

const NavDrawerContent: React.FC<ChildProps> = ({
  handleDrawerToggle,
  navItems,
}) => {
  const logo = (
    <img
      src={"/logo.png"}
      width="100"
      height="100"
      className="d-inline-block align-top drawer-logo"
      alt="Tom Rowbotham logo"
    />
  );

  return (
    <Box
      color="white"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#041B2D", height: "100%" }}
    >
      {logo}
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center"}}>
              <ListItemText primaryTypographyProps={{fontSize: '18px'}}  primary={item}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NavDrawerContent;
