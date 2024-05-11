
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/Biman-Bangladesh2.png";
import img2 from "../../assets/novoair2.png";
import img3 from "../../assets/us bangla1.png";
import img4 from "../../assets/novoair2.png";
import { Box, Grid, Typography } from '@mui/material';


const KeyAirlines = () => {


    const settings = {
        dots: false,
        infinite: true,
        speed: 20000,
        autoplay: true,
        arrows: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 2,
                },
            },
        ]
    };


    return (

        <Box sx={{ marginTop: '300px', px: 4 }}>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            borderTop: '2px solid #E0E0E0',
                            height: '40px',
                            width: '100%',
                            color: '#E0E0E0',
                            marginTop: '15px',
                            display: { xs: 'none', md: 'block' }
                        }}
                    ></Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: { xs: '15px', md: '20px' }, color: 'black' }}
                    >
                        Key Airlines Partner
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            borderTop: '2px solid #E0E0E0',
                            height: '40px',
                            width: '100%',
                            color: '#E0E0E0',
                            marginTop: '15px',
                            display: { xs: 'none', md: 'block' }
                        }}
                    ></Box>
                </Grid>
            </Grid>

            <Box sx={{ mt: { xs: 6, sm: 0 } }}>
                <Slider {...settings}>
                    <Box sx={{ pr: 3 }}>
                        <img src={img1} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>
                    <Box sx={{ pr: 4 }}>
                        <img src={img2} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>
                    <Box sx={{ pt: 4, pr: 4 }}>
                        <img src={img3} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>
                    <Box sx={{ pr: 4 }}>
                        <img src={img4} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>

                    <Box sx={{ pr: 3 }}>
                        <img src={img1} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>
                    <Box sx={{ pr: 4 }}>
                        <img src={img2} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>
                    <Box sx={{ pt: 4, pr: 4 }}>
                        <img src={img3} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>
                    <Box sx={{ pr: 4 }}>
                        <img src={img4} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>
                </Slider>
            </Box>
        </Box>





    )
}

export default KeyAirlines
