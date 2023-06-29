import React from 'react';
import Lottie from 'lottie-react'
import computer from '../../public/computer.json'
import { FaHtml5 } from 'react-icons/fa';
import html from '../assets/html.svg'
import backend from '../assets/backend.png'

const Skills = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>

            {/* <Lottie animationData={computer}></Lottie> */}
            <h1 className='text-4xl mb-6 font-bold text-center'>My Skills</h1>
            <div className='md:flex space-x-6'>

                <div className='shadow-xl text-center'>
                    <div className='bg-gradient-to-r from-white to-[#068E75] text-black mx-auto px-24 py-6'>
                        <img className='w-16' src={html} alt="" />
                        <h3 className='text-xl'>Front-End</h3>
                    </div>
                    <div className='p-8'>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JAVASCRIPT</p>
                        <p>REACT</p>
                        <p>TAILWIND CSS</p>
                        <p>BOOTSTRAP</p>
                    </div>
                </div>

                <div className='shadow-xl text-center'>
                    <div className='bg-gradient-to-r from-white to-[#068E75]  mx-auto px-24 py-6'>
                        <img className='w-16' src={backend} alt="" />
                        <h3 className='text-xl'>Back-End</h3>
                    </div>
                    <div className='p-8'>
                        <p>NODE JS</p>
                        <p>EXPRESS JS</p>
                        <p>MONGODB</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Skills;