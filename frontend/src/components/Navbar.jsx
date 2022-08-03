import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({color, bgOpacity, burgerColor}) => {
  const [activeNav, setActiveNav] = useState(false)
  const activeStyle = 'capitalize border-b-2 text-secondary font-bold tracking-wide border-gray-200 px-4 py-2 hover:bg-secondary hover:text-primary transition-all ease-in delay-75 cursor-pointer hover:opacity-80'
  const normalStyle = 'capitalize text-secondary font-bold tracking-wide border-gray-200 px-4 py-2 hover:bg-secondary hover:text-primary transition-all ease-in delay-75 cursor-pointer hover:opacity-80'
  const links = [
    {name : 'Home', link : '/'},
    {name : 'Guests', link : '/guests'},
    {name : 'Wedding Program', link : '/program'},
    {name : 'Qr Code', link : '/qr-code'}]
  return (
    <>
      <div  style = {
          activeNav ? {transform : 'translateX(0)'} : {transform : 'translateX(-100%)'}
        }
        className={`z-10  ease-linear delay-75 transition-all h-screen ${color} fixed md:hidden w-screen flex items-center justify-center `}>
        <div className='flex flex-col justify-around h-4/5 items-center'>
          {links.map((link) => (
            <Link to = {link.link} key = {link.name} className='text-secondary text-3xl font-bold hover:opacity-75' >{link.name}</Link> 
          ))}
        </div>
      </div>


      <div className={ `fixed flex w-screen p-3 ${color} h-16 ${bgOpacity} flex-row justify-between items-center`}>
          <Link to = '/' className={`${burgerColor} font-bold text-2xl tracking-tighter`}>K&K</Link> 
          <div className='flex-row justify-center hidden md:flex'>
            {links.map((link) =>(
                <NavLink key={link.name} to = {link.link} className={({isActive}) => isActive ? activeStyle : normalStyle} >
                  {link.name}
                </NavLink>
            ))}
          </div>
      </div>
      <span className={`${burgerColor} fixed text-4xl right-1 top-4 mr-5 cursor-pointer md:hidden z-50`}
        onClick={() => setActiveNav((prev) => !prev)}>
        { activeNav ? <AiOutlineClose className='text-secondary'/> : <GiHamburgerMenu />}
      </span>
    </>
  )
}

export default Navbar