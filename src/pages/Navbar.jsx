import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className='nav-bar'>
      <div className='logo'>JobFlight</div>
      <div className='middleLinks'>
      <Link to= '/home'>Home</Link>
      <Link to= '/about'>About</Link>
      <Link to= '/career'>Career</Link>
      <Link to= '/specialization'>Specialization</Link>

      </div>
      <div className='left'>
      <Link to= '/login'>Login</Link>
      <Link to= '/register'>Register</Link>
      </div>
    </div>
  )
}

export default Navbar
