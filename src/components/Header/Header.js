import React from 'react';
import './Header.css';
import { IoIosMail } from "react-icons/io";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import Logo from '../../assesets/prasanth.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='headerOne'>
        <Link to="/"><img src={Logo} alt='name'/></Link>
      </div>
      <div className='headerTwo'>
        <div ><a href="mailto:prasanthsathasivam2001@gmail.com"><span><IoIosMail /></span>prasanthsathasivam2001@gmail.com</a></div>
        <div > <a href="tel:9500503795"><span><MdOutlineContactPhone /></span>9500503795</a></div>
        <div > <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><span><FaLinkedin /></span>LinkedIn</a></div>
      </div>
    </header>
  )
}

export default Header