
import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    CartDesc : "This website is a landing page for cart and shooping",
    CartGithub : "https://github.com/punitydv98/cart",
 

    
    WeatherDesc : "A website that show weather information",
    WeatherGithub : "https://github.com/punitydv98/celebal-major-project",
 

  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            
        </div>
    </div>
  )
}

export default  ProjectBox