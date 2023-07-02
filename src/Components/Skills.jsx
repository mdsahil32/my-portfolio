import React from 'react';
import html from '../assets/html.svg'
import backend from '../assets/backend.png'
import others from '../assets/customer-support.png'

const Skills = () => {
    return (
        <div id='skills' className='max-w-screen-lg mx-auto'>

            {/* <Lottie animationData={computer}></Lottie> */}
            <h1 className='text-5xl mb-6 border-l-4 border-black font-semibold'>My Skills</h1>
            <div className='grid md:grid-cols-3 gap-5'>

                <div className='shadow-xl text-center mx-auto'>
                    <div className='bg-gradient-to-r from-white to-[#068E75] text-black mx-auto px-24 py-6'>
                        <img className='w-16' src={html} alt="" />
                        <h3 className='text-xl font-semibold'>Front-End</h3>
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

                <div className='shadow-xl text-center mx-auto'>
                    <div className='bg-gradient-to-r from-white to-[#068E75]  mx-auto px-24 py-6'>
                        <img className='w-16' src={backend} alt="" />
                        <h3 className='text-xl font-semibold'>Back-End</h3>
                    </div>
                    <div className='p-8'>
                        <p>NODE JS</p>
                        <p>EXPRESS JS</p>
                        <p>MONGODB</p>
                    </div>
                </div>

                <div className='shadow-xl text-center mx-auto'>
                    <div className='bg-gradient-to-r from-white to-[#068E75]  mx-auto px-24 py-6'>
                        <img className='w-16' src={others} alt="" />
                        <h3 className='text-xl font-semibold'>Other</h3>
                    </div>
                    <div className='p-8'>
                        <p>GitHub</p>
                        <p>Netlify</p>
                        <p>Firebase</p>
                        <p>VS Code</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;