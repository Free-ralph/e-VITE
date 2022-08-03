import React from 'react'
import Navbar from '../components/Navbar'


const QrCode = () => {
  return (
    <>
        <Navbar color = 'bg-primary' burgerColor = 'text-secondary'/>
        <div className='h-screen w-screen bg-secondary '>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='w-60 h-60 bg-white'>
              <img src='/media/qr_codes/qr_code.png' alt='Qr Code' className=''/>
            </div>
            <p className='text-center mt-12 md:w-1/4 font-semibold'>Scanning this would take you to the wedding Program This Qr Code can also be found on the wedding 
            card and banner</p>
          </div>
        </div>
    </>
  )
}

export default QrCode