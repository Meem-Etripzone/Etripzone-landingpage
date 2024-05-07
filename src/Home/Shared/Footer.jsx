import { Box, Container, Grid, Typography } from "@mui/material";


const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#000080', pt: 5, mt: 7, color: '#ffffff' }}>
            <Container>
                <Grid container>
                    <Grid item xs={6} sm={4} md={4}>
                        <Box>
                            <Typography
                                sx={{ fontSize: { xs: 12, md: 14 }, color: 'var(--white)' }}
                                noWrap
                            >
                                Contact Us
                            </Typography>
                            <Typography
                                sx={{ fontSize: { xs: 10, md: 12 }, color: 'var(--white)' }}
                                noWrap
                            >
                                Aerial Legend 11th Floor,
                            </Typography>

                            <Typography
                                sx={{ fontSize: { xs: 10, md: 12 }, color: 'var(--white)' }}
                                noWrap
                            >
                                1080 CDA Avenue GEC Circle,
                            </Typography>

                            <Typography
                                sx={{ fontSize: { xs: 10, md: 12 }, color: 'var(--white)' }}
                                noWrap
                            >
                                Chittagong
                            </Typography>
                            <Typography
                                sx={{ fontSize: { xs: 10, md: 12 }, color: 'var(--white)' }}
                                noWrap
                            >
                                Email: info@etripzone.com
                            </Typography>
                            <Typography
                                sx={{ fontSize: { xs: 10, md: 12 }, color: 'var(--white)' }}
                                noWrap
                            >
                                Phone: +880 1409965900
                            </Typography>
                        </Box>
                    </Grid>
                    {/* <Grid item xs={6} sm={4} md={3}>
                        <Box>
                            <Typography
                                sx={{ fontSize: { xs: 12, md: 14 }, color: 'var(--white)' }}
                                noWrap
                            >
                                Office
                            </Typography>



                        </Box>
                    </Grid> */}
                    <Grid item xs={6} sm={4} md={4}>
                        <Box>
                            <Typography
                                sx={{ fontSize: { xs: 12, md: 14 }, color: 'var(--white)' }}
                                noWrap
                            >
                                Company
                            </Typography>
                            <Typography
                                sx={{ fontSize: { xs: 10, md: 12 }, color: 'var(--white)' }}
                                noWrap
                            >
                                About Us
                            </Typography>
                            <Typography
                                sx={{ fontSize: { xs: 10, md: 12 }, color: 'var(--white)' }}
                                noWrap
                            >
                                Privacy Policy
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
                        <Box>
                            <Typography
                                sx={{ fontSize: { xs: 12, md: 14 }, color: 'var(--white)' }}
                                noWrap
                            >
                                Help
                            </Typography>
                            <Typography
                                sx={{ fontSize: { xs: 10, md: 12 }, color: 'var(--white)' }}
                                noWrap
                            >
                                FAQ
                            </Typography>
                            <Typography
                                sx={{ fontSize: { xs: 10, md: 12 }, color: 'var(--white)' }}
                                noWrap
                            >
                                Center
                            </Typography>
                            <Typography
                                sx={{ fontSize: { xs: 10, md: 12 }, color: 'var(--white)' }}
                                noWrap
                            >
                                Terms & Condition
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
                    }}
                >
                    Copyright © 2024.etripzone. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;