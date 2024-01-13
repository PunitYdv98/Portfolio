import React from 'react';

import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';




const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Punit Yadav</b></h1>
          <Typed/>   
        </div>

       
       
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'><b>LET ME INTRODUCE MYSELF</b></h1>
          <p>
          I am a passionate web developer ready to dive into the exciting world of coding and web development
          <hr/>
          I've honed my skills to build visually appealing, user-friendly, and efficient websites
          <hr/>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. 
            <br></br>
            <hr/>
            I want to do work that challenges me as a developer & work that I can 
            be proud of.
            <hr/>
            I am fluent in <b>C++</b> and know a bit of <b>Python</b> and am working on a few 
            projects in the <b>MERN</b> stack.<hr/>
            I plan to learn <b>Next.js</b>, <b>Three.js</b> and<b> Typescript</b> in the near future. 
            <hr/>
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
     
    </div>
     
  )
}

export default Home