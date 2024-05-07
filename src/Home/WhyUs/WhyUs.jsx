import { Box, Grid, Typography } from '@mui/material';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import React from 'react';

const WhyUs = () => {
    return (
        <Box sx={{ mt: 10 }}>
            <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>Why <span style={{ color: '#990000' }}>Etrip</span>Zone</Typography>
            <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident, maiores rerum sapiente molestias nam modi explicabo nobis officiis vitae est totam rem voluptas magni quas numquam fugiat fuga eum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident, maiores rerum sapiente molestias nam modi explicabo nobis officiis vitae est totam rem voluptas magni quas numquam fugiat fuga eum</Typography>

            <Grid container>
                <Grid item xs={6} sm={4} md={3}>
                    <ForumOutlinedIcon />
                </Grid>
                <Grid item xs={6} sm={4} md={3}></Grid>
                <Grid item xs={6} sm={4} md={3}></Grid>
                <Grid item xs={6} sm={4} md={3}></Grid>

            </Grid>
        </Box>
    );
};

export default WhyUs;