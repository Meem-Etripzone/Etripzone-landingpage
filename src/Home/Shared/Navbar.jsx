import { Box, Container, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { BsCart2 } from 'react-icons/bs';
import { HiArrowRightEndOnRectangle, HiOutlineBars3 } from 'react-icons/hi2';
// import { HiOutlineBars3 } from 'react-icons/hi2';
import Logo from '../../assets/logo7.png'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (

    <Grid container xs={3} sm={6} md={12}>
      <Grid item xs={12} sm={12} md={12}>
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
      <Box sx={{display:'flex'}}>
      <img src={Logo} alt="" />
    {/* <Typography sx={{mt:3,fontSize:'25px',fontFamily:'cursive', color:'GrayText'}}>Create the flying history</Typography> */}
      </Box>
      <Box sx={{display:'flex',flexDirection:'row-reverse',my:5,
        // backgroundColor:"#000080"
      }}>
      <button 
        
         ><HiArrowRightEndOnRectangle /> Register</button>
      </Box>

    </Box>
      </Grid>
    </Grid>
    // <nav>
    //   <div 
    //   className="nav-logo-container"
    //   style={{display:'flex',marginBottom:'4px'}}
    //   >
       
    //     <img src={Logo} alt="" />
    //   <Typography sx={{color:'black'}}>Create the flying history</Typography>
    //   </div>

    //   <div className="navbar-links-container">
    //     {/* <a href="">Home</a>
    //     <a href="">About</a>
    //     <a href="">Testimonials</a>
    //     <a href="">Contact</a>
    //     <a href="">
    //       <BsCart2 className="navbar-cart-icon" />
    //     </a> */}
    //    <button className="primary-button" 
        
    //     ><HiArrowRightEndOnRectangle /> Rejister</button>
    //   </div>
    //   <div className="navbar-menu-container">
    //     <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    //   </div>
    //   <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
    //     <Box
    //       sx={{ width: 250 }}
    //       role="presentation"
    //       onClick={() => setOpenMenu(false)}
    //       onKeyDown={() => setOpenMenu(false)}
    //     >
    //       <List>
    //         {menuOptions.map((item) => (
    //           <ListItem key={item.text} disablePadding>
    //             <ListItemButton>
    //               <ListItemIcon>{item.icon}</ListItemIcon>
    //               <ListItemText primary={item.text} />
    //             </ListItemButton>
    //           </ListItem>
    //         ))}
    //       </List>
    //       <Drawer />
    //     </Box>
    //   </Drawer>
    // </nav>
  )
}

export default Navbar
