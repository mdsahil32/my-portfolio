import React from 'react';
import img from '../assets/profile.png'

const Banner = () => {
    return (
        <div id='home' className='md:flex justify-center items-center max-w-screen-lg mx-auto'> 
            <div>
                <h1 className='text-6xl  font-bold'>Front-End <span className='text-[#068E75]'>React</span> Developer 👋</h1>
                <p className='my-4 mb-8'> Hi, I'm Mohammed Sahil. A passionate Front-end React Developer based in Chittagong, Bangladesh.</p>
                <a className='bg-gradient-to-r from-black to-[#068E75] text-white text-xl p-3 rounded-lg' href="https://drive.google.com/file/d/1qIyfvZPbgB2N27gm7IHIlkdnM5OYNBt6/view">Resume</a>
            </div>
            <div className='p-24 my-8 rounded'>
                <img className='rounded-full border-2 border-green-600 bg-gradient-to-r from-black to-[#068E75]' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;