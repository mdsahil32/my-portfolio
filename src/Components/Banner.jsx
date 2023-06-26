import React from 'react';
import computer from '../../public/computer.json'
import Lottie from 'lottie-react'

const Banner = () => {
    return (
        <div id='home' className='md:flex justify-center items-center max-w-screen-lg mx-auto'> 
            <div>
                <h1 className='text-7xl uppercase font-semibold'><span className='text-[#068E75] underline'>Welcome,</span>
                <br /> <span>To My Portfolio</span></h1>
                <p className='text-xl my-2 mb-8'>I'm a Junior Front-end Web Developer</p>
                <a className='bg-gradient-to-r from-black to-[#068E75] text-white text-xl p-3 rounded-lg' href="https://drive.google.com/file/d/1qIyfvZPbgB2N27gm7IHIlkdnM5OYNBt6/view">Resume</a>
            </div>
            <div >
                <Lottie animationData={computer}></Lottie>
            </div>
        </div>
    );
};

export default Banner;