import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const BannerLogin = () => {
  // const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
  // const avatarStyle={backgroundColor:'#1bbd7e'}
  // const btnstyle={margin:'8px 0'}
   
  return (

    // <Grid>
    //         <Paper elevation={10} style={paperStyle}>
    //             <Grid align='center'>
    //                  <Avatar style={avatarStyle}>
    //                   {/* <LockOutlinedIcon /> */}
    //                   </Avatar>
    //                 <h2>Sign In</h2>
    //             </Grid>
    //             <TextField label='Username' placeholder='Enter username' fullWidth required/>
    //             <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
    //             <FormControlLabel
    //                 control={
    //                 <Checkbox
    //                     name="checkedB"
    //                     color="primary"
    //                 />
    //                 }
    //                 label="Remember me"
    //              />
    //             <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
    //             <Typography >
    //                  <Link href="#" >
    //                     Forgot password ?
    //             </Link>
    //             </Typography>
    //             <Typography > Do you have an account ?
    //                  <Link href="#" >
    //                     Sign Up 
    //             </Link>
    //             </Typography>
    //         </Paper>
    //     </Grid>
    // <div>
    //   <Box sx={{ mx: "auto", width: 400 }}>
    //   <Paper>
    //     <Box
    //       sx={{
    //         display: "grid",
    //         gap: 2,
    //         mt: 1,
    //         p: 3,
    //         gridTemplateColumns: "repeat(1, 1fr)",
    //       }}
    //     >
    //       <TextField label="Username/Email" autoFocus />
    //       <TextField label="Password" type={"password"} />
    //       <Box sx={{ display: "flex", gap: 2, flexDirection: "row-reverse" }}>
    //         <Button
    //           variant="contained"
    //           color="primary"
    //           onClick={() => history.push("/")}
    //         >
    //           Login
    //         </Button>
    //         <Link
    //           href="#"
    //           onClick={(event) => {
    //             event.preventDefault();
    //             history.push("/recovery");
    //           }}
    //         >
    //           Forgot password?
    //         </Link>
    //       </Box>
    //     </Box>
    //   </Paper>
    // </Box>
    // </div>

<Box
      component="form"
      // sx={{
      //   '& > :not(style)': { m: 1, width: '25ch' },
      // }}
      // noValidate
      // autoComplete="off"
    >
      <TextField id="email" label="Email" variant="outlined" />
     
    </Box>



  
  )
}

export default BannerLogin
