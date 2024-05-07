import { useState } from 'react'

import './App.css'
import Banner from './Home/Banner/Banner'
import BannerLogin from './Home/Banner/BannerLogin'
import BannerModal from './Home/Banner/BannerModal'
import Navbar from './Home/Shared/Navbar'
import KeyAirlines from './Home/KeyAirlines/KeyAirlines'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
     <Banner />
<KeyAirlines />
     {/* <BannerLogin /> */}
     {/* <BannerModal /> */}
    </>
  )
}

export default App
