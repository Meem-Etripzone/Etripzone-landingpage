import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/logo1.png";
import img2 from "../../assets/logo1.png";
import img3 from "../../assets/logo1.png";
import img4 from "../../assets/logo1.png";
import { Box } from '@mui/material';


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
   sx={{marginTop:'300px'}}
   >
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
   </Box>
  )
}

export default KeyAirlines
