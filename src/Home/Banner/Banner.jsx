import React from 'react';
import banner from '../../assets/banner.jpg'
import { Box, Button, Checkbox, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Banner = () => {
  return (

<Grid container xs={3} sm={6} md={12}>
<Grid sx={{height:{xs:'150px', md:'400px'}}} xs={12}>
<Box >
    <img  src={banner} alt="" />
  </Box>
 <Grid >
 <Box sx={{        // height:'400px',
        width: {xs:'240px',md:'350px'},
        backgroundColor:'#ffffff',
      border:'2px solid #ffffff',       zIndex: 10,
     borderRadius: 2,
  '& > :not(style)': { m: 1, width: '25ch' },
      paddingBottom:{md:'40px'},
      position:'relative',
      // left:'700px',
      // bottom:'400px'
      left: {xs:'30px', sm:'300px', md:'700px'},
      bottom:{xs:'120px', sm:'290px',md: '400px'}
      }}>
      
    <Typography
    sx={{
      
      fontSize:{xs:'15px', md:'25px'},
      textAlign:{xs:'start', md:'center'},
      fontWeight:'bold',
      marginLeft:{xs:'6px',md:'50px'},
      color:'black'
    }}
   >
    Already <br /> Using <span style={{color:'#990000'}}>Etrip</span>zone?  
    </Typography>

    <TextField 
   
 
           id="email" label="Email" variant="standard" />
           <TextField id="password" label="Password" variant="standard" />
 
      <Button sx={{
       width:"370px",
       backgroundColor:"#001E17",
       color:"#ffffff",
       
      }}
      className="primary-button"
      >Login</Button>
      <Box style={{marginLeft:{md:'50px'}}} sx={{display:'flex', justifyContent:'center'}}>
      <Typography
     sx={{color:'#6a6a6a',fontSize:'12px'}}
     >Don't have an account? </Typography>
    <a href=""style={{color:'#990000', fontSize:"12px"}}> Register Now</a>
      </Box>
  </Box>
 </Grid>
</Grid>
</Grid>




//     <div>
// <div className="home-container">

//       <div className="home-banner-container">
//         <div className="home-bannerImage-container">
//           <img src={banner} alt="" />
//         </div>
//         <Box className="login-form"
//         sx={{
//           // height:'400px',
//           width:'350px',
//           backgroundColor:'#ffffff',
//           border:'2px solid #ffffff',
//           zIndex: 10,
//           borderRadius: 2,
//           '& > :not(style)': { m: 1, width: '25ch' },
//           paddingBottom:'40px'
//         }}
//         >
// <Typography 
//         style={{
//             fontSize:'25px',
//             textAlign:'start',
//             fontWeight:'bold',
//             // padding:'25px 15px',
//             marginLeft:'50px',
//             color:'black'
//         }}
//         >Already <br /> Using <span style={{color:'#990000'}}>Etrip</span>zone?</Typography>
//           <TextField 
 
//           id="email" label="Email" variant="standard" />
//           <TextField id="password" label="Password" variant="standard" />

//      <Button sx={{
//       width:"370px",
//       backgroundColor:"#001E17",
//       color:"#ffffff",
      
//      }}
//      className="primary-button"
//      >Login</Button>

//      <div style={{display:'flex', marginLeft:'50px'}}>
//      <Typography
//      sx={{color:'#6a6a6a',fontSize:'12px'}}
//      >Don't have an account? </Typography>
//     <a href=""style={{color:'#990000', fontSize:"12px"}}> Register Now</a>
//      </div>
//         </Box>
//       </div>
//     </div>
//     </div>
  )
}

export default Banner
