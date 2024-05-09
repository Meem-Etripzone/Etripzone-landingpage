import React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';




// const useStyles = makeStyles((theme) => ({
//     footer: {
//       backgroundColor: theme.palette.background.default,
//       padding: theme.spacing(3),
//       marginTop: 'auto',
//     },
//   }));

const Footer = () => {
    // const classes = useStyles();


  return (
<Grid container>
       <Grid item xs={4} sm={6} md={12}>
       <Box sx={{ bgcolor: '#001E17', pt: 5, mt: 7, color: '#ffffff', width:1 }} >
    <Container>
        <Grid container>
            <Grid item xs={12} sm={6} md={4}>
                <Box>
                    <Typography
                        sx={{ fontSize: { xs: 12, md: 16 }, fontWeight:'bold', color: 'var(--white)',mb:2 }}
                        noWrap
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
                        noWrap
                    >
                        Aerial Legend 11th Floor,
                    </Typography>

                    <Typography
                        sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
                        noWrap
                    >
                        1080 CDA Avenue GEC Circle,
                    </Typography>

                    <Typography
                        sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
                        noWrap
                    >
                        Chittagong
                    </Typography>
                    <Typography
                        sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
                        noWrap
                    >
                        Email: info@etripzone.com
                    </Typography>
                    <Typography
                        sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
                        noWrap
                    >
                        Phone: +880 1409965900
                    </Typography>
                    <Typography sx={{color:'gray'}}> <FacebookIcon /> <LinkedInIcon /> <TwitterIcon /></Typography>
                </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
                <Box>
                    <Typography
                       sx={{ fontSize: { xs: 12, md: 16 }, fontWeight:'bold', color: 'var(--white)',mb:2 }}
                        noWrap
                    >
                        Shortcuts
                    </Typography>
                    <Typography
                        sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
                        noWrap
                    >
                        About Us
                    </Typography>
                    <Typography
                        sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
                        noWrap
                    >
                        FAQ
                    </Typography>
                    <Typography
                        sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
                        noWrap
                    >
                        Contact Us
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box>
                    <Typography
                       sx={{ fontSize: { xs: 12, md: 16 }, fontWeight:'bold', color: 'var(--white)',mb:2 }}
                        noWrap
                    >
                    Policy Links
                    </Typography>
                    <Typography
                        sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
                        noWrap
                    >
                        Terms and Conditions
                    </Typography>
                    <Typography
                        sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
                        noWrap
                    >
                        Privacy Policy
                    </Typography>
                    <Typography
                        sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
                        noWrap
                    >
                    Help Center
                    </Typography>
                </Box>
            </Grid>
        </Grid>
        <Typography
            sx={{
                bgcolor: 'var(--white)',
                py: 2,
                mt: 2,
                fontSize: 11,
                textAlign: 'center',
                borderTopLeftRadius: 2,
                borderTopRightRadius: 2,
                color:'gray'
            }}
        >
            Copyright © 2024.etripzone. All rights reserved.
        </Typography>
    </Container>
</Box>
       </Grid>
    </Grid>



//  <footer className={classes.footer}>
//       <Container maxWidth="lg">
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <Typography variant="body1" align="center">
//               Your footer content goes here
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </footer>



//     <Grid container>
//        <Grid item xs={4} sm={6} md={12}>
//        <Box sx={{ bgcolor: '#001E17', pt: 5, mt: 7, color: '#ffffff', width:1 }} >
//     <Container>
//         <Grid container>
//             <Grid item xs={12} sm={6} md={4}>
//                 <Box>
//                     <Typography
//                         sx={{ fontSize: { xs: 12, md: 16 }, fontWeight:'bold', color: 'var(--white)',mb:2 }}
//                         noWrap
//                     >
//                         Contact Us
//                     </Typography>
//                     <Typography
//                         sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
//                         noWrap
//                     >
//                         Aerial Legend 11th Floor,
//                     </Typography>

//                     <Typography
//                         sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
//                         noWrap
//                     >
//                         1080 CDA Avenue GEC Circle,
//                     </Typography>

//                     <Typography
//                         sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
//                         noWrap
//                     >
//                         Chittagong
//                     </Typography>
//                     <Typography
//                         sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
//                         noWrap
//                     >
//                         Email: info@etripzone.com
//                     </Typography>
//                     <Typography
//                         sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
//                         noWrap
//                     >
//                         Phone: +880 1409965900
//                     </Typography>
//                     <Typography sx={{color:'gray'}}> <FacebookIcon /> <LinkedInIcon /> <TwitterIcon /></Typography>
//                 </Box>
//             </Grid>
            
//             <Grid item xs={12} sm={6} md={4}>
//                 <Box>
//                     <Typography
//                        sx={{ fontSize: { xs: 12, md: 16 }, fontWeight:'bold', color: 'var(--white)',mb:2 }}
//                         noWrap
//                     >
//                         Shortcuts
//                     </Typography>
//                     <Typography
//                         sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
//                         noWrap
//                     >
//                         About Us
//                     </Typography>
//                     <Typography
//                         sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
//                         noWrap
//                     >
//                         FAQ
//                     </Typography>
//                     <Typography
//                         sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
//                         noWrap
//                     >
//                         Contact Us
//                     </Typography>
//                 </Box>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//                 <Box>
//                     <Typography
//                        sx={{ fontSize: { xs: 12, md: 16 }, fontWeight:'bold', color: 'var(--white)',mb:2 }}
//                         noWrap
//                     >
//                     Policy Links
//                     </Typography>
//                     <Typography
//                         sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
//                         noWrap
//                     >
//                         Terms and Conditions
//                     </Typography>
//                     <Typography
//                         sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
//                         noWrap
//                     >
//                         Privacy Policy
//                     </Typography>
//                     <Typography
//                         sx={{ fontSize: { xs: 10, md: 12 }, color: 'gray' }}
//                         noWrap
//                     >
//                     Help Center
//                     </Typography>
//                 </Box>
//             </Grid>
//         </Grid>
//         <Typography
//             sx={{
//                 bgcolor: 'var(--white)',
//                 py: 2,
//                 mt: 2,
//                 fontSize: 11,
//                 textAlign: 'center',
//                 borderTopLeftRadius: 2,
//                 borderTopRightRadius: 2,
//                 color:'gray'
//             }}
//         >
//             Copyright © 2024.etripzone. All rights reserved.
//         </Typography>
//     </Container>
// </Box>
//        </Grid>
//     </Grid>
  )
}

export default Footer
