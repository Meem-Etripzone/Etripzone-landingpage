import { Box, Grid, Typography } from '@mui/material';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
const WhyUs = () => {
  return (
    <Box sx={{ mt: 10 }}>
           <Grid container xs={3} sm={6} md={12}>
           <Box>
           <Typography style={{}} sx={{ fontSize: '25px', fontWeight: 'bold', color:'black', mb:4 }}>Why <span style={{ color: '#990000' }}>Etrip</span>Zone</Typography>
           </Box>
            <Typography  sx={{color:'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident, maiores rerum sapiente molestias nam modi explicabo nobis officiis vitae est totam rem voluptas magni quas numquam fugiat fuga eum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident, maiores rerum sapiente molestias nam modi explicabo nobis officiis vitae est totam rem voluptas magni quas numquam fugiat fuga eum</Typography>
           </Grid>

            <Grid container   sx={{mt:8}} xs={3} sm={6} md={12} rowSpacing={2}>
                <Grid item xs={12} sm={6} md={3} >
                <Box sx={{height:'120px', width:'270px',backgroundColor:'gray',p:2,borderRadius:'10px'}}>
                <QuestionAnswerOutlinedIcon  sx={{color:'white', height:'50px',width:'50px',}}/>
                <Typography sx={{color:'white'}}>24/7 support</Typography>
                </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3} >
                <Box sx={{height:'120px', width:'270px',backgroundColor:'#004334',p:2,borderRadius:'10px'}}>
                <StickyNote2Icon  sx={{color:'white', height:'50px',width:'50px',}}/>
                <Typography sx={{color:'white'}}>Easy Booking</Typography>
                </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3} >
                <Box sx={{height:'120px', width:'270px',backgroundColor:'#FDDA0D',p:2,borderRadius:'10px'}}>
                <FavoriteBorderIcon  sx={{color:'white', height:'50px',width:'50px',}}/>
                <Typography sx={{color:'white'}}>We Care</Typography>
                </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3} >
                <Box sx={{height:'120px', width:'270px',backgroundColor:'#4C8175',p:2,borderRadius:'10px'}}>
                <CardGiftcardIcon  sx={{color:'white', height:'50px',width:'50px',}}/>
                <Typography sx={{color:'white'}}>Great Rewards</Typography>
                </Box>
                </Grid>

                {/* <Grid item xs={6} sm={3} md={3} sx={{height:'120px', width:'50px',backgroundColor:'#004334',p:2,borderRadius:'10px'}}>
                <StickyNote2Icon  sx={{color:'black', height:'50px',width:'50px', mx:'10px'}}/>
                <Typography sx={{color:'black'}}>Easy Booking</Typography>
                </Grid> */}
                {/* <Grid item xs={6} sm={3} md={3} sx={{height:'120px', width:'50px',backgroundColor:'yellow',p:2,borderRadius:'10px'}}>
                <StickyNote2Icon  sx={{color:'black', height:'50px',width:'50px',}}/>
                <Typography sx={{color:'black'}}>Easy Booking</Typography>
                </Grid> */}
                {/* <Grid item xs={6} sm={3} md={3} sx={{height:'120px', width:'50px',backgroundColor:'green',p:2,borderRadius:'10px'}}>
                <StickyNote2Icon  sx={{color:'black', height:'50px',width:'50px',}}/>
                <Typography sx={{color:'black'}}>Easy Booking</Typography>




                
                </Grid> */}

            </Grid>
        </Box>
  )
}

export default WhyUs
