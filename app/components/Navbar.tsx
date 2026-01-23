import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center bg-white rounded-full p-4 w-full px-10 max-w-300 mx-auto">
        <Link to="/" className="text-2xl font-bold text-gradient">
        <img src="/images/resume-icon.png" alt="Komorebi Logo" className="inline size-16 mr-2 -mt-1" />
        <h1 className='text-komorebi-gradient'>Komorebi</h1>
        </Link>
        <Link to="/upload" className="primary-button w-fit">Upload Resume</Link>
    </nav>
  )
}

export default Navbar