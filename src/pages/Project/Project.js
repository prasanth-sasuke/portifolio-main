import React from 'react';
import './Project.css'
import Picture from '../../assesets/prasantg.png';
import projectsData from './projectsData.json';
import { Link, useLocation } from 'react-router-dom';
import About from '../../assesets/icons/info.png';
import Resume from '../../assesets/icons/cv.png';
import Projects from '../../assesets/icons/project.png';
import contanct from '../../assesets/icons/contact.png';


export const Project = () => {
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
            <h1>Project</h1>
          </div>
          <div className='about-myName'>
            <h1>Lakshmi prasanth</h1>
          </div>

        </div>
        <hr />
        <div className='project-content'>
          {projectsData.map((project) => (
            <div key={project.id} className='project-card'>
              <img src='https://phenowise.com/wp-content/uploads/2024/03/phenowise-logo.svg' alt={project.title} className='project-image' />
              <div className='project-info'>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className='project-tech'>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className='tech-badge'>{tech}</span>
                  ))}
                </div>
                <p><strong>Role:</strong> {project.role}</p>
                <ul className='responsibilities'>
                  {project.responsibilities.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
                <a href={project.link} target='_blank' rel='noopener noreferrer' className='project-link'>
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
