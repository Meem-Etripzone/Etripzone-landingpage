
import { Box, Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';







const Footer = () => {



    return (

        <Grid container sx={{ bgcolor: '#001E17' }}>
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ pt: 5, mt: 7, color: '#ffffff' }} >
                    <Typography variant="h6" fontWeight="bold" mb={2}>Contact Us</Typography>
                    <Typography variant="body2" color="gray" mb={1}>Aerial Legend 11th Floor,</Typography>
                    <Typography variant="body2" color="gray" mb={1}>1080 CDA Avenue GEC Circle,</Typography>
                    <Typography variant="body2" color="gray" mb={1}>Chittagong</Typography>
                    <Typography variant="body2" color="gray" mb={1}>Email: info@etripzone.com</Typography>
                    <Typography variant="body2" color="gray" mb={1}>Phone: +880 1409965900</Typography>
                    <Box>
                        <FacebookIcon sx={{ color: 'gray', mr: 1 }} />
                        <LinkedInIcon sx={{ color: 'gray', mr: 1 }} />
                        <TwitterIcon sx={{ color: 'gray' }} />
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ pt: 5, mt: 7, color: '#ffffff' }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>Shortcuts</Typography>
                    <Typography variant="body2" color="gray" mb={1}>About Us</Typography>
                    <Typography variant="body2" color="gray" mb={1}>FAQ</Typography>
                    <Typography variant="body2" color="gray" mb={1}>Contact Us</Typography>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ pt: 5, mt: 7, color: '#ffffff' }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>Policy Links</Typography>
                    <Typography variant="body2" color="gray" mb={1}>Terms and Conditions</Typography>
                    <Typography variant="body2" color="gray" mb={1}>Privacy Policy</Typography>
                    <Typography variant="body2" color="gray" mb={1}>Help Center</Typography>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="body2" bgcolor="var(--white)" py={2} mt={2} fontSize={11} textAlign="center" borderTopLeftRadius={2} borderTopRightRadius={2} color="gray">
                    Copyright © 2024.etripzone. All rights reserved.
                </Typography>
            </Grid>
        </Grid>





    )
}

export default Footer
