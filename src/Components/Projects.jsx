import React from 'react';
import Slider from './ProjectOne';

const Projects = () => {
    return (
        <div id='projects' className='max-w-screen-lg mx-auto my-24'>
            <h1 className='uppercase text-4xl font-bold border-b-4 border-[#068E75] w-1/6  text-[#068E75]'>projects</h1>
            <Slider></Slider>
        </div>
    );
};

export default Projects;