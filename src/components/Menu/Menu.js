import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import About from '../../assesets/icons/info.png';
import Resume from '../../assesets/icons/cv.png';
import Project from '../../assesets/icons/project.png';

export const Menu = () => {
  const location = useLocation();
  const path = location.pathname.replace(/\/$/, ''); // Remove trailing slashes if any

  console.log(path);

  const positionOne = path === '' ? 'homeIcons-content item-1' : 'homeIcons-content';
  const positionTwo = path === '' ? 'homeIcons-content item-4' : 'homeIcons-content';
  console.log(positionOne, positionTwo);

  return (
    <div className='homeIcons'>
      <div className={positionOne}>
        <Link to='/about'>
          <img src={About} alt='name'/>
          <p>About</p></Link>
      </div>
      <div className='homeIcons-content'>
        <Link to="/resume">
          <img src={Resume} alt='name'/>
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
          <img src={Project} alt='name'/>
          <p>Project</p>
        </Link>
      </div>
    </div>
  )
}
