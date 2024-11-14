import React from 'react';

import './Resume.css'
import Picture from '../../assesets/prasantg.png';
import ResumePic from '../../assesets/Resume.jpg'
import { Link, useLocation } from 'react-router-dom';
import About from '../../assesets/icons/info.png';
import Resumes from '../../assesets/icons/cv.png';
import Projects from '../../assesets/icons/project.png';
import contanct from '../../assesets/icons/contact.png';

import Skill from '../../assesets/icons/aptitude.png';

export const Resume = () => {
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
              <img src={Resumes} />
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
              <img src={contanct} />
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
            <h1>Resume</h1>
          </div>
          <div className='about-myName'>
            <h1>Lakshmi prasanth</h1>
          </div>
        </div>
        <hr />
        <div className='about-item2'>
          <img src={ResumePic} />
        </div>
      </div>
    </div>
  )
}
