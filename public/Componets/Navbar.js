import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bd";
import {HiOutlineBars3} from "react-icons/h2";
import { 
    Box, 
    Drawer, 
    ListItem, 
    ListenItemButton, 
    ListItemIcon, 
    ListItemText,
} from "@mui/matieral";
import {HomeIcon, InfoIcon} from "@mui/icons-materials/Home";
import infoIcon from "@mui/icons-materials/Info";
import CommentRoundedIcon from "@mui/icons-materials/commentRounded";
import PhoneRoundedIcon from "@mui/icons-materials/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-materials/ShoppingCartRounded";

const Navbar = () => {
    
    const [openMenu,setOpenMenu] = useState(false)
    const menuOptions = [
       {
        text: "Home",
        icon: <HomeIcon/>
       }, 
       {
        text: "About",
        icon: <InfoIcon/>
       }, 
       {
        text: "Testimonials",
        icon: <CommentRoundedIcon/>
       }, 
       {
        text: "Contact",
        icon: <PhoneRoundedIcon/>
       }, 
       {
        text: "Cart",
        icon: <ShoppingCartRoundedIcon/>
       }, 
    ];

    return <nav></nav>;
};

export default Navbar;