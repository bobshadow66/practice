import React, { useState } from "react";
//import Logo from "../Assets/Logo.svg";

import {
  Home,
  Info,
  ShoppingCartRounded,
  PhoneRounded,
  CommentRounded,
  Menu
} from '@mui/icons-material'

import {
  Box,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      icon: <Home />,
    },
    {
      text: "About",
      icon: <Info />,
    },
    {
      text: "Testimonial",
      icon: <CommentRounded />,
    },
    {
      text: "Contact",
      icon: <PhoneRounded />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRounded />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
    {/*<img src={Logo} alt="Logo" />*/}
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#contact">Contact</a>
        <a href="#cart">
          <ShoppingCartRounded />
        </a>
        <button className="primary-button">Book Now</button>
      </div>
      <div className="navbar-menu-container">
        <Menu />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
