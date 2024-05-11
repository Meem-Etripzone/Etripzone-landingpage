import { Box, Grid } from '@mui/material'
import { HiArrowRightEndOnRectangle } from 'react-icons/hi2';
import Logo from '../../assets/logo7.png'

const Navbar = () => {

  return (

    <Grid container justifyContent="center">
      <Grid item xs={12} md={12} sx={{ px: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex' }}>
            <img src={Logo} alt="Logo"
            // style={{ maxWidth: '100px', maxHeight: '50px' }} 
            />
          </Box>
          <Box sx={{ display: 'flex', my: { xs: 2, md: 5 } }}>
            <button
              style={{ padding: '8px 16px', fontSize: '14px', backgroundColor: '#001E17', color: '#ffffff', border: 'none', borderRadius: '4px' }}
            >
              <HiArrowRightEndOnRectangle style={{ marginRight: '5px' }} /> Register
            </button>
          </Box>
        </Box>
      </Grid>
    </Grid>


  )
}

export default Navbar
