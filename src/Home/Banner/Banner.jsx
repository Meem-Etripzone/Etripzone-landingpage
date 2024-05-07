import React from 'react';
import banner from '../../assets/banner.jpg'
import { Box, Button, Checkbox, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Banner = () => {
  return (
    <div>
<div className="home-container">

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={banner} alt="" />
        </div>
        <Box className="login-form"
        sx={{
          // height:'400px',
          width:'350px',
          backgroundColor:'#ffffff',
          border:'2px solid #ffffff',
          zIndex: 10,
          borderRadius: 2,
          '& > :not(style)': { m: 1, width: '25ch' },
          paddingBottom:'40px'
        }}
        >
<Typography 
        style={{
            fontSize:'25px',
            textAlign:'start',
            fontWeight:'bold',
            // padding:'25px 15px',
            marginLeft:'50px',
            color:'black'
        }}
        >Already <br /> Using <span style={{color:'#990000'}}>Etrip</span>zone?</Typography>
          <TextField 
 
          id="email" label="Email" variant="standard" />
          <TextField id="password" label="Password" variant="standard" />

     <Button sx={{
      width:"370px",
      backgroundColor:"#000080",
      color:"#ffffff",
      
     }}
     className="primary-button"
     >Login</Button>

     <div style={{display:'flex', marginLeft:'50px'}}>
     <Typography
     sx={{color:'#6a6a6a',fontSize:'12px'}}
     >Don't have an account? </Typography>
    <a href=""style={{color:'#990000', fontSize:"12px"}}> Register Now</a>
     </div>
        </Box>
      </div>
    </div>
    </div>
  )
}

export default Banner
