import React from 'react';
import './Home.css';
import About from '../../assesets/icons/info.png';
import Resume from '../../assesets/icons/cv.png';
import Project from '../../assesets/icons/project.png';
import Skill from '../../assesets/icons/aptitude.png';
import Picture from '../../assesets/prasantg.png';
import contancts from '../../assesets/icons/contact.png';
import { Link, useLocation } from 'react-router-dom';


export const Home = () => {
  const location = useLocation();
  const path = location.pathname.replace(/\/$/, ''); // Remove trailing slashes if any


  const positionOne = path === '' ? 'homeIcons-content item-1' : 'homeIcons-content';
  const positionTwo = path === '' ? 'homeIcons-content item-4' : 'homeIcons-content';


  return (
    <div className='home'>
      <div className='homeIcons'>
        <div className={positionOne}>
          <Link to='about'>
            <img src={About} />
            <p>About</p></Link>
        </div>
        <div className='homeIcons-content'>
          <Link to="resume">
            <img src={Resume} />
            <p>Resume</p></Link>
        </div>
        <div className='homeIcons-content'>
          <Link to="project">
            <img src={Project} />
            <p>Project</p>
          </Link>
        </div>
        <div className={positionTwo}>
          <Link to="contact">
            <img src={contancts} />
            <p>Contact</p>
          </Link>
        </div>
      </div>
      <div className='picture'>
        <img src={Picture} />
      </div>
      <div className='content'>
        <h2>HI THERE!</h2>
        <h1>Lakshmi prasanth</h1>
        <div>
          <p>Node js Developer | React Developer | Web design</p>
        </div>
        <p className='paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <button className='button-11'>Contact Me</button>
      </div>
    </div>
  )
}
