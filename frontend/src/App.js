import React from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Router, Routes, Route} from 'react-router-dom'
import BookEvent from './pages/BookEvent'
import Guest from './pages/Guest'
import Program from './pages/Program'
import GuestLogin from './pages/GuestLogin'
import QrCode from './pages/QrCode'
const App = () => {
  return (
    <div>
      <Routes>
        <Route element = {<Home />} path = '/'/>
        <Route element = {<BookEvent />} path = '/rsvp/'/>
        <Route element = {<Guest />} path = '/guests/'/>
        <Route element = {<Program />} path = '/program/'/>
        <Route element = {<GuestLogin />} path = '/check-reservation'/>
        <Route element = {<QrCode />} path = '/qr-code'/>
      </Routes>
    </div>
  )
}

export default App