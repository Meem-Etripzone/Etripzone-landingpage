import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/Biman-Bangladesh.png";
import img2 from "../../assets/novoair.png";
import img3 from "../../assets/us bangla1.png";
import img4 from "../../assets/novoair.png";
import { Box, Grid, Typography } from '@mui/material';


const KeyAirlines = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 10000,
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
        ],
    };
  return (
    <Box
    sx={{ marginTop: '300px' }}

>
    <Grid container xs={3} sm={6} md={12}>
        <Grid item xs={4} sm={4} md={4}>
            <Box sx={{
                borderTop: '2px solid #E0E0E0',
                height: '40px',
                width: '430px',
                color: '#E0E0E0', marginTop: '15px',
            }}>

            </Box>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
            <Typography sx={{ fontSize: '20px',color:'black' }}>Key Airlines Partner</Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
            <Box sx={{
                borderTop: '2px solid #E0E0E0',
                height: '40px',
                width: '400px',
                color: '#E0E0E0',
                marginTop: '15px'
            }}>

            </Box>
        </Grid>
    </Grid>

    <div >

<Slider {...settings}>
    <Box sx={{pr:3}}>
    <img src={img1} alt="" />    
    </Box>
   
    <Box sx={{pr:4}}>
    <img src={img2} alt="" />    
    </Box>
    <Box sx={{pt:4,pr:4}}>
    <img src={img3} alt="" />    
    </Box>
    <Box sx={{pr:4}}>
    <img src={img4} alt="" />    
    </Box>
    <Box sx={{pr:3}}>
    <img src={img1} alt="" />    
    </Box>
    <Box sx={{pr:4}}>
    <img src={img2} alt="" />    
    </Box>
    <Box sx={{pt:4,pr:4}}>
    <img src={img3} alt="" />    
    </Box>
    <Box sx={{pr:4}}>
    <img src={img4} alt="" />    
    </Box>
    <Box sx={{pr:4}}>
    <img src={img2} alt="" />    
    </Box>
    <Box sx={{pt:4,pr:4}}>
    <img src={img3} alt="" />    
    </Box>
    <Box sx={{pr:4}}>
    <img src={img4} alt="" />    
    </Box>
    <Box sx={{pr:3}}>
    <img src={img1} alt="" />    
    </Box>
    <Box sx={{pr:4}}>
    <img src={img2} alt="" />    
    </Box>
    <Box sx={{pt:4,pr:4}}>
    <img src={img3} alt="" />    
    </Box>
</Slider>
</div>
</Box >
  )
}

export default KeyAirlines
