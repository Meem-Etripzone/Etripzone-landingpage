import { Alert, AlertTitle, Box, Button, CircularProgress, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';

const BannerModal = () => {


  return (

    <div>
        <Box 
        sx={{
            bgcolor:'#ffff',
            width:"350px",
            height: '350px',
            // display: 'flex',
            border: 'solid #fffff',
            borderRadius: '10px',
            color: '#777777',
           
            // alignItems:'flex-start'
          }}
        >
            <Grid>
                <Grid md={12} width="100%">
                    <Box>
                        <Container>
                            <Stack direction="row" justifyContent="space-between" py={1}>
<Stack  direction={{ xs: 'column', sm: 'row' }}
    alignItems="center"
    spacing={2}>
        <Typography 
        style={{
            fontSize:'25px',
            textAlign:'start',
            fontWeight:'bold',
            padding:'5px 15px'
        }}
        >Already <br /> Using <span style={{color:'#990000'}}>Etrip</span>zone?</Typography>

</Stack>
                            </Stack>
                        </Container>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </div>
    
  )
}

export default BannerModal
