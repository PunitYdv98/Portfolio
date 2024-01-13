import React from 'react';
import Skills from './Skills.js';

const About = () => {
  return (
    <>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Punit Yadav</b> and I am from Rewari,Haryana.
            I'm a <b>MERN stack web developer</b> and a final year college student pursuing <b>BTech in CSE</b>. <br/><br/>
            I have done an internship as a <b>Front-end developer</b> at Celebal Technolgies.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to play Cricket and Badminton.
          </p>
        </div>

        <div>
         
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About