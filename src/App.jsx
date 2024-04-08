import { useState } from 'react'

import PressRoom from './components/PressRoom'
import PressReleases from './components/PressReleases'
import InTheNews from './components/InTheNews'
import Cards from './components/Cards'
import SocialMedia from './components/SocialMedia'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer'
import About from './components/About'

// 

function App() {

  return (
    <>
      <div className=''>
        <div className='mx-8 md:mx[20] lg:mx-[7.2rem] mb-16 md:mb-28'>
          <PressRoom />
          <PressReleases />
          <InTheNews />
          <Cards />
          {/* <SocialMedia />
          <ContactUs /> */}
          <About />
        </div>
        <hr className='py-[.5px] bg-gray-300 mb-3'/>
        <div className=' mx-16 md:mx[20] lg:mx-[7.2rem] mb-16 md:mb-28'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
