import React from 'react'
import { useStateContext } from '../context/ContextProvider'


const GuestListContainer = ({guests}) => {
    const { activeGuest } = useStateContext()
    console.log(activeGuest)
  return (
    <div className='flex flex-col w-full items-center mx-14 mb-5'>
        {guests.map((guest) => (
            <p className={`text-center font-semibold ${(activeGuest.email === guest.email) ? 'text-red-500' : 'text-primary'}` }key = {guest.id}>{guest.name}</p>
        ))}
    </div>
  )
}

export default GuestListContainer