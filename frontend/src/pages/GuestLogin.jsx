import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { fetchData } from '../utils/FetchData'
import { useStateContext } from '../context/ContextProvider'

const GuestLogin = () => {
    const { setActiveGuest, activeGuest } = useStateContext()
    const [email, setEmail] = useState('')
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [emailErrorMsg, setemailErrorMsg] = useState('')
    const navigate = useNavigate()
    console.log(activeGuest)
    const handleSubmit = async() => {
        const guest = await fetchData('/api/login-guest/', 'POST', {email})

        if (!guest.id){
            setInvalidEmail(true)
            setemailErrorMsg(guest)
            console.log(guest)
        }else{
            setInvalidEmail(false)
            setemailErrorMsg('')
            setActiveGuest(guest)
            navigate('/guests')
        }
    }
  return (
    <>
        <Navbar color = 'bg-primary' burgerColor = 'text-secondary'/>
        <div className='h-screen w-screen bg-secondary'>
            <div className='flex flex-col items-center justify-center h-full w-full'>
                <h2 className='text-5xl font-bold mb-5 text-primary'>Welcome Back</h2>
                <form className='h-1/4 flex flex-col justify-around w-4/5 md:w-2/5'>
                    <input type='email' 
                        className = {`w-full border-1 h-14 p-3 mt-3 ${invalidEmail ? 'border-red-500' : "border-primary "}`}
                        placeholder='Login in with email'
                        value = {email}    
                        onChange = {(e) => {setEmail(e.target.value); setemailErrorMsg('')}} />
                    {invalidEmail && <p className="text-red-500 text-sm mt-1 mb-1    text-center">{emailErrorMsg.email}</p>}
                    <h2 className='font-bold my-3 text-center'>Be on the 
                        <Link to = '/rsvp' className = 'text-blue-500' > Guest list </Link>
                    </h2>
                    <Button onClick = {handleSubmit} type = 'button' text = 'Submit' color = "bg-primary" extra='font-bold m-auto border-2 hover:border-primary hover:border-2 hover:text-primary' />
                </form>
            </div>
        </div>
    </>
  )
}

export default GuestLogin