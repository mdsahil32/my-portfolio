import React from 'react';
import img from '../assets/profile.png'
import gitHub from '../assets/github-logo.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Banner = () => {
    return (
        <div id='home' className='md:flex justify-center items-center max-w-screen-lg mx-auto'>
            <div>
                <h1 className='text-6xl  font-bold'>Front-End <span className='text-[#068E75]'>React</span> Developer 👋</h1>
                <p className='my-4 mb-8'> Hi, I'm Mohammed Sahil. A passionate Front-end React Developer based in Chittagong, Bangladesh.</p>
                <a className='bg-gradient-to-r from-black to-[#068E75] text-white text-xl p-3 rounded-lg' href="https://drive.google.com/file/d/1qIyfvZPbgB2N27gm7IHIlkdnM5OYNBt6/view">Resume</a>
                <div className='flex space-x-6 items-center mt-8'>
                    <a href="https://www.linkedin.com/in/mohammed-sahil-b7b353278/"><p className='text-3xl'><FaLinkedin></FaLinkedin></p></a>
                    <a className='' href="https://github.com/mdsahil32"><p className='text-3xl'><FaGithub></FaGithub></p></a>
                </div>
            </div>
            <div className='md:p-24 md:my-8 rounded'>
                <img className='rounded-full border-2 border-green-600 bg-gradient-to-r from-black to-[#068E75]' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;