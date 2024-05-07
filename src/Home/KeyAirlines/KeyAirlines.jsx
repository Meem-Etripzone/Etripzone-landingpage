import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/logo1.png";
import img2 from "../../assets/logo1.png";
import img3 from "../../assets/logo1.png";
import img4 from "../../assets/logo1.png";
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
            <Grid container>
                <Grid item xs={6} sm={4} md={4}>
                    <Box sx={{
                        borderTop: '2px solid #E0E0E0',
                        height: '40px',
                        width: '430px',
                        color: '#E0E0E0', marginTop: '15px'
                    }}>

                    </Box>
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <Typography sx={{ fontSize: '20px', }}>Key Airlines Partner</Typography>
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
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
            <div className="md:hidden sm:hidden hidden lg:inline-block max-h-[40px] max-w-[40px]  border-r-2 border-[#C8BCAF]"></div>
            <div >

                <Slider {...settings}>
                    <div >
                        <img src={img1} alt="" />
                    </div>
                    <div >
                        <img src={img2} alt="" />
                    </div>
                    <div >
                        <img src={img3} alt="" />
                    </div>
                    <div >
                        <img src={img4} alt="" />
                    </div>
                    <div >
                        <img src={img1} alt="" />
                    </div>
                    <div >
                        <img src={img2} alt="" />
                    </div>
                    <div >
                        <img src={img3} alt="" />
                    </div>
                    <div >
                        <img src={img1} alt="" />
                    </div>
                    <div >
                        <img src={img2} alt="" />
                    </div>
                    <div >
                        <img src={img3} alt="" />
                    </div>
                    <div >
                        <img src={img4} alt="" />
                    </div>
                    <div >
                        <img src={img1} alt="" />
                    </div>
                    <div >
                        <img src={img2} alt="" />
                    </div>
                    <div >
                        <img src={img3} alt="" />
                    </div>
                </Slider>
            </div>
        </Box >
    )
}

export default KeyAirlines
