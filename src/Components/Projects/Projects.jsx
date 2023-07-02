import React from 'react';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectsThree from './ProjectsThree';

const Projects = () => {
    return (
        <div id='projects' className='max-w-screen-lg mx-auto my-24'>
            <h1 className='uppercase text-5xl font-bold border-b-4 border-black w-1/12 mb-8'>projects</h1>
           <ProjectOne></ProjectOne>
           <ProjectTwo></ProjectTwo>
           <ProjectsThree></ProjectsThree>
        </div>
    );
};

export default Projects;