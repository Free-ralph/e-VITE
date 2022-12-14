import React from 'react'
import Navbar from '../components/Navbar'
import QrCodeImage from '../qr_code.png'

const QrCode = () => {
  return (
    <>
        <Navbar color = 'bg-primary' burgerColor = 'text-secondary'/>
        <div className='h-screen w-screen bg-secondary '>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='w-60 h-60 bg-white'>
              <img src={QrCodeImage} alt='Qr Code' className=''/>
            </div>
            <p className='text-center mt-12 md:w-1/4 font-semibold'>Scanning this will bring you to this Site's wedding program page. This Qr Code can also be found on the wedding
            card and banner</p>
          </div>
        </div>
    </>
  )
}

export default QrCode