import { useState } from 'react'

import './App.css'
import Banner from './Home/Banner/Banner'
import BannerLogin from './Home/Banner/BannerLogin'
import BannerModal from './Home/Banner/BannerModal'
import Navbar from './Home/Shared/Navbar'
import KeyAirlines from './Home/KeyAirlines/KeyAirlines'
import Footer from './Home/Shared/Footer'
import WhyUs from './Home/WhyUs/WhyUs'
import ExploreWorld from './Home/ExploreWorld/ExploreWorld'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
     <Banner />
<KeyAirlines />
{/* <ExploreWorld /> */}
<WhyUs />
<Footer />
     {/* <BannerLogin /> */}
     {/* <BannerModal /> */}
    </>
  )
}

export default App
