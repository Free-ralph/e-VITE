import React from 'react'
import {Link} from 'react-router-dom'
const RsvpButton = () => {
  return (
    <Link  
        to='/rsvp/'
        className="w-32 p-2 text-center bg-gray-200 border-gray-600 border-2 font-bold opacity-75 text-primary hover:bg-primary hover:text-gray-200 rounded transition-all ease-in delay-75">
        RSVP
    </Link>
  )
}

export default RsvpButton