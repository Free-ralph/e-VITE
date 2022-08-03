import React, {useState, useEffect, useContext } from 'react'
import Navbar from '../components/Navbar'
import RsvpButton from '../components/RsvpButton'
import { fetchData } from '../utils/FetchData'
import GuestListContainer from '../components/GuestListContainer'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <p onClick={() => scrollPrev()} className = 'text-4xl text-primary cursor-pointer'>{<AiOutlineArrowLeft/>}</p>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
      <p onClick={() => scrollNext()} className = 'text-4xl text-primary cursor-pointer'>{<AiOutlineArrowRight/>}</p>
  );
};


const Guest = () => {
  const [noGuest, setNoGuest ] = useState(false)
  const [guests, setguests] = useState([])
  useEffect(() => {
    const fetchGuests =  async () => {
      const guest = await fetchData('/api/guests', 'GET')
      setguests(guest)

      if (guest.length == 0){
        setNoGuest(true)
      }else{
        setNoGuest(false)
      }
    } 
    fetchGuests()
  }, [])

  const lenOfGuest = guests.length 
  const rangeOfGuests = Math.floor(lenOfGuest / 10)
  const guestComponent = [] 
  let i = 0
  while (i <= (rangeOfGuests * 10)) {
    guestComponent.push(<GuestListContainer guests = {guests.slice(i, i + 10)}/>)
    i = i + 10
  }
  return (
    <>
      <Navbar color = 'bg-primary' burgerColor = 'text-secondary'/>
      <div className='h-screen w-screen bg-secondary'>
      {noGuest ? 
          <div className='flex flex-col items-center justify-center h-full w-full'>
              <h2 className='text-5xl text-center  font-bold mb-5'>There are no Guests Yet</h2>
              < RsvpButton/>
          </div>
       :  <div className='flex flex-col items-center justify-center h-full w-full'>
              <h2 className='text-5xl font-bold mb-5'>Guest List</h2>
              <div className = 'md:flex relative md:flex-row justify-around w-full'>
                
              <ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow}>
                {guestComponent.map((component) => (
                  <>{component}</>
                ))}
              </ScrollMenu>
              </div>
              <p className = 'font-extrabold text-center text-2xl mt-3 font-cursive'>we're exppecting 50 lovely Guests <Link to = '/rsvp' className='text-blue-500 font-display font-semibold text-sm'>reserve a spot</Link></p>
          </div>
      }
      </div>
    </>
  )
}

export default Guest