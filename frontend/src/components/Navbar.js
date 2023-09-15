import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const onLogout = ()=>{
    localStorage.removeItem('user_data');
    navigate('/login');
  }

  return (
    <div><header className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0"href='/'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">MARS</span>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-white" href='/allalerts'>All Alerts</a>
        <a className="mr-5 hover:text-white" href='/newalert'>New Alert</a>
        <a className="mr-5 hover:text-white" href='/myprofile'>My Profile</a>
        <a className="mr-5 hover:text-white" href='/contact'>Contact Us</a>
      </nav>
      <button onClick={()=>{onLogout()}} className="nline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Logout</button>
    </div>
  </header></div>
  )
}

export default Navbar