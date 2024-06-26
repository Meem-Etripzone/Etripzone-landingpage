import { Box, Container, Grid, Typography } from '@mui/material';
import atab from '../../assets/atab1.png';
import iata from '../../assets/iata1.png';
import toab from '../../assets/toab1.png';
import bimanbangladesh from '../../assets/Biman-Bangladesh3.png';

const WhyUs = () => {
    return (

        <Box sx={{ mt: 10, p: 4, mx: 4 }}>
            <Grid container spacing={2}>
                <Grid item>
                    <Box sx={{ py: 5, color: 'black', }}>
                        <Container>
                            <Typography variant="h6" fontWeight="bold" mb={4} textAlign="center">Why <span style={{ color: '#990000' }}>Etrip</span>Zone</Typography>
                            <Typography color="black">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident, maiores rerum sapiente molestias nam modi explicabo nobis officiis vitae est totam rem voluptas magni quas numquam fugiat fuga eum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident, maiores rerum sapiente molestias nam modi explicabo nobis officiis vitae est totam rem voluptas magni quas numquam fugiat fuga eum
                            </Typography>
                        </Container>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ height: '120px', width: '100%', p: 2, borderRadius: '10px', boxShadow: 1 }}>
                                <img src={atab} alt="ATAB" style={{ maxWidth: '100%', height: 'auto' }} />
                                <Typography color="gray" textAlign="center">Membership</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ height: '120px', width: '100%', p: 2, borderRadius: '10px', boxShadow: 1 }}>
                                <img src={iata} alt="IATA" style={{ maxWidth: '100%', height: 'auto' }} />
                                <Typography color="gray" textAlign="center">Licence</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ height: '120px', width: '100%', p: 2, borderRadius: '10px', boxShadow: 1 }}>
                                <img src={toab} alt="TOAB" style={{ maxWidth: '100%', height: 'auto' }} />
                                <Typography color="gray" textAlign="center">Membership</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ height: '120px', width: '100%', p: 2, borderRadius: '10px', boxShadow: 1 }}>
                                <img src={bimanbangladesh} alt="Biman Bangladesh" style={{ maxWidth: '100%', height: 'auto' }} />
                                <Typography color="gray" textAlign="center">Approved Agent</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>





        // <Box sx={{ mt: 10, p: 4 }}>
        //     <Grid container xs={3} sm={6} md={12}>
        //         <Box >
        //             <Typography style={{}} sx={{ fontSize: '25px', fontWeight: 'bold', color: 'black', mb: 4, textAlign: 'center' }}>Why <span style={{ color: '#990000' }}>Etrip</span>Zone</Typography>
        //         </Box>
        //         <Typography sx={{ color: 'black' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident, maiores rerum sapiente molestias nam modi explicabo nobis officiis vitae est totam rem voluptas magni quas numquam fugiat fuga eum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident, maiores rerum sapiente molestias nam modi explicabo nobis officiis vitae est totam rem voluptas magni quas numquam fugiat fuga eum</Typography>
        //     </Grid>

        //     <Grid container sx={{ mt: 8 }} xs={3} sm={6} md={12} rowSpacing={2}>
        //         <Grid item xs={12} sm={6} md={3} >
        //             <Box
        //                 sx={{ height: '120px', width: '270px', p: 2, borderRadius: '10px', boxShadow: 1 }}
        //             >
        //                 {/* <QuestionAnswerOutlinedIcon  sx={{color:'white', height:'50px',width:'50px',}}/> */}
        //                 <img src={atab} alt="" />
        //                 <Typography sx={{ color: 'gray' }}>Membership</Typography>
        //             </Box>
        //         </Grid>

        //         <Grid item xs={12} sm={6} md={3} >
        //             <Box
        //                 sx={{ height: '120px', width: '270px', p: 2, borderRadius: '10px', boxShadow: 1 }}
        //             >

        //                 {/* <StickyNote2Icon  sx={{color:'white', height:'50px',width:'50px',}}/> #004334 */}
        //                 <img src={iata} alt="" />
        //                 <Typography sx={{ color: 'gray' }}>Licence</Typography>
        //             </Box>
        //         </Grid>

        //         <Grid item xs={12} sm={6} md={3} >
        //             <Box
        //                 sx={{ height: '120px', width: '270px', p: 2, borderRadius: '10px', boxShadow: 1 }}
        //             >
        //                 <img src={toab} alt="" />
        //                 {/* <FavoriteBorderIcon  sx={{color:'white', height:'50px',width:'50px',}}/> */}
        //                 <Typography sx={{ color: 'gray' }}>Membership</Typography>
        //             </Box>
        //         </Grid>

        //         <Grid item xs={12} sm={6} md={3} >
        //             <Box
        //                 sx={{ height: '120px', width: '270px', p: 2, borderRadius: '10px', boxShadow: 1 }}
        //             >
        //                 {/* <CardGiftcardIcon  sx={{color:'white', height:'50px',width:'50px',}}/>#4C8175 */}
        //                 <img src={bimanbangladesh} alt="" />
        //                 <Typography sx={{ color: 'gray' }}>Approved Agent</Typography>
        //             </Box>
        //         </Grid>

        //         {/* <Grid item xs={6} sm={3} md={3} sx={{height:'120px', width:'50px',backgroundColor:'#004334',p:2,borderRadius:'10px'}}>
        //         <StickyNote2Icon  sx={{color:'black', height:'50px',width:'50px', mx:'10px'}}/>
        //         <Typography sx={{color:'black'}}>Easy Booking</Typography>
        //         </Grid> */}
        //         {/* <Grid item xs={6} sm={3} md={3} sx={{height:'120px', width:'50px',backgroundColor:'yellow',p:2,borderRadius:'10px'}}>
        //         <StickyNote2Icon  sx={{color:'black', height:'50px',width:'50px',}}/>
        //         <Typography sx={{color:'black'}}>Easy Booking</Typography>
        //         </Grid> */}
        //         {/* <Grid item xs={6} sm={3} md={3} sx={{height:'120px', width:'50px',backgroundColor:'green',p:2,borderRadius:'10px'}}>
        //         <StickyNote2Icon  sx={{color:'black', height:'50px',width:'50px',}}/>
        //         <Typography sx={{color:'black'}}>Easy Booking</Typography>





        //         </Grid> */}

        //     </Grid>
        // </Box>
    )
}

export default WhyUs
