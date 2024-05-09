import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const ExploreWorld = () => {
  return (
    
    <Box>
         <Grid container xs={3} sm={6} md={12}>
           <Box >
           <Typography style={{}} sx={{ fontSize: '25px', fontWeight: 'bold', color:'black', mb:4,textAlign:'center' }}>Explore World</Typography>
           </Box>
            <Typography  sx={{color:'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident, maiores rerum sapiente molestias nam modi explicabo nobis officiis vitae est totam rem voluptas magni quas numquam fugiat fuga eum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident, maiores rerum sapiente molestias nam modi explicabo nobis officiis vitae est totam rem voluptas magni quas numquam fugiat fuga eum</Typography>
           </Grid>
    </Box>
  )
}

export default ExploreWorld
