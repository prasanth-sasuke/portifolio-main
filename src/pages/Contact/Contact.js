import React from 'react';
import Picture from '../../assesets/prasantg.png';
import { Link, useLocation } from 'react-router-dom';
import About from '../../assesets/icons/info.png';
import Resume from '../../assesets/icons/cv.png';
import Projects from '../../assesets/icons/project.png';
import contancts from '../../assesets/icons/contact.png';
import phoneIcon from '../../assesets/telephone.png'
import emailIcon from '../../assesets/send-message.png'
import './Contact.css';

export const Contact = () => {
  const location = useLocation();
  const path = location.pathname.replace(/\/$/, ''); // Remove trailing slashes if any

  console.log(path);

  const positionOne = path === '' ? 'homeIcons-content item-1' : 'homeIcons-content';
  const positionTwo = path === '' ? 'homeIcons-content item-4' : 'homeIcons-content';
  console.log(positionOne, positionTwo);
  return (
    <div className='about'>
      <div className='about-menu'>
        <div className='homeIcons'>
          <div className={positionOne}>
            <Link to='/about'>
              <img src={About} />
              <p>About</p></Link>
          </div>
          <div className='homeIcons-content'>
            <Link to="/resume">
              <img src={Resume} />
              <p>Resume</p></Link>
          </div>
          {/* <div className='homeIcons-content'>
          <Link to="/skill">
            <img src={Skill} />
            <p>Skill</p>
          </Link>
        </div> */}
          <div className={positionTwo}>
            <Link to="/project">
              <img src={Projects} />
              <p>Project</p>
            </Link>
          </div>
          <div className={positionTwo}>
            <Link to="/contact">
              <img src={contancts} />
              <p>contanct</p>
            </Link>
          </div>
        </div>
      </div>
      <div className='about-main'>
        <div className='about-item1'>
          <div className='about-pic'>
            <img src={Picture} />
          </div>
          <div className='about-tittle'>
            <h1>Contact Us</h1>
          </div>
          <div className='about-myName'>
            <h1>Lakshmi prasanth</h1>
          </div>
        </div>
        <hr />
        <div className='contact-content'>
          <h1>Get In Touch</h1>
          <p>Dedicated Full Stack Developer with 2.6 years of experience, seeking to leverage skills in backend and frontend development to create functional and engaging applications that prioritize user experience and efficient performance. Proficient in crafting responsive designs, optimizing backend processes, and ensuring seamless user interaction through well-structured code.</p>
          <div className='contact-contact item'>
            <div className='contact-line'>
              <img src={emailIcon}/>
              <p>prasanthsathasivam2001@gmail.com</p>
            </div>
            {/* <hr/> */}
            <div>
              <img src={phoneIcon}/>
              <p>9500573795</p>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}
