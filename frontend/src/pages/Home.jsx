import React from 'react'
import RSVP from '../components/RSVP'
import Countdown from '../components/Countdown'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div className='overflow-hidden'>
      <div className='overlay'></div>
      <Navbar color = 'bg-primary' bgOpacity='bg-opacity-10' burgerColor='text-primary' />
      <div className='w-screen h-screen bg-home-bg bg-right-top bg-cover bg-no-repeat flex flex-col md:flex-row '>
        <RSVP />
        <Countdown />
      </div>
    </div>
  )
}

export default Home