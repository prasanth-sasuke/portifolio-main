import React from 'react'
import { Menu } from '../../components/Menu/Menu';
import './About.css'
import Picture from '../../assesets/prasantg.png';
import ResumePic from '../../assesets/Resume.jpg'
import { Link, useLocation } from 'react-router-dom';
import Abouts from '../../assesets/icons/info.png';
import Resumes from '../../assesets/icons/cv.png';
import Projects from '../../assesets/icons/project.png';
import contanct from '../../assesets/icons/contact.png';

import Skill from '../../assesets/icons/aptitude.png';

export const About = () => {
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
              <img src={Abouts} />
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
            <h1>About Me</h1>
          </div>
          <div className='about-myName'>
            <h1>Lakshmi prasanth</h1>
          </div>

        </div>
        <hr />
        <div className='about-item2'>
          <div className='about-top'>
            <h1>I'm <span>Lakshmi prasanth</span></h1>
            <p>Node js developer | React developer | Full stack developer</p>
          </div>
          <p>
            I'm a passionate software developer with 2.6 years of professional experience, specializing in Node.js and React. Over the course of my career, I’ve developed strong backend and frontend skills, allowing me to create well-rounded, full-stack applications that deliver high performance, scalability, and seamless user experiences.
          </p>
          <p>
            With a deep understanding of Node.js, I've developed robust server-side applications and APIs, ensuring efficient handling of complex business logic and data management. My frontend expertise in React enables me to design interactive and responsive interfaces, providing users with a seamless and engaging experience.
          </p>
          <p>
            I also have significant experience with Amazon Web Services (AWS), which allows me to leverage cloud solutions for scalable, secure, and cost-effective applications. My familiarity with AWS services such as S3, DynamoDB, Lambda, and EC2 equips me to design and deploy solutions tailored to meet client needs.
          </p>
          <div className='about-skill'>
            <h2>Core Skills</h2>
            <ul>
              <li><strong>Backend Development:</strong> Node.js (Express, Serverless architecture), RESTful API design and integration</li>
              <li><strong>Frontend Development:</strong> React for building dynamic, responsive web interfaces</li>
              <li><strong>Programming Languages:</strong> Proficient in JavaScript (Node.js) and Python for versatile application development</li>
              <li><strong>API Testing:</strong> Skilled in creating and managing API endpoints using Postman Collections for streamlined testing and debugging</li>
              <li><strong>Database Management:</strong>
                <ul>
                  <li><strong>SQL:</strong> MySQL, PostgreSQL for relational database management</li>
                  <li><strong>NoSQL:</strong> Mongoose (MongoDB) and DynamoDB for scalable, flexible data storage</li>
                </ul>
              </li>
              <li><strong>Cloud Computing:</strong> Amazon Web Services (AWS) experience with services such as S3, SNS, SES, and DynamoDB for cloud-based solutions</li>
              <li><strong>Version Control:</strong> Git (GitHub, Git Desktop) for collaborative development and source code management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
