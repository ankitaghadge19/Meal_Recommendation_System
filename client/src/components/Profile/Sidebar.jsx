import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import MessageIcon from "@mui/icons-material/Message";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "#fad3c8",
        border: "0px 3px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List sx={{ flexGrow: 1 }}>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/profile">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText
                primary="Profile"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/profile">
              <ListItemIcon>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText
                primary="Notifications"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/listedbooks">
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText
                primary="Generated Meals"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/soldbooks">
              <ListItemIcon>
                <BeenhereIcon />
              </ListItemIcon>
              <ListItemText
                primary="Feed Back"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </nav>
    </Box>
  );
};

export default Sidebar;
