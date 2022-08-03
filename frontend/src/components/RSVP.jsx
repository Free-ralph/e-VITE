import React from 'react'
import RsvpButton from './RsvpButton'
import { useStateContext } from '../context/ContextProvider'


const RSVP = () => {
  const { weddingDate } = useStateContext()
  return (
    <div className='h-screen w-full md:w-1/4 flex flex-col justify-center items-center'>
      <p className='text-center flex-col flex pt-10 md:pt-0'>
          <span className='text-8xl text-gray-200 md:text-primary font-extrabold translate-y-8 md:translate-y-6'>Kelly</span>
          <span className='font-cursive text-5xl  translate-y-5 md:translate-y-5 m-0 text-semibold'>and</span>
          <span className='text-8xl text-gray-200 translate-y-4 md:text-primary  font-extrabold'>Kate</span>
      </p>
      <p className='mt-3 text-center font-cursive text-5xl '>
          Are getting married
      </p>
      <p className='mb-5 md:mb-12 text-xl text-primary font-black text-center font-cursive'>{new Date(weddingDate.date).toDateString()} <br /> by 2:00pm</p>
      <RsvpButton />
    </div>
  )
}

export default RSVP