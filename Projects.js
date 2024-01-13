import React from 'react';
import ProjectBox from './ProjectBox';
import WeatherImage from '../images/weather.jpg';
import CartImage from '../images/cart.jpg'


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>

        <ProjectBox projectPhoto={CartImage} projectName="Cart" />
        <ProjectBox projectPhoto={WeatherImage} projectName="Weather" />
      
      </div>

    </div>
  )
}

export default Projects