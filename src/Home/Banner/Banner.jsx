
import banner from '../../assets/banner.jpg'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';


const Banner = () => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ height: { xs: '430px', md: '430px' } }}>
      <Grid item xs={12} >
        <Box >
          <img src={banner} alt="Banner" style={{ width: '100%', objectFit: 'cover' }} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: { xs: '350px', md: '350px' },
            backgroundColor: '#ffffff',
            border: '2px solid #ffffff',
            borderRadius: 2,
            '& > :not(style)': { m: 1 },
            padding: { xs: '20px', md: '40px' },
            position: 'relative',
            left: { xs: '700px', md: '700px' },
            bottom: { xs: '460px', md: '460px' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '15px', md: '25px' },
              textAlign: { xs: 'start', md: 'center' },
              fontWeight: 'bold',
              color: 'black',
              // marginLeft: { xs: '6px', md: '0' },
            }}
          >
            Already <br /> Using <span style={{ color: '#990000' }}>Etrip</span>zone?
          </Typography>
          <TextField id="email" label="Email" variant="standard" fullWidth margin="normal" />
          <TextField id="password" label="Password" variant="standard" fullWidth margin="normal" />
          <Button
            sx={{
              width: { xs: '100%' },
              backgroundColor: "#001E17",
              color: "#ffffff",
              marginTop: '20px',
            }}
            variant="contained"
          >
            Login
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Typography sx={{ color: '#6a6a6a', fontSize: '12px' }}>Don't have an account? </Typography>
            <a href="" style={{ color: '#990000', fontSize: "12px", marginLeft: '5px' }}>Register Now</a>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}



export default Banner
